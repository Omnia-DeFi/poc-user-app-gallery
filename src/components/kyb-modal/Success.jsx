import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function Success({ secondStepHandler }) {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#02941a");
    const [isAlert, setIsAlert] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAlert(false);
        }, 10000);

        // To clear or cancel a timer, you call the clearTimeout(); method,
        // passing in the timer object that you created into clearTimeout().

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isAlert ? (
                <RingLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={150}
                />
            ) : (
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h1 className="text-success">Congratulations</h1>
                    <p className="text-center">
                        You have successfully submitted the documents for KYC
                        Verification
                    </p>
                    <div className="success-checkmark my-5">
                        <div className="check-icon">
                            <span className="icon-line line-tip"></span>
                            <span className="icon-line line-long"></span>
                            <div className="icon-circle"></div>
                            <div className="icon-fix"></div>
                        </div>
                    </div>
                    <button
                        onClick={secondStepHandler}
                        className="btn btn-success w-100"
                    >
                        Go Home!!
                    </button>
                </div>
            )}
        </>
    );
}

export default Success;
