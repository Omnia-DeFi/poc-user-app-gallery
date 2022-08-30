import React from "react";
import PropTypes, { string } from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

const VerifyYourAddress = ({
    eleventhStepHandler,
    thirteenthStepHandler,
    ninethStepHandler,
}) => (
    <>
        <Modal.Header>
            <div className="text-center">
                <img
                    style={{ width: "50px", height: "50px" }}
                    src="/images/kyc/logo.png"
                    alt=""
                />
                <h6 className="my-2">Verify your address</h6>
                <p className="m-0">
                    Please take a picture of front and back of your address
                    legal document for KYC verification
                </p>
            </div>
        </Modal.Header>
        <Modal.Body>
            <div className="border border-2 p-5 rounded-3 text-center">
                <h5 className="my-2">Proof of Address</h5>
                <p className="m-0">
                    Make sure your full address is visible and readable
                </p>
                <img
                    width="200px"
                    src="/images/kyc/passport.png"
                    alt="proof of address"
                />
                <div className="mt-5">
                    <Button
                        onClick={eleventhStepHandler}
                        size="medium"
                        fullwidth
                    >
                        Take Photo
                    </Button>
                </div>
                <div className="mt-5">
                    <Button
                        onClick={thirteenthStepHandler}
                        size="medium"
                        fullwidth
                    >
                        Upload Photo
                    </Button>
                </div>
            </div>
            <div className="text-center mt-3">
                <Button onClick={ninethStepHandler} size="medium">
                    Back
                </Button>
            </div>
        </Modal.Body>
    </>
);

export default VerifyYourAddress;

VerifyYourAddress.propTypes = {
    eleventhStepHandler: PropTypes.func.isRequired,
    thirteenthStepHandler: PropTypes.func.isRequired,
    ninethStepHandler: PropTypes.func.isRequired,
};
