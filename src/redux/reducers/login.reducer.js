import { userActionTypes } from "../constants/usersAction.types";

const initialState = { isLoggedIn: false, isLoginError: false, loginError: "" };

const loginReducer = (state = initialState, action) => {
  console.log("received action", action);
  switch (action.type) {
    case userActionTypes.LOGIN_SUCCESS:
      return { ...state, isLoggedIn: action.payload.isLoggedIn };

    default:
      return { ...state };
  }
};

export default loginReducer;