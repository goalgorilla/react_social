import { AUTHENTICATE, DEAUTHENTICATE } from "../types";

export const initialState = {
  token: null,
  username: null,
  id: null,
  profileImage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.payload.token,
        username: action.payload.username,
        id: action.payload.id,
        profileImage: action.payload.profileImage
      };
    case DEAUTHENTICATE:
      return { token: null, username: null, id: null, profileImage: "" };
    case "LOGIN_ERROR":
      return {
        error: action.payload
      };
    default:
      return state;
  }
};
