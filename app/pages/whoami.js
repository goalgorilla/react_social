import axios from 'axios';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import {API_URL} from '../utils/constants';
import {useUser} from '../components/auth/userContext';
import {withTranslation} from '../i18n';

// Temporary page to display the logged in user id
const Whoami = () => {
  const user = useUser();
  return (
    <Layout title="Who Am I">
      {(user.id && (
        <p>
          You are logged in as <strong>{user.username}</strong>({user.id}).
        </p>
      )) || <p>You are not authenticated.</p>}
    </Layout>
  );
};

Whoami.getInitialProps = async ctx => {
  return {
    namespacesRequired: ['common', 'header'],
  };
};

export default withTranslation()(Whoami);
