import { getCookie } from "../utils/cookie";
import { useUser, useDispatchUser } from "../components/auth/userContext";

// Checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default function(ctx) {
  if (ctx.isServer) {
    if (ctx.req.headers.cookie) {
      ctx.store.dispatch(
        actions.reauthenticate(
          getCookie("token", ctx.req),
          getCookie("username", ctx.req),
          getCookie("id", ctx.req),
          getCookie("avatar", ctx.req)
        )
      );
    }
  }
}
