export const createUserInBackOffice = (user) => {
    const data = {
        issuer: user.issuer,
        email: user.email,
        phoneNumber: user.phoneNumber,
        publicAddress: user.publicAddress,
    };
    try {
        fetch(`${BACKEND_URL}/api/user/create`, {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        })
            .then((res) => res.json())
            // eslint-disable-next-line no-shadow
            .then((data) => {
                console.log(data);
            });
    } catch (error) {
        console.log(error);
    }
};
