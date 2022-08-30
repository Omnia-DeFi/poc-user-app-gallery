import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import Button from "@ui/button";
import PropTypes from "prop-types";

const videoConstraints = {
    width: 350,
    height: 510,
    facingMode: "user",
};

const VerifyYourAddressCamera = ({
    setAddressImgSrc,
    twelvethStepHandler,
    tenthStepHandler,
}) => {
    const webcamRef = useRef(null);
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setAddressImgSrc(imageSrc);
        twelvethStepHandler();
    }, [webcamRef]);

    return (
        <>
            <div className="webcamCapture address-document">
                <Webcam
                    audio={false}
                    height={videoConstraints.height}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={videoConstraints.width}
                    videoConstraints={videoConstraints}
                    id="webcam"
                />

                <span className="Capture-a4" />
                <span
                    aria-labelledby="webcam"
                    className="take-photo"
                    onClick={capture}
                    tabIndex="0"
                    role="button"
                    onKeyUp={(e) => e.preventDefault()}
                />
            </div>

            <div className="webcamCapture__text">
                <h6 className="mb-3">Take a Picture</h6>
                <p className="">
                    Make sure your document is inside the rectangle and is
                    clearly visible
                </p>
                <Button onClick={tenthStepHandler} size="medium">
                    Back
                </Button>
            </div>
        </>
    );
};

export default VerifyYourAddressCamera;

VerifyYourAddressCamera.propTypes = {
    setAddressImgSrc: PropTypes.func.isRequired,
    twelvethStepHandler: PropTypes.func.isRequired,
    tenthStepHandler: PropTypes.func.isRequired,
};
