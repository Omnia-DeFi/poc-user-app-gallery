import { useEffect, useState, useMemo } from "react";
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
        // eslint-disable-next-line valid-typeof
        if (typeof window !== undefined) {
            window.OneSignal = window.OneSignal || [];
            // eslint-disable-next-line no-undef
            OneSignal.push(() => {
                // eslint-disable-next-line no-undef
                OneSignal.init({
                    appId: "1e3811b5-c496-45df-a95d-10359c7d9f0f",
                    notifyButton: {
                        enable: true,
                    },
                });
            });
        }
        return () => {
            window.OneSignal = undefined;
        };
    }, []);

    useEffect(() => {
        sal({ threshold: 0.1, once: true });
    }, [router.asPath]);

    useEffect(() => {
        sal();
    }, []);
    useEffect(() => {
        document.body.className = `${pageProps.className}`;
    });

    const modeValue = useMemo(
        () => ({ kycState, setkycState, kybState, setkybState }),
        [kybState, kycState]
    );

    return (
        <ContextProvider>
            <ModeContext.Provider value={modeValue}>
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
