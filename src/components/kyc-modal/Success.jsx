import React from "react";

function Success({ elevenStepHandler }) {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-success">Congratulations</h1>
            <p className="text-center">
                You have successfully submitted the documents for KYC
                Verification
            </p>
            <img src="/images//KYC/check.gif" alt="" />
            <button
                onClick={elevenStepHandler}
                className="btn btn-success w-100"
            >
                Go Home!!
            </button>
        </div>
    );
}

export default Success;
