import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import NotVerified from "./NotVerified";

const IndexWarning = ({ show, handleModal }) => {
    const backToHome = () => {
        handleModal();
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
                        onClick={backToHome}
                    >
                        <i className="feather-x" />
                    </button>
                )}

                <NotVerified />
            </Modal>

        </div>
    );
};

export default IndexWarning;

IndexWarning.propTypes = {
    show: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
};
