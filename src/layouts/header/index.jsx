import PropTypes from "prop-types";
import clsx from "clsx";
import Logo from "@components/logo";
import MainMenu from "@components/menu/main-menu";
import MobileMenu from "@components/menu/mobile-menu";
import ColorSwitcher from "@components/color-switcher";
import BurgerButton from "@ui/burger-button";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import { useRouter } from "next/router";
import { useOffcanvas, useSticky, useFlyoutSearch } from "@hooks";
import { useLocalStorage } from "src/hooks/uselocalStorage";
import { useEffect, useState, useCallback } from "react";
import headerData from "../../data/general/header.json";
import menuData from "../../data/general/menu.json";
import { magic } from "../../utils/magic";

const Header = ({ className }) => {
    const sticky = useSticky();
    const { offcanvas, offcanvasHandler } = useOffcanvas();
    const { search, searchHandler } = useFlyoutSearch();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", "");
    const [userMetadata, setUserMetadata] = useLocalStorage("userMetadata", "");
    const router = useRouter();

    useEffect(() => {
        setIsAuthenticated(isLoggedIn);
    }, [isLoggedIn]);

    const logout = useCallback(() => {
        magic.user.logout().then(() => {
            setIsLoggedIn(false);
        });
        router.push("/login");
    }, [setIsLoggedIn]);

    return (
        <>
            <header
                className={clsx(
                    "rn-header haeder-default black-logo-version header--fixed header--sticky",
                    sticky && "sticky",
                    className
                )}
            >
                <div className="container">
                    <div className="header-inner">
                        <div className="header-left">
                            <Logo logo={headerData.logo} />
                            <div className="mainmenu-wrapper">
                                <nav
                                    id="sideNav"
                                    className="mainmenu-nav d-none d-xl-block"
                                >
                                    <MainMenu menu={menuData} />
                                </nav>
                            </div>
                        </div>
                        <div className="header-right">
                            {/* <div className="setting-option d-none d-lg-block">
                                <SearchForm />
                            </div>
                            <div className="setting-option rn-icon-list d-block d-lg-none">
                                <div className="icon-box search-mobile-icon">
                                    <button
                                        type="button"
                                        aria-label="Click here to open search form"
                                        onClick={searchHandler}
                                    >
                                        <i className="feather-search" />
                                    </button>
                                </div>
                                <FlyoutSearchForm isOpen={search} />
                            </div> */}
                            {!isAuthenticated && (
                                <div className="setting-option header-btn">
                                    <div className="icon-box">
                                        <Button
                                            color="primary-alta"
                                            className="connectBtn"
                                            size="small"
                                            onClick={() =>
                                                router.push("/login")
                                            }
                                        >
                                            Log In
                                        </Button>
                                    </div>
                                </div>
                            )}
                            {isAuthenticated && (
                                <>
                                    <div className="setting-option header-btn">
                                        <div className="icon-box">
                                            <Button
                                                color="primary-alta"
                                                className="connectBtn"
                                                size="small"
                                                onClick={logout}
                                            >
                                                Log Out
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="setting-option header-btn">
                                        <div className="icon-box">
                                            <Button
                                                color="primary-alta"
                                                className="connectBtn"
                                                size="small"
                                            >
                                                {userMetadata.issuer.slice(
                                                    9,
                                                    15
                                                )}
                                                ....
                                                {userMetadata.issuer.slice(-4)}
                                            </Button>
                                        </div>
                                    </div>
                                </>
                            )}
                            <div className="setting-option rn-icon-list notification-badge">
                                <div className="icon-box">
                                    <Anchor path={headerData.activity_link}>
                                        <i className="feather-bell" />
                                        <span className="badge">6</span>
                                    </Anchor>
                                </div>
                            </div>
                            <div className="setting-option mobile-menu-bar d-block d-xl-none">
                                <div className="hamberger">
                                    <BurgerButton onClick={offcanvasHandler} />
                                </div>
                            </div>
                            <div
                                id="my_switcher"
                                className="setting-option my_switcher"
                            >
                                <ColorSwitcher />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu
                isOpen={offcanvas}
                onClick={offcanvasHandler}
                menu={menuData}
                logo={headerData.logo}
            />
        </>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
