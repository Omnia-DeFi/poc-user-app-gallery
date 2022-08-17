import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";
import { useState } from "react";
import CustomerDetails from "./CustomerDetails";
import TakeSelfie from "./TakeSelfie";
import Camera2 from "./Camera/Camera2";
import VerifySelfie from "./VerifySelfie";
import TakeGovernmentIDFront from "./TakeGovernmentIDFront";

function IndexKYC({ show, handleModal }) {
    const [firstStep, setFirstStep] = useState(true);
    const [secondStep, setSecondStep] = useState(false);
    const [thirdStep, setThirdStep] = useState(false);
    const [fourthStep, setFourthStep] = useState(false);
    const [fifthStep, setFifthStep] = useState(false);
    const [sixthStep, setSixthStep] = useState(false);
    const [seventhStep, setSeventhStep] = useState(false);
    const [eighthStep, setEighthStep] = useState(false);

    const [imgSrc, setImgSrc] = useState(null);

    const firstStepHandler = () => {
        console.log("first step");
        setFirstStep(false);
        setSecondStep(true);
        setThirdStep(false);
        setFourthStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
    };
    const secondStepHandler = () => {
        console.log("second step");
        setSecondStep(false);
        setFirstStep(false);
        setThirdStep(true);
        setFourthStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
    };
    const thirdStepHandler = () => {
        console.log("third step");
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(true);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
    };
    const fourthStepHandler = () => {
        console.log("fourth step");
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(true);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
    };
    const fifthStepHandler = () => {
        console.log("fifth step");
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(true);
        setSeventhStep(false);
        setEighthStep(false);
    };
    const sixthStepHandler = () => {
        console.log("sixth step");
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(true);
        setEighthStep(false);
    };
    const seventhStepHandler = () => {
        console.log("seventh step");
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(true);
    };

    console.log(fifthStep)

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
                    <Camera2
                        imgSrc={imgSrc}
                        setImgSrc={setImgSrc}
                        thirdStepHandler={thirdStepHandler}
                    />
                )}
                {fourthStep && (
                    <VerifySelfie
                        imgSrc={imgSrc}
                        secondStepHandler={secondStepHandler}
                        fourthStepHandler={fourthStepHandler}
                    />
                )}
                {fifthStep && (
                    <TakeGovernmentIDFront
                        fifthStepHandler={fifthStepHandler}
                    />
                )}
            </Modal>
        </div>
    );
}

export default IndexKYC;
