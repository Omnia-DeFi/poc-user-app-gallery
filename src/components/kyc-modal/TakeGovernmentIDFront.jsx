import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

function TakeGovernmentIDFront({
    fifthStepHandler,
    setNationalID,
    nationalID,
    setPassport,
    passport,
    setDriverLicense,
    driverLicense,
}) {
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
                <div className="d-flex justify-content-center ">
                    <div>
                        <img
                            style={{ width: "50px", height: "50px" }}
                            className="me-4 mt-3 "
                            src="/images/kyc/logo.png"
                            alt=""
                        />
                    </div>
                    <div className="ms-4">
                        <h6 className="my-2">Verify your identity</h6>
                        <p className="m-0">
                            Please upload a selfie and provide personal details
                            for KYC verification
                        </p>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="border border-2 p-5">
                    <h5 className="my-2">Select a Government ID</h5>
                    <div className="select-Government-ID">
                        <div className={`${driverLicense && `bg-warning text-white`}`} onClick={driverLicenseHandler}>
                            Driving Licence
                        </div>
                        <div className={`${passport && `bg-warning text-white`}`} onClick={passportHandler}>Passport</div>
                        <div className={`${nationalID && `bg-warning text-white`}`} onClick={nationalIDHandler}>National ID</div>
                    </div>

                    <div className="mt-5">
                        <div className="mb-5 modal-id-show">
                            <h6 className="text-bold mb-3">
                                Front of {driverLicense && "Driving Licence"}
                                {passport && "Passport"}{" "}
                                {nationalID && "National ID"}
                            </h6>
                            <p>Your name and photo should be clearly visible</p>
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
                        <button
                            onClick={fifthStepHandler}
                            className="btn btn-success d-flex justify-content-center mx-auto"
                        >
                            CLICK PHOTO
                        </button>
                    </div>
                </div>
                <div className="">
                    <p className="d-flex mt-3 justify-content-center align-items-center">
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
                        </span>{" "}
                        Your ID or photo will be used only for KYC purpose
                    </p>
                    <button type="button" class="btn btn-secondary w-100">
                        {" "}
                        SAVE & CONTINUE
                    </button>
                </div>
            </Modal.Body>
        </>
    );
}

export default TakeGovernmentIDFront;
