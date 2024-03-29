import cookie from "js-cookie";

const getCookieFromBrowser = (key) => cookie.get(key) || "";

export const getCookieFromServer = (key, req) => {
    if (!req?.headers.cookie) {
        return "";
    }
    const rawCookie = req?.headers.cookie
        .split(";")
        .find((c) => c.trim().startsWith(`${key}=`));
    if (!rawCookie) {
        return "";
    }
    const cookieFromServer = rawCookie.split("=")[1];
    return cookieFromServer.replace(/%22/g, `"`).replace(/%2C/g, ",");
};

export const setCookie = (key, value, options) => {
    if (typeof window !== "undefined") return cookie.set(key, value, options);
};

export const removeCookie = (key, options) => {
    if (typeof window !== "undefined") cookie.remove(key, options);
};

export const getCookie = (key, req) => {
    const isBrowser = typeof window !== "undefined";
    return isBrowser
        ? getCookieFromBrowser(key)
        : getCookieFromServer(key, req);
};
