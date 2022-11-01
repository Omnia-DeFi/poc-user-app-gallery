import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import PropTypes from "prop-types";
import { MoonLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "50px auto",
};
const SubmissionProgress = ({
    heading,
    body,
    uploaded,
    closeSubmissionModal,
}) => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#02941a");
    const router = useRouter();
    const backToHome = () => {
        router.push("/");
    };

    return !uploaded ? (
        <>
            <div className="text-center">
                <h6 className="mb-2">{heading}</h6>
                <p>{body}</p>
            </div>
            <MoonLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={80}
            />
        </>
    ) : (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-success">Congratulations</h1>
            <p className="text-center">Assets successfully submitted</p>
            <div className="success-checkmark my-5">
                <div className="check-icon">
                    <span className="icon-line line-tip" />
                    <span className="icon-line line-long" />
                    <div className="icon-circle" />
                    <div className="icon-fix" />
                </div>
            </div>
            <button
                onClick={closeSubmissionModal}
                className="btn btn-success w-100"
                type="button"
            >
                Go Home!!
            </button>
        </div>
    );
};

export default SubmissionProgress;

SubmissionProgress.propTypes = {
    heading: PropTypes.func.isRequired,
    body: PropTypes.func.isRequired,
    uploaded: PropTypes.func.isRequired,
    closeSubmissionModal: PropTypes.func.isRequired,
};
