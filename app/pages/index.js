import { connect } from "react-redux";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";
import BaseButton from "../components/atoms/BaseButton/BaseButton";

const Index = () => (
  <Layout title="Home | Open Social">
    <p>Home Page</p>
    <BaseButton>Test</BaseButton>
  </Layout>
);

Index.getInitialProps = function(ctx) {};

export default connect(state => state)(Index);
