import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import SubmissionProgress from "./SubmissionProgress";

const IndexProgress = ({
    show,
    heading,
    body,
    uploaded,
    closeSubmissionModal,
}) => (
    <div>
        <Modal
            className="rn-popup-modal placebid-modal-wrapper"
            show={show}
            centered
            backdrop="static"
            keyboard={false}
        >
            <SubmissionProgress
                heading={heading}
                body={body}
                uploaded={uploaded}
                closeSubmissionModal={closeSubmissionModal}
            />
        </Modal>
    </div>
);
export default IndexProgress;

IndexProgress.propTypes = {
    show: PropTypes.bool.isRequired,
    heading: PropTypes.bool.isRequired,
    body: PropTypes.bool.isRequired,
    uploaded: PropTypes.bool.isRequired,
    closeSubmissionModal: PropTypes.func.isRequired,
};
