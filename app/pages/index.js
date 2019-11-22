import { connect } from "react-redux";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";

const Index = () => (
  <Layout title="Home | Open Social">
    <p>Home Page</p>
  </Layout>
);

Index.getInitialProps = function (ctx) { };

export default connect(state => state)(Index);
