import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";
import { useState } from "react";
import CustomerDetails from "./CustomerDetails";

function IndexKYC({ show, handleModal }) {
    const [firstStep, setFirstStep] = useState(true);
    const [secondStep, setSecondStep] = useState(false);
    const [thirdStep, setThirdStep] = useState(false);
    const [fourthStep, setFourthStep] = useState(false);

    const firstStepHandler = () => {
        console.log("first step");
        setFirstStep(false);
        setSecondStep(true);
        setThirdStep(false);
        setFourthStep(false);
    };
    const secondStepHandler = () => {
        console.log("second step");
        setSecondStep(false);
        setFirstStep(false);
        setThirdStep(true);
        setFourthStep(false);
    };
    const thirdStepHandler = () => {
        console.log("third step");
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(true);
        setFirstStep(false);
    };
    const fourthStepHandler = () => {
        console.log("fourth step");
    };

    return (
        <div>
            <Modal
                className="rn-popup-modal placebid-modal-wrapper"
                show={show}
                onHide={handleModal}
                centered
            >
                {show && (
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={handleModal}
                    >
                        <i className="feather-x" />
                    </button>
                )}
                <Modal.Header>
                    <div>
                        <div>
                            {/* icon here */}
                        </div>
                        <div>
                            <h6 className="">
                                Hi ! Help us Setup your account
                            </h6>
                            <p>We'll verify it with your KYC documents</p>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <CustomerDetails/>
                    {/* <p>You are about to purchase This Product Form Omnia DeFi</p> */}
                    {/* <div className="placebid-form-box">
                        <h5 className="title">Your bid</h5>
                        <div className="bid-content">
                            <div className="bid-content-top">
                                <div className="bid-content-left">
                                    <input
                                        id="value"
                                        type="text"
                                        name="value"
                                    />
                                    <span>wETH</span>
                                </div>
                            </div>

                            <div className="bid-content-mid">
                                <div className="bid-content-left">
                                    <span>Your Balance</span>
                                    <span>Service fee</span>
                                    <span>Total bid amount</span>
                                </div>
                                <div className="bid-content-right">
                                    <span>9578 wETH</span>
                                    <span>10 wETH</span>
                                    <span>9588 wETH</span>
                                </div>
                            </div>
                        </div>
                        <div className="bit-continue-button">
                            <Button path="/connect" size="medium" fullwidth>
                                Place a bid
                            </Button>
                            <Button
                                color="primary-alta"
                                size="medium"
                                className="mt--10"
                                onClick={handleModal}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div> */}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default IndexKYC;
