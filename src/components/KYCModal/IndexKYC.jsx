import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";
import { useState } from "react";
import CustomerDetails from "./CustomerDetails";
import TakeSelfie from "./TakeSelfie";
import CameraComponents from "./Camera/CameraComponents";
import Camera2 from "./Camera/Camera2";

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

                {firstStep && (
                    <CustomerDetails firstStepHandler={firstStepHandler} />
                )}
                {secondStep && (
                    <TakeSelfie secondStepHandler={secondStepHandler} />
                )}
                {thirdStep && (
                    <Camera2 />
                )}
            </Modal>
        </div>
    );
}

export default IndexKYC;
