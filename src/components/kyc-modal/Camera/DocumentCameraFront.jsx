import React, { useRef, useCallback } from "react";
// import "./WebcamCapture.css";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 350,
    height: 450,
    facingMode: "user",
};

function DocumentCameraFront({
    fourthStepHandler,
    documentFrontImage,
    setDocumentFrontImage,
    sixthStepHandler,
    nationalID,
    passport,
    driverLicense,
}) {
    const webcamRef = useRef(null);
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setDocumentFrontImage(imageSrc);
        sixthStepHandler();
    }, [webcamRef]);

    console.log(documentFrontImage);
    return (
        <div className="webcamCapture">
            <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />

            <div className="webcamCapture__button">
                <p>
                    {driverLicense && "Driving Licence"}
                    {passport && "Passport"} {nationalID && "National ID"} front
                    side
                </p>
                <div>
                    <button
                        type="button"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Tooltip on bottom"
                    >
                        Tips
                    </button>
                </div>
                <p onClick={fourthStepHandler} className="webcam-close">
                    Close
                </p>
            </div>
            <span className="Capture-rectangle"></span>
            <span className="take-photo" onClick={capture}></span>
            <p className="webcam-rectangle-top">
                Your Name and Photo should be clearly visible
            </p>
            <p className="webcam-rectangle-bottom">
                Fit front side of {driverLicense && "Driving Licence"}
                {passport && "Passport"} {nationalID && "National ID"} card
                inside the box
            </p>
        </div>
    );
}

export default DocumentCameraFront;
