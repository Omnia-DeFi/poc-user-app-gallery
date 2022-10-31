/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { getCookie } from "@utils/cookie";
import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

let initialState = {
    issuer: "",
    email: "",
    phoneNumber: "",
    publicAddress: "",
    // login: false,
    login: getCookie("login"),
    login: false,
    isKYCed: false,
    readNotification: false,
};

if (typeof localStorage !== "undefined") {
    const userCookie = getCookie("user");
    if (userCookie) {
        const userCookiePayload = JSON.parse(decodeURIComponent(userCookie));
        initialState = { ...initialState, ...userCookiePayload };
    }
}

const Context = createContext({
    dispatch: () => null,
    state: initialState,
});

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={{ dispatch, state }}>
            {children}
        </Context.Provider>
    );
};

export const useUserContext = () => useContext(Context);
