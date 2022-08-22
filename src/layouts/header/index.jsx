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
import React, { useEffect, useState, useCallback } from "react";
import { useUserContext } from "src/context/context";
import { logoutUser } from "src/context/actions";
import headerData from "../../data/general/header.json";
import menuData from "../../data/general/menu.json";
import { magic } from "../../utils/magic";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import IndexKYC from "@components/kyc-modal/IndexKYC";
import Form from "react-bootstrap/Form";
import DropdownMenu from "./DropdownMenu";
import { getNotifications } from "@utils/getNotReadNotifications";

const Header = ({ className }) => {
    const sticky = useSticky();
    const { offcanvas, offcanvasHandler } = useOffcanvas();
    const { search, searchHandler } = useFlyoutSearch();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [notificationsCount, setNotificationsCount] = useState(0);

    const { state, dispatch } = useUserContext();

    // modal state here start
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };

    const updateNotifications = async () => {
        const notifications = await getNotifications(state.email);
        setNotificationsCount(notifications.length);
    };

    useEffect(() => {
        setIsAuthenticated(state.login);
        updateNotifications();
    }, [state]);

    const logout = useCallback(() => {
        magic.user.logout().then(() => {
            dispatch(logoutUser());
        });
        router.push("/login");
    }, [state.email]);

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
                            {isAuthenticated && (
                                <>
                                    <IndexKYC
                                        show={showBidModal}
                                        handleModal={handleBidModal}
                                    />

                                    <div className="setting-option rn-icon-list notification-badge">
                                        <div className="icon-box">
                                            <Anchor
                                                path={headerData.activity_link}
                                            >
                                                <i className="feather-bell" />
                                                {notificationsCount > 0 && (
                                                    <span className="badge">
                                                        {notificationsCount}
                                                    </span>
                                                )}
                                            </Anchor>
                                        </div>
                                    </div>
                                </>
                            )}
                            <div
                                id="my_switcher"
                                className="setting-option my_switcher"
                            >
                                <ColorSwitcher />
                            </div>

                            <div
                                onClick={offcanvasHandler}
                                className="setting-option my_switcher mobile-menu-bar hamberger-menu-icon d-flex d-xl-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    width="21px"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            {isAuthenticated && (
                                <div
                                    id="dropdown-basic"
                                    className="setting-option my_switcher user-menu-icon"
                                    onClick={() => {
                                        setOpen(!open);
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        width="21px"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            )}

                            {open && (
                                <DropdownMenu
                                    state={state}
                                    isAuthenticated={isAuthenticated}
                                    logout={logout}
                                    handleBidModal={handleBidModal}
                                />
                            )}
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
