import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

function TakeGovernmentIDBack({
    sixthStepHandler,
    tenStepHandler,
    documentFrontImage,
    nationalID,
    passport,
    driverLicense,
    eightStepHandler,
    documentBackImage,
    setDocumentBackImage,
}) {
    return (
        <>
            <Modal.Header>
                <div className="d-flex justify-content-center ">
                    <div>
                        <img
                            style={{ width: "50px", height: "50px" }}
                            className="me-4 mt-3 "
                            src="/images/KYC/logo.png"
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
                    <div className="Government-id">
                        <p className="mt-4">Your Government ID</p>
                        <button
                            type="button"
                            className="pencilButton btn btn-outline-primary"
                            onClick={sixthStepHandler}
                        >
                            <img
                                className="pencilIcon"
                                src="/images/KYC/pencil-edit-button.png"
                                height="20"
                                width="20"
                            />
                        </button>
                    </div>
                    <div className="Government-id-img">
                        <img
                            src={documentFrontImage}
                            alt="driving-licence-back"
                        />
                        {documentBackImage && (
                            <img
                                src={documentBackImage}
                                alt="driving-licence-back"
                            />
                        )}
                    </div>

                    {documentBackImage ? (
                        <></>
                    ) : (
                        <div className="mt-5">
                            <div className="mb-5 modal-id-show">
                                <p>
                                    Back of {driverLicense && "Driving Licence"}
                                    {passport && "Passport"}{" "}
                                    {nationalID && "National ID"}
                                </p>
                                <p>Your address should be clearly visible</p>
                                {documentBackImage ? (
                                    <img
                                        src={documentBackImage}
                                        alt="driving-licence-back"
                                    />
                                ) : (
                                    <>
                                        {driverLicense && (
                                            <img
                                                src="/images/KYC/driving-licence-back.png"
                                                alt="driving-licence-back"
                                            />
                                        )}
                                        {passport && (
                                            <img
                                                src="/images/KYC/passport.png"
                                                alt="passport-front"
                                            />
                                        )}
                                        {nationalID && (
                                            <img
                                                src="/images/KYC/national-id-back.png"
                                                alt="national-id-back"
                                            />
                                        )}
                                    </>
                                )}
                            </div>
                            <button
                                onClick={eightStepHandler}
                                className="btn btn-success d-flex justify-content-center mx-auto"
                            >
                                CLICK PHOTO
                            </button>
                        </div>
                    )}
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
                    <button
                        type="button"
                        class="btn btn-warning w-100"
                        onClick={tenStepHandler}
                    >
                        {" "}
                        SAVE & CONTINUE
                    </button>
                </div>
            </Modal.Body>
        </>
    );
}

export default TakeGovernmentIDBack;
