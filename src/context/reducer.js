import { setCookie } from "cookies-next";
import { removeCookie } from "@utils/cookie";
import { actionTypes } from "./actionTypes";

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case actionTypes.USER_LOGIN:
            setCookie("user", payload);
            setCookie("login", "true");
            return { ...state, ...payload };
        case actionTypes.USER_LOGOUT:
            removeCookie("user");
            setCookie("login", "false");
            return {
                issuer: "",
                email: "",
                phoneNumber: "",
                publicAddress: "",
                login: false,
                readNotification: false,
            };
        case actionTypes.READ_NOTIFICATION:
            return { ...state, readNotification: !state.readNotification };
        default:
            return state;
    }
};
