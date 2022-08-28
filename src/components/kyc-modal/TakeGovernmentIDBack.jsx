import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

function TakeGovernmentIDBack({
    sixthStepHandler,
    eighthStepHandler,
    tenthStepHandler,
    documentFrontImage,
    nationalID,
    passport,
    driverLicense,
    documentBackImage,
    setDocumentBackImage,
}) {
    return (
        <>
            <Modal.Header>
                <div className="text-center">
                    <img
                        style={{ width: "50px", height: "50px" }}
                        src="/images/kyc/logo.png"
                        alt=""
                    />
                    <h6 className="my-2">Verify your identity</h6>
                    <p className="m-0">
                        Please take a picture of front and back of your
                        government ID for KYC verification
                    </p>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="border border-2 p-5">
                    <div className="Government-id">
                        <p className="mt-4">Your Government ID</p>
                        {documentBackImage ? (
                            <button
                                type="button"
                                className="edit-icon btn btn-outline-primary"
                                onClick={eighthStepHandler}
                            >
                                <img
                                    className="pencilIcon"
                                    src="/images/kyc/pencil-edit-button.png"
                                    height="20"
                                    width="20"
                                />
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="edit-icon btn btn-outline-primary"
                                onClick={sixthStepHandler}
                            >
                                <img
                                    className="pencilIcon"
                                    src="/images/kyc/pencil-edit-button.png"
                                    height="20"
                                    width="20"
                                />
                            </button>
                        )}
                    </div>
                    <div className="Government-id-img">
                        <img src={documentFrontImage} alt="document-front" />
                        {documentBackImage && (
                            <img src={documentBackImage} alt="document-back" />
                        )}
                    </div>

                    {documentBackImage ? (
                        <>
                            <p className="my-4">
                                Front of your{" "}
                                {driverLicense && "Driving Licence"}
                                {passport && "Passport"}{" "}
                                {nationalID && "National ID"}
                            </p>
                            <p className="my-2">
                                Make sure your address is clearly visible
                            </p>
                            <img
                                className="Webcam-selfie"
                                src={documentBackImage}
                                alt="documentFront"
                            />
                        </>
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
                                                src="/images/kyc/driving-licence-back.png"
                                                alt="driving-licence-back"
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
                                                src="/images/kyc/national-id-back.png"
                                                alt="national-id-back"
                                            />
                                        )}
                                    </>
                                )}
                            </div>
                            <div className="text-center">
                                <Button
                                    onClick={eighthStepHandler}
                                    size="medium"
                                >
                                    CLICK PHOTO
                                </Button>
                            </div>
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
                        </span>
                        Your ID or photo will be used only for KYC purpose
                    </p>
                    {documentBackImage && (
                        <div className="text-center">
                            <Button onClick={tenthStepHandler} size="medium">
                                Save &amp; Continue
                            </Button>
                        </div>
                    )}
                </div>
            </Modal.Body>
        </>
    );
}

export default TakeGovernmentIDBack;
