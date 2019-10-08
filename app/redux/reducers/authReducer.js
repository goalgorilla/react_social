import { AUTHENTICATE, DEAUTHENTICATE } from "../types";

const initialState = {
  token: null,
  username: null,
  id: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.payload.token,
        username: action.payload.username,
        id: action.payload.id
      };
    case DEAUTHENTICATE:
      return { token: null, username: null, id: null };
    case "LOGIN_ERROR":
      return {
        error: action.payload
      };
    default:
      return state;
  }
};
