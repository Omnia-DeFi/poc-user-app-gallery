import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

function DropdownMenu({ state, isAuthenticated, logout, handleBidModal }) {
    const router = useRouter();
    // the states are unverified , pending , verified , failed
    const [kycState, setkycState] = useState("unverified");
    const [kybState, setkybState] = useState("unverified");

    return (
        <div className="drop-down-menu">
            {isAuthenticated && (
                <>
                    <div className="drop-down-menu-item drop-down-single-item">
                        <div className="me-4">
                            <Image width="30px" height="30px" src="/images/profile-dropdown/wallet.svg" alt="Wallet"/>
                        </div>
                        <p>
                            {state.issuer.slice(9, 15)}
                            ....
                            {state.issuer.slice(-4)}
                        </p>
                    </div>
                    <div className="drop-down-menu-item drop-down-single-item ">
                        <div className="me-4">
                            <Image width="30px" height="30px" src="/images/profile-dropdown/email.svg" alt="Email"/>
                        </div>
                        <p> {state.email}</p>
                    </div>

                    {/* KYC Start here */}
                    { kycState === "unverified" ? (
                        <Tippy
                            content="Not verified. Click here to verify."
                            placement="left"
                        >
                            <div
                                onClick={handleBidModal}
                                className="drop-down-menu-item drop-down-single-item "
                            >
                                <div className="me-4">
                                    <Image width="30px" height="30px" src="/images/profile-dropdown/kyc_not_verified.svg" alt="KYC"/>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className="me-3 ">KYC </p>
                                    <span>
                                        ( Not verified. Click here to verify. )
                                    </span>
                                </div>
                            </div>
                        </Tippy>
                    ) : kycState === "pending" ? (
                        <Tippy content="Verification Pending" placement="left">
                            <div className="drop-down-menu-item drop-down-single-item ">
                                <div className="me-4">
                                    <Image width="30px" height="30px" src="/images/profile-dropdown/kyc_pending.svg" alt="KYC Pending"/>
                                </div>
                                <div className="d-flex justify-content-center align-items-center ">
                                    <p className="me-3 ">KYC </p>
                                    <span className="pending-text">
                                        ( Verification Pending )
                                    </span>
                                </div>
                            </div>
                        </Tippy>
                    ) : kycState === "verified" ? (
                        <Tippy
                        content="Verification Successful"
                        placement="left"
                    >
                        <div className="drop-down-menu-item drop-down-single-item ">
                            <div className="me-4">
                                <Image width="30px" height="30px" src="/images/profile-dropdown/kyc_verified.svg" alt="KYC Successful"/>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <p className="me-3 ">KYC </p>
                                <span className="successful-text">
                                    ( Verification Successful )
                                </span>
                            </div>
                        </div>
                    </Tippy>
                    ) : (
                        <Tippy
                            content="Verification failed. Click here to
                        resubmit."
                            placement="left"
                        >
                            <div
                                onClick={handleBidModal}
                                className="drop-down-menu-item drop-down-single-item "
                            >
                                <div className="me-4">
                                    <Image width="30px" height="30px" src="/images/profile-dropdown/kyc_failed.svg" alt="KYC Failed"/>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className="me-3 ">KYC </p>
                                    <span className="failed-text">
                                        ( Verification failed )
                                    </span>
                                </div>
                            </div>
                        </Tippy>
                    )}

                    {/* KYB Start Here */}
                    { kybState === "unverified" ? (
                        <Tippy
                            content="Not verified. Click here to verify."
                            placement="left"
                        >
                            <div className="drop-down-menu-item drop-down-single-item ">
                                <div className="me-4">
                                    <Image width="30px" height="30px" src="/images/profile-dropdown/kyb_not_verified.svg" alt="KYB"/>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <p className="me-4 ">KYB </p>
                                        <span>
                                            ( Not verified. Click here to
                                            verify. )
                                        </span>
                                    </div>
                                    <div className="company-info mt-1">
                                        <p>company number</p>
                                        <p>company name</p>
                                    </div>
                                </div>
                            </div>
                        </Tippy>
                   ) : kybState === "pending" ? (
                        <Tippy content="Verification Pending " placement="left">
                            <div className="drop-down-menu-item drop-down-single-item ">
                                <div className="me-4">
                                    <Image width="30px" height="30px" src="/images/profile-dropdown/kyb_pending.svg" alt="KYB Pending"/>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <p className="me-4 ">KYB </p>
                                        <span className="pending-text">
                                            ( Verification Pending )
                                        </span>
                                    </div>
                                    <div className="company-info mt-1">
                                        <p>company number</p>
                                        <p>company name</p>
                                    </div>
                                </div>
                            </div>
                        </Tippy>
                     ) : kybState === "verified" ? (
                        <Tippy
                            content="Verification Successful"
                            placement="left"
                        >
                            <div className="drop-down-menu-item drop-down-single-item ">
                                <div className="me-4">
                                    <Image width="30px" height="30px" src="/images/profile-dropdown/kyb_verified.svg" alt="KYB Successful"/>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <p className="me-4 ">KYB </p>
                                        <span className="successful-text">
                                            ( Verification Successful )
                                        </span>
                                    </div>
                                    <div className="company-info mt-1">
                                        <p>company number</p>
                                        <p>company name</p>
                                    </div>
                                </div>
                            </div>
                        </Tippy>
                      ) : (
                        <Tippy
                            content="Verification failed. Click here to
                        resubmit."
                            placement="left"
                        >
                            <div className="drop-down-menu-item drop-down-single-item ">
                                <div className="me-4">
                                    <Image width="30px" height="30px" src="/images/profile-dropdown/kyb_failed.svg" alt="KYB Failed"/>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <p className="me-4 ">KYB </p>
                                        <span className="failed-text">
                                            ( Verification failed )
                                        </span>
                                    </div>
                                    <div className="company-info mt-1">
                                        <p>company number</p>
                                        <p>company name</p>
                                    </div>
                                </div>
                            </div>
                        </Tippy>
                    )}
                </>
            )}

            {/* Log Out here */}
            <div
                onClick={logout}
                className="drop-down-menu-item drop-down-menu-item-last drop-down-single-item"
            >
                <div className="me-4">
                    <Image width="30px" height="30px" src="/images/profile-dropdown/logout.svg" alt="Logout"/>
                </div>
                <p>Log Out</p>
            </div>
        </div>
    );
}

export default DropdownMenu;
