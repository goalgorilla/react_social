import { connect } from "react-redux";
import { compose } from "redux";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";
import { withTranslation } from "../i18n";

const Index = ({ t }) => (
  <Layout title="Home | Open Social">
    <p>Home Page</p>
  </Layout>
);

Index.getInitialProps = async () => ({
  namespacesRequired: ["common", "header"]
});

// export default compose(
//   withTranslation("common"),
//   connect(state => state)
// )(Index);

export default connect(state => state)(withTranslation()(Index));
