import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";
import React, { useEffect, useState } from "react";

function VerifyAddress({
    addressImgSrc,
    fourteenthStepHandler,
    tenthStepHandler,
}) {
    return (
        <>
            <Modal.Header>
                <div className="text-center">
                    <div>
                        <img
                            style={{ width: "50px", height: "50px" }}
                            src="/images/kyc/logo.png"
                            alt=""
                        />
                    </div>
                    <div className="ms-4">
                        <h6 className="my-2 fs-2">Verify Your Address</h6>
                        <p className="m-0 ">
                            Proof of address for KYC verification
                        </p>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="border border-2 p-5 text-center">
                    <h5 className="my-2 text-muted">Proof of Address</h5>
                    <p className="m-0 text-muted">
                        Make sure your full address is clearly visible
                    </p>
                    <div className="mt-3">
                        <img
                            className="Webcam-selfie"
                            src={addressImgSrc}
                            alt="selfie"
                        />
                    </div>
                    <div className="mt-5 d-flex mx-4 justify-content-around">
                        <div>
                            <Button
                                onClick={tenthStepHandler}
                                size="medium"
                                fullwidth
                            >
                                Change
                            </Button>
                        </div>
                        <div>
                            <Button
                                onClick={fourteenthStepHandler}
                                size="medium"
                                fullwidth
                            >
                                Continue
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </>
    );
}

export default VerifyAddress;
