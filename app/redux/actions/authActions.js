import Router from "next/router";
import axios from "axios";
import { AUTHENTICATE, DEAUTHENTICATE } from "../types";
import { setCookie, removeCookie } from "../../utils/cookie";
import {
  API_URL,
  GRANT_TYPE,
  CLIENT_ID,
  CLIENT_SECRET
} from "../../utils/constants";

// gets token from the api and stores it in the redux store and in cookie
const authenticate = ({ username, password }, type) => {
  if (type !== "login") {
    throw new Error("Wrong API call!");
  }

  var bodyFormData = new FormData();
  bodyFormData.set("grant_type", GRANT_TYPE);
  bodyFormData.set("client_id", CLIENT_ID);
  bodyFormData.set("client_secret", CLIENT_SECRET);
  bodyFormData.set("username", username);
  bodyFormData.set("password", password);

  return dispatch => {
    const data = {
      token: null,
      username: null,
      id: null,
      avatar: null
    };
    axios
      // Obtain login token using the user's username and password
      .post(`${API_URL}/oauth/token/`, bodyFormData)
      .then(response => {
        // store token
        const token = response.data.access_token;
        data.token = token;
        setCookie("token", token);
        // Obtain the user's id to be used for getting information about the user
        return axios.get(`${API_URL}/jsonapi`, {
          headers: {
            Authorization: "Bearer " + token
          }
        });
      })
      .then(response => {
        // store id
        const id = response.data.meta.links.me.meta.id;
        data.id = id;
        setCookie("id", id);
        // Obtain the user's username using the user's id
        return axios.get(`${API_URL}/jsonapi/user/user/` + id, {
          headers: {
            Authorization: "Bearer " + data.token
          }
        });
      })
      .then(response => {
        // store username
        const username = decodeURI(response.data.data.attributes.name);
        data.username = username;
        setCookie("username", username);
        // url to get avatar id
        const profileUrl =
          response.data.data.relationships.profile_profiles.links.related.href;
        // Obtain the user's avatar id
        return axios.get(profileUrl, {
          headers: {
            Authorization: "Bearer " + data.token
          }
        });
      })
      .then(response => {
        // store user avatar id if it exists otherwise set as null
        var avatarId = response.data.data.relationships.field_profile_image.data
          ? response.data.data.relationships.field_profile_image.data.id
          : false;

        if (avatarId) {
          return axios
            .get(`${API_URL}/jsonapi/file/file/${avatarId}`, {
              headers: {
                Authorization: "Bearer " + data.token
              }
            })
            .then(response => {
              // Store the avatar url
              const imageUrl = response.data.data.attributes.uri.url;
              data.avatar = imageUrl;
              setCookie("avatar", imageUrl);
              return;
            });
        } else {
          data.avatar = "";
          setCookie("avatar", "");
        }
      })
      .then(response => {
        Router.push("/whoami");
        dispatch({ type: AUTHENTICATE, payload: data });
      })
      .catch(err => {
        dispatch({
          type: "LOGIN_ERROR",
          payload: err.response.status
        });
      });
  };
};

// gets the token from the cookie and saves it in the store
const reauthenticate = (token, username, id, avatar) => {
  const payload = {
    token: token,
    username: decodeURI(username),
    id: id,
    avatar: avatar
  };
  return dispatch => {
    dispatch({ type: AUTHENTICATE, payload: payload });
  };
};

// removing the token
const deauthenticate = () => {
  return dispatch => {
    removeCookie("token");
    removeCookie("username");
    removeCookie("id");
    removeCookie("avatar");
    Router.push("/");
    dispatch({ type: DEAUTHENTICATE });
  };
};

const clearAuthenticationStore = () => {
  return dispatch => {
    removeCookie("token");
    removeCookie("username");
    removeCookie("id");
    removeCookie("avatar");
    dispatch({ type: DEAUTHENTICATE });
  };
};

export default {
  authenticate,
  reauthenticate,
  deauthenticate,
  clearAuthenticationStore
};
