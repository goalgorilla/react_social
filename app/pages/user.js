// user.js - profile page
import { connect } from "react-redux";
import Layout from "../components/Layout";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { useRouter } from "next/router";
import ProfileBanner from "../components/atoms/ProfileBanner";

const User = ({ name }) => {
  const router = useRouter();
  return (
    <Layout title={name + " | Open Social"}>
      <ProfileBanner id={router.query.id} />
    </Layout>
  );
};

User.getInitialProps = async ctx => {
  // Get name of the user from the id passed in url
  return axios
    .get(`${API_URL}/jsonapi/user/user/${ctx.query.id}`)
    .then(response => {
      const name = response.data.data.attributes.name;
      return { name };
    })
    .catch(err => {
      console.log(err);
    });
};

export default connect(state => state)(User);
