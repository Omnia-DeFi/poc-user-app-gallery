import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

function TakeGovernmentIDBack({
    documentFrontImage,
    nationalID,
    passport,
    driverLicense,
    eightStepHandler,
    documentBackImage,
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
                        <p>Your Government ID</p>
                        <div>Edit</div>
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
                        <Button
                            onClick={eightStepHandler}
                            size="medium"
                            fullwidth
                        >
                            CLICK PHOTO
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </>
    );
}

export default TakeGovernmentIDBack;
