import Router from "next/router";
import actions from "../redux/actions";
import { getCookie } from "../utils/cookie";

// Checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default function(ctx) {
  if (ctx.isServer) {
    if (ctx.req.headers.cookie) {
      ctx.store.dispatch(
        actions.reauthenticate(
          getCookie("token", ctx.req),
          getCookie("username", ctx.req),
          getCookie("id", ctx.req),
          getCookie("profileImage", ctx.req)
        )
      );
    }
    // Users that are already logged in can not start a second session or create a new account so they are redirected to the frontpage.
  } else {
    const token = ctx.store.getState().authentication.token;

    if (token && (ctx.pathname === "/signin" || ctx.pathname === "/signup")) {
      setTimeout(function() {
        Router.push("/");
      }, 0);
    }
  }
}
