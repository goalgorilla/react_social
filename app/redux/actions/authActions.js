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
    axios
      .post(`${API}/oauth/token/`, bodyFormData)
      .then(response => {
        setCookie("token", response.data.access_token);
        Router.push("/");
        dispatch({ type: AUTHENTICATE, payload: response.data.access_token });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
};

// gets the token from the cookie and saves it in the store
const reauthenticate = token => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, payload: token });
  };
};

// removing the token
const deauthenticate = () => {
  return dispatch => {
    removeCookie("token");
    Router.push("/");
    dispatch({ type: DEAUTHENTICATE });
  };
};

export default {
  authenticate,
  reauthenticate,
  deauthenticate
};
