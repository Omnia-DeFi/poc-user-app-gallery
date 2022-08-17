import React from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

function TakeGovernmentIDFront({ fifthStepHandler }) {
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
                    <h5 className="my-2">Select a Government ID</h5>
                    <div></div>
                    
                    <div className="mt-5">
                        <div className="mb-5">
                        <p>Front of Driving Licence</p>
                        <p>Your name and photo should be clearly visible</p>
                        <img src="/images/KYC/driving-licence-front.png" alt="selfie" />
                        </div>
                        <Button
                            onClick={fifthStepHandler}
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

export default TakeGovernmentIDFront;
