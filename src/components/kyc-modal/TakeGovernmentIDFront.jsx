import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";
import PropTypes from "prop-types";

const TakeGovernmentIDFront = ({
    fifthStepHandler,
    setNationalID,
    nationalID,
    setPassport,
    passport,
    setDriverLicense,
    driverLicense,
}) => {
    const driverLicenseHandler = () => {
        setDriverLicense(true);
        setPassport(false);
        setNationalID(false);
    };
    const passportHandler = () => {
        setDriverLicense(false);
        setPassport(true);
        setNationalID(false);
    };
    const nationalIDHandler = () => {
        setDriverLicense(false);
        setPassport(false);
        setNationalID(true);
    };

    return (
        <>
            <Modal.Header>
                <div className="text-center">
                    {/* <img
                        style={{ width: "50px", height: "50px" }}
                        src="/images/kyc/logo.png"
                        alt=""
                    /> */}
                    <h6 className="my-2">Verify your identity</h6>
                    {/* <p className="m-0">
                        Please take front and back pictures of one of your
                        identity documents below
                    </p> */}
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="border border-2 p-5">
                    <h5 className="my-2">Select a Document Type</h5>
                    <div className="select-Government-ID">
                        <div
                            className={`${
                                driverLicense && `bg-warning text-white`
                            }`}
                            onClick={driverLicenseHandler}
                            role="button"
                            tabIndex="0"
                            onKeyUp={(e) => e.preventDefault()}
                        >
                            Driving Licence
                        </div>
                        <div
                            className={`${passport && `bg-warning text-white`}`}
                            onClick={passportHandler}
                            role="button"
                            tabIndex="0"
                            onKeyUp={(e) => e.preventDefault()}
                        >
                            Passport
                        </div>
                        <div
                            className={`${
                                nationalID && `bg-warning text-white`
                            }`}
                            onClick={nationalIDHandler}
                            role="button"
                            tabIndex="0"
                            onKeyUp={(e) => e.preventDefault()}
                        >
                            National ID
                        </div>
                    </div>

                    <div className="mt-5">
                        <div className="mb-5 modal-id-show">
                            <h6 className="text-bold mb-3">
                                Front side of{" "}
                                {driverLicense && "Driving Licence"}
                                {passport && "Passport"}{" "}
                                {nationalID && "National ID"}
                            </h6>
                            <p>
                                <span>
                                    Your name and photo should be clearly
                                    visible
                                </span>
                            </p>
                            {driverLicense && (
                                <img
                                    src="/images/kyc/driving-licence-front.png"
                                    alt="driving-licence-front"
                                />
                            )}
                            {passport && (
                                <img
                                    src="/images/kyc/passport.png"
                                    alt="passport-front"
                                />
                            )}
                            {nationalID && (
                                <img
                                    src="/images/kyc/national-id-front.png"
                                    alt="national-id-front"
                                />
                            )}
                        </div>
                        <div className="text-center">
                            <Button onClick={fifthStepHandler} size="medium">
                                TAKE PICTURE
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="d-flex mt-3 justify-content-center align-items-center">
                    <span>
                        <svg
                            width="20px"
                            height="20px"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                    </span>
                    Your ID or photo will be used only for KYC purpose and
                    processed by ShuftiPro
                </div>
            </Modal.Body>
        </>
    );
};

export default TakeGovernmentIDFront;

TakeGovernmentIDFront.propTypes = {
    fifthStepHandler: PropTypes.func.isRequired,
    setNationalID: PropTypes.func.isRequired,
    nationalID: PropTypes.bool.isRequired,
    setPassport: PropTypes.func.isRequired,
    passport: PropTypes.bool.isRequired,
    setDriverLicense: PropTypes.func.isRequired,
    driverLicense: PropTypes.bool.isRequired,
};
