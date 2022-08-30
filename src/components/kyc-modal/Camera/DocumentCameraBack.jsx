import React, { useRef, useCallback } from "react";
// import "./WebcamCapture.css";
import Webcam from "react-webcam";
import Button from "@ui/button";
import PropTypes from "prop-types";

const videoConstraints = {
    width: 370,
    height: 450,
    facingMode: "user",
};

const DocumentCameraBack = ({
    seventhStepHandler,
    setDocumentBackImage,
    documentBackImage,
    ninethStepHandler,
    nationalID,
    passport,
    driverLicense,
}) => {
    const webcamRef = useRef(null);
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setDocumentBackImage(imageSrc);
        ninethStepHandler();
    }, [webcamRef]);

    console.log(documentBackImage);
    return (
        <div className="webcamCapture government-document">
            <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
                id="webcam"
            />

            <span className="Capture-rectangle" />
            <p className="webcam-rectangle-top">
                Your Name and Photo should be clearly visible
            </p>
            <p className="webcam-rectangle-bottom">
                Fit back side of {driverLicense && "Driving Licence"}
                {passport && "Passport"} {nationalID && "National ID"} card
                inside the box
            </p>

            <span
                className="take-photo"
                onClick={capture}
                role="button"
                onKeyUp={(e) => e.preventDefault()}
                tabIndex="0"
                aria-labelledby="webcam"
            />
            <div className="webcamCapture__button text-center my-3">
                <p>
                    {driverLicense && "Driving Licence"}
                    {passport && "Passport"} {nationalID && "National ID"} Back
                    side
                </p>
            </div>
            <div className="text-center">
                <Button onClick={seventhStepHandler} size="medium">
                    Back
                </Button>
            </div>
        </div>
    );
};

export default DocumentCameraBack;

DocumentCameraBack.propTypes = {
    seventhStepHandler: PropTypes.func.isRequired,
    setDocumentBackImage: PropTypes.func.isRequired,
    documentBackImage: PropTypes.string.isRequired,
    ninethStepHandler: PropTypes.func.isRequired,
    nationalID: PropTypes.bool.isRequired,
    passport: PropTypes.bool.isRequired,
    driverLicense: PropTypes.bool.isRequired,
};
