import React, { useRef, useCallback } from "react";
// import "./WebcamCapture.css";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 350,
    height: 450,
    facingMode: "user",
};

function DocumentCameraBack({
    setDocumentBackImage,
    documentBackImage,
    nineStepHandler,
    nationalID,
    passport,
    driverLicense,
}) {
    const webcamRef = useRef(null);
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setDocumentBackImage(imageSrc);
        nineStepHandler();
    }, [webcamRef]);

    console.log(documentBackImage);
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
                    {passport && "Passport"} {nationalID && "National ID"} Back
                    side
                </p>
                <div>
                    <button>Tips</button>
                </div>
                <p className="webcam-close">Close</p>
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

export default DocumentCameraBack;

