import { AUTHENTICATE, DEAUTHENTICATE } from "../types";

const initialState = {
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { token: action.payload };
    case DEAUTHENTICATE:
      return { token: null };
    case "LOGIN_ERROR":
      return {
        error: action.payload
      };
    default:
      return state;
  }
};
