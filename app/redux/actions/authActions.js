import Router from "next/router";
import axios from "axios";
import { AUTHENTICATE, DEAUTHENTICATE } from "../types";
import { API, grant_type, client_id, client_secret } from "../../config";
import { setCookie, removeCookie } from "../../utils/cookie";

// gets token from the api and stores it in the redux store and in cookie
const authenticate = ({ username, password }, type) => {
  if (type !== "login") {
    throw new Error("Wrong API call!");
  }

  var bodyFormData = new FormData();
  bodyFormData.set("grant_type", grant_type);
  bodyFormData.set("client_id", client_id);
  bodyFormData.set("client_secret", client_secret);
  bodyFormData.set("username", username);
  bodyFormData.set("password", password);

  return dispatch => {
    const data = {
      token: null,
      username: null,
      id: null,
      profileImage: null
    };
    axios
      // Obtain login token using the user's username and password
      .post(`${API}/oauth/token/`, bodyFormData)
      .then(response => {
        // store token
        const token = response.data.access_token;
        data.token = token;
        setCookie("token", token);
        // Obtain the user's id to be used for getting information about the user
        return axios.get(`${API}/jsonapi`, {
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
        return axios.get(`${API}/jsonapi/user/user/` + id, {
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
        // url to get profile image id
        const profileUrl =
          response.data.data.relationships.profile_profiles.links.related.href;
        // Obtain the user's profile image id
        return axios.get(profileUrl, {
          headers: {
            Authorization: "Bearer " + data.token
          }
        });
      })
      .then(response => {
        // store user profile image id if it exists otherwise set as null
        var profileImageId = response.data.data.relationships
          .field_profile_image.data
          ? response.data.data.relationships.field_profile_image.data.id
          : false;

        if (profileImageId) {
          return axios
            .get(`${API}/jsonapi/file/file/${profileImageId}`, {
              headers: {
                Authorization: "Bearer " + data.token
              }
            })
            .then(response => {
              // Store the profile image url
              const imageUrl = response.data.data.attributes.uri.url;
              data.profileImage = imageUrl;
              setCookie("profileImage", imageUrl);
              return;
            });
        } else {
          data.profileImage = "";
          setCookie("profileImage", "");
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
const reauthenticate = (token, username, id, profileImage) => {
  const payload = {
    token: token,
    username: decodeURI(username),
    id: id,
    profileImage: profileImage
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
    removeCookie("profileImage");
    Router.push("/");
    dispatch({ type: DEAUTHENTICATE });
  };
};

const clearAuthenticationStore = () => {
  return dispatch => {
    removeCookie("token");
    removeCookie("username");
    removeCookie("id");
    removeCookie("profileImage");
    dispatch({ type: DEAUTHENTICATE });
  };
};

export default {
  authenticate,
  reauthenticate,
  deauthenticate,
  clearAuthenticationStore
};
