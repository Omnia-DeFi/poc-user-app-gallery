import { setCookie } from "cookies-next";

export const createUser = (user) => {
    const data = {
        issuer: user.issuer,
        email: user.email,
        phoneNumber: user.phoneNumber,
        publicAddress: user.publicAddress,
    };

    try {
        fetch(`/api/user/create`, {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        }).then(async (res) => {
            if (res.status === 200) {
                const userData = await res.json();
                setCookie("user", userData);
            }
        });
    } catch (error) {
        console.log("createUser issue: ", error);
    }
};
