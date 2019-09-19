import Link from "next/link";
import Head from "next/head";
import { connect } from "react-redux";
import actions from "../redux/actions";

const Layout = ({ children, title, isAuthenticated, deauthenticate }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="shortcut icon"
        href="/static/favicon.ico"
        type="image/vnd.microsoft.icon"
      />
    </Head>
    <div>
      <ul>
        {!isAuthenticated && (
          <Link href="/login">
            <a>Login</a>
          </Link>
        )}
        {isAuthenticated && (
          <li onClick={deauthenticate}>
            <a>Sign Out</a>
          </li>
        )}
      </ul>
    </div>

    <div>{children}</div>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.authentication.token
});

export default connect(
  mapStateToProps,
  actions
)(Layout);
