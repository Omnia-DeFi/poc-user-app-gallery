import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

function VerifyDocumentFront({
    fifthStepHandler,
    documentFrontImage,
    seventhStepHandler,
    nationalID,
    passport,
    driverLicense,
   
}) {
    const [idImage, setIdImage] = useState([
        "/images/KYC/driving-licence-front.png",
        "/images/KYC/driving-licence-front.png",
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
                        {idImage.map((image, index) => {
                            <img key={index} src={image} alt="" />;
                        })}
                    </div>
                    <p className="my-2">
                        Back of {driverLicense && "Driving Licence"}
                        {passport && "Passport"} {nationalID && "National ID"}
                    </p>
                    <p className="m-0">
                        Your address should be clearly visible
                    </p>
                    <img
                        className="Webcam-selfie"
                        src={documentFrontImage}
                        alt="selfie"
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
            </Modal.Body>
        </>
    );
}

export default VerifyDocumentFront;
