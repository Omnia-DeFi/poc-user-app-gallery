import { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ModeContext } from "src/context/ModeContext";
import Company from "./Company";
import Success from "./Success";

const IndexKYB = ({ show, handleModal }) => {
    const [firstStep, setFirstStep] = useState(true);
    const [secondStep, setSecondStep] = useState(false);
    // const [thirdStep, setThirdStep] = useState(false);
    const { setkybState } = useContext(ModeContext);

    const firstStepHandler = () => {
        setFirstStep(false);
        setSecondStep(true);
    };

    const secondStepHandler = () => {
        setTimeout(() => {
            setFirstStep(true);
            setSecondStep(false);
        }, 500);
        handleModal();
        setkybState("pending");
    };

    return (
        <div>
            <Modal
                className="rn-popup-modal placebid-modal-wrapper"
                show={show}
                onHide={handleModal}
                centered
                backdrop="static"
                keyboard={false}
            >
                {show && (
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={secondStepHandler}
                    >
                        <i className="feather-x" />
                    </button>
                )}

                {firstStep && <Company firstStepHandler={firstStepHandler} />}

                {secondStep && (
                    <Success secondStepHandler={secondStepHandler} />
                )}
            </Modal>
        </div>
    );
};

export default IndexKYB;
