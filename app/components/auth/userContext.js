import React, { useReducer, useContext } from "react";

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLoggedIn: true,
        token: action.payload.token,
        username: action.payload.username,
        id: action.payload.id,
        avatar: action.payload.avatar,
        error: ""
      };
    case "LOGIN_ERROR":
      return {
        isLoggedIn: false,
        token: "",
        username: "",
        id: "",
        avatar: "",
        error: action.payload.error
      };
    case "LOGOUT":
      return {
        isLoggedIn: false,
        token: "",
        username: "",
        id: "",
        avatar: "",
        error: ""
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const UserProvider = props => {
  const [state, dispatch] = useReducer(reducer, {
    isLoggedIn: props.state.isLoggedIn,
    token: props.state.token,
    username: props.state.username,
    id: props.state.id,
    avatar: props.state.avatar,
    error: ""
  });
  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        {props.children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
};

export const useUser = () => useContext(UserStateContext);
export const useDispatchUser = () => useContext(UserDispatchContext);
