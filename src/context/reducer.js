import { removeCookie, setCookie } from "cookies-next";
import { actionTypes } from "./actionTypes";

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case actionTypes.USER_LOGIN:
            setCookie("user", payload);
            return { ...state, ...payload, login: true };
        case actionTypes.USER_LOGOUT:
            removeCookie("user");
            return {
                issuer: "",
                email: "",
                phoneNumber: "",
                publicAddress: "",
                login: false,
            };
        default:
            return state;
    }
};
