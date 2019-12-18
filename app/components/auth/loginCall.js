import axios from 'axios';
import {setCookie} from '../../utils/cookie';
import {
  API_URL,
  GRANT_TYPE,
  CLIENT_ID,
  CLIENT_SECRET,
} from '../../utils/constants';

export const loginCall = (username, password) => {
  const data = {
    token: '',
    username: '',
    id: '',
    avatar: '',
  };

  const bodyFormData = new FormData();
  bodyFormData.set('grant_type', GRANT_TYPE);
  bodyFormData.set('client_id', CLIENT_ID);
  bodyFormData.set('client_secret', CLIENT_SECRET);
  bodyFormData.set('username', username);
  bodyFormData.set('password', password);

  return (
    axios
      // Obtain login token using the user's username and password
      .post(`${API_URL}/oauth/token/`, bodyFormData)
      .then(response => {
        // store token
        const token = response.data.access_token;
        data.token = token;
        setCookie('token', token);
        // Obtain the user's id to be used for getting information about the user
        return axios.get(`${API_URL}/jsonapi`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      })
      .then(response => {
        const id = response.data.meta.links.me.meta.id;
        // Obtain the user's username/drupal_internal__uid using the user's id
        return axios.get(`${API_URL}/jsonapi/user/user/${id}`, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });
      })
      .then(response => {
        // store id
        const drupalId = response.data.data.attributes.drupal_internal__uid;
        data.id = drupalId;
        setCookie('id', drupalId);
        // store username
        const name = decodeURI(response.data.data.attributes.name);
        data.username = name;
        setCookie('username', name);
        // url to get avatar id
        const profileUrl =
          response.data.data.relationships.profile_profiles.links.related.href;
        // Obtain the user's avatar id
        return axios.get(profileUrl, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });
      })
      .then(response => {
        // store user avatar id if it exists otherwise set as null
        const avatarId = response.data.data.relationships.field_profile_image
          .data
          ? response.data.data.relationships.field_profile_image.data.id
          : false;

        if (avatarId) {
          return axios
            .get(`${API_URL}/jsonapi/file/file/${avatarId}`, {
              headers: {
                Authorization: `Bearer ${data.token}`,
              },
            })
            .then(avatarResponse => {
              // Store the avatar url
              const imageUrl = avatarResponse.data.data.attributes.uri.url;
              data.avatar = imageUrl;
              setCookie('avatar', imageUrl);
            });
        } else {
          data.avatar = '';
          setCookie('avatar', '');
        }
      })
      .then(() => {
        return data;
      })
      .catch(err => {
        throw err;
      })
  );
};
