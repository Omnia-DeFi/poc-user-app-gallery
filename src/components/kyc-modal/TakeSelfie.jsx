import React from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

function TakeSelfie({ firstStepHandler, secondStepHandler,firstBack }) {
    return (
        <>
            <Modal.Header>
                <div className=" text-center">
                    <div>
                        <img
                            style={{ width: "50px", height: "50px" }}
                            src="/images/kyc/logo.png"
                            alt="KYC"
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
                <div className="border border-2 p-5 rounded-3 text-center">
                    <h5 className="my-2">Take a selfie</h5>
                    <p className="m-0">
                        Make sure your whole face is visible without any glare
                        or blur
                    </p>
                    <img width="200px" src="/images/kyc/selfie.png" alt="selfie" />
                    <div className="mt-5">
                        <Button
                            onClick={secondStepHandler}
                            size="medium"
                        >
                            CLICK PHOTO
                        </Button>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <Button
                        onClick={firstBack}
                        size="medium"
                    >
                        Back
                    </Button>
                </div>
            </Modal.Body>
        </>
    );
}

export default TakeSelfie;
