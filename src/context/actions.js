import { actionTypes } from "./actionTypes";

export const loginUser = (user) => ({
    payload: user,
    type: actionTypes.USER_LOGIN,
});

export const logoutUser = () => ({
    type: actionTypes.USER_LOGOUT,
});
