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
        }).then((res) => res.json());
    } catch (error) {
        console.log("createUser issue: ", error);
    }
};
