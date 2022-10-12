import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

const VerifyDocumentFront = ({
    fifthStepHandler,
    documentFrontImage,
    seventhStepHandler,
    nationalID,
    passport,
    driverLicense,
}) => {
    const [idImage, setIdImage] = useState([
        "/images/kyc/driving-licence-front.png",
        "/images/kyc/driving-licence-front.png",
    ]);

    const looksGoodHandler = () => {
        seventhStepHandler();
        // if (img.length === 0) {
        //     setIdImage(documentImage);
        //     fifthStepHandler()
        // } else if (img.length === 1) {
        //     img.push(documentImage);
        // } else {
        //     seventhStepHandler();
        // }
    };
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
                        Please take front and back pictures of one of your
                        government ID for KYC verification
                    </p>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="border border-2 p-5">
                    {/* <div className="Government-id">
                        <p>Your Government ID</p>
                        <div>Edit</div>
                    </div> */}
                    <div className="Government-id-img">
                        {idImage.map((image, index) => (
                            <img key={index} src={image} alt="" />
                        ))}
                    </div>
                    <p className="my-2">
                        Front side of your {driverLicense && "Driving Licence"}
                        {passport && "Passport"} {nationalID && "National ID"}
                    </p>
                    <p className="m-0">
                        Make sure your address is clearly visible
                    </p>
                    <img
                        className="Webcam-selfie"
                        src={documentFrontImage}
                        alt="documentFront"
                    />
                    <div className="mt-5 d-flex mx-4 justify-content-around">
                        <div>
                            <Button
                                onClick={fifthStepHandler}
                                size="medium"
                                fullwidth
                            >
                                RETAKE
                            </Button>
                        </div>
                        <div>
                            <Button
                                onClick={looksGoodHandler}
                                size="medium"
                                fullwidth
                            >
                                LOOKS GOOD
                            </Button>
                        </div>
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
                        </span>
                        Your ID or photo will be used only for KYC purpose
                    </p>
                </div>
            </Modal.Body>
        </>
    );
};

export default VerifyDocumentFront;

VerifyDocumentFront.propTypes = {
    fifthStepHandler: PropTypes.func.isRequired,
    documentFrontImage: PropTypes.string.isRequired,
    seventhStepHandler: PropTypes.func.isRequired,
    nationalID: PropTypes.bool.isRequired,
    passport: PropTypes.bool.isRequired,
    driverLicense: PropTypes.bool.isRequired,
};
