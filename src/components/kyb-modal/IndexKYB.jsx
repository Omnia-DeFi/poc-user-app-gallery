import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";
import { useState } from "react";
import Company from "./Company";

function IndexKYB({ show, handleModal }) {
    const [firstStep, setFirstStep] = useState(true);
    const [secondStep, setSecondStep] = useState(false);
    const [thirdStep, setThirdStep] = useState(false);
    
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
                    <Company/>
                )}
            
            </Modal>
        </div>
    );
}

export default IndexKYB;
