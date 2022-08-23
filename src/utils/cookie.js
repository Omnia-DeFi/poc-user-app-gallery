import cookie from "js-cookie";

const getCookieFromBrowser = (key) => {
    return cookie.get(key) || "";
};

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
    const cookie = rawCookie.split("=")[1];
    return cookie.replace(/%22/g, '"').replace(/%2C/g, ",");
};

export const setCookie = (key, value, options) => {
    if (typeof window !== "undefined") return cookie.set(key, value, options);
    return;
};

export const removeCookie = (key, options) => {
    if (typeof window !== "undefined") cookie.remove(key, options);
};

export const getCookie = (key, req) => {
    return typeof window !== "undefined"
        ? getCookieFromBrowser(key)
        : getCookieFromServer(key, req);
};
