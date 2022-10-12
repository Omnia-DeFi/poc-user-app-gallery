import React, { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import PropTypes from "prop-types";

const override = {
    display: "block",
    margin: "50px auto",
};

const Success = ({ fifteenthStepHandler }) => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#02941a");
    const [isAlert, setIsAlert] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAlert(false);
        }, 10000);

        // To clear or cancel a timer, you call the clearTimeout(); method,
        // passing in the timer object that you created into clearTimeout().

        return () => clearTimeout(timer);
    }, []);

    return isAlert ? (
        <>
            <div className="text-center">
                <h6 className="mb-2">Documents Processing</h6>
                <p>Please wait while your documents are being processed</p>
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
            <p className="text-center">
                You have successfully submitted the documents for KYC
                Verification
            </p>
            <div className="success-checkmark my-5">
                <div className="check-icon">
                    <span className="icon-line line-tip" />
                    <span className="icon-line line-long" />
                    <div className="icon-circle" />
                    <div className="icon-fix" />
                </div>
            </div>
            {/* <button
                onClick={fifteenthStepHandler}
                className="btn btn-success w-100"
                type="button"
            >
                Go Home!!
            </button> */}
        </div>
    );
};

export default Success;

Success.propTypes = {
    fifteenthStepHandler: PropTypes.func.isRequired,
};
