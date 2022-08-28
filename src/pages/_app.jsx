import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import sal from "sal.js";
import { ThemeProvider } from "next-themes";
import "../assets/css/bootstrap.min.css";
import "../assets/css/feather.css";
import "../assets/css/modal-video.css";
import "react-toastify/dist/ReactToastify.css";
import "../assets/scss/style.scss";
import { ContextProvider } from "src/context/context";
import { ModeContext } from "src/context/ModeContext";													  

const MyApp = ({ Component, pageProps }) => {
	const [kycState, setkycState] = useState("unverified");
    const [kybState, setkybState] = useState("unverified");													   
    const router = useRouter();
    useEffect(() => {
        sal({ threshold: 0.1, once: true });
    }, [router.asPath]);

    useEffect(() => {
        sal();
    }, []);
    useEffect(() => {
        document.body.className = `${pageProps.className}`;
    });
    return (
        <ContextProvider>
			<ModeContext.Provider value={{kycState,setkycState,kybState,setkybState}}>
                <ThemeProvider defaultTheme="dark">
                    <Component {...pageProps} />
                </ThemeProvider>
            </ModeContext.Provider>			   
        </ContextProvider>
    );
};

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.shape({
        className: PropTypes.string,
    }),
};

export default MyApp;
