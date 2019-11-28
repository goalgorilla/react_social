import Layout from '../components/Layout';
import {withTranslation} from '../i18n';

const Index = () => {
  return (
    <Layout title="Home | Open Social">
      <p>Home Page</p>
    </Layout>
  );
};

Index.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header'],
});

export default withTranslation()(Index);
