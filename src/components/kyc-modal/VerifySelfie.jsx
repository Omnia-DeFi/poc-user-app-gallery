import React from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

function VerifySelfie({ secondStepHandler, imgSrc, fourthStepHandler }) {
    console.log(imgSrc);
    return (
        <>
            <Modal.Header>
                <div className="text-center">
                    <div>
                        <img
                            style={{ width: "50px", height: "50px" }}
                            className="mt-3 "
                            src="/images/kyc/logo.png"
                            alt=""
                        />
                    </div>
                    <div className="ms-4">
                        <h6 className="my-2 fs-2">Verify your identity</h6>
                        <p className="m-0 ">Your Selfie for KYC verification</p>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="border border-2 p-5 text-center">
                    <h5 className="my-2 text-muted">Your selfie</h5>
                    <p className="m-0 text-muted">
                        Make sure your whole face is visible without any glare
                        or blur
                    </p>
                    <div className="mt-3">
                        <img
                            className="Webcam-selfie"
                            src={imgSrc}
                            alt="selfie"
                        />
                    </div>
                    <div className="mt-5 d-flex mx-4 justify-content-around">
                        <div>
                            <Button
                                onClick={secondStepHandler}
                                size="medium"
                                fullwidth
                            >
                                RETAKE
                            </Button>
                        </div>
                        <div>
                            <Button
                                onClick={fourthStepHandler}
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

export default VerifySelfie;
