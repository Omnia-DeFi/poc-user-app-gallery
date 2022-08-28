import React, { useRef, useCallback } from "react";
// import "./WebcamCapture.css";
import Webcam from "react-webcam";
import Button from "@ui/button";

const videoConstraints = {
    width: 350,
    height: 350,
    facingMode: "user",
};

function Camera({ setImgSrc, thirdStepHandler, firstStepHandler }) {
    const webcamRef = useRef(null);
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        thirdStepHandler();
    }, [webcamRef]);

    return (
        <>
            <div className="webcamCapture">
                <Webcam
                    audio={false}
                    height={videoConstraints.height}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={videoConstraints.width}
                    videoConstraints={videoConstraints}
                />

                <span className="Capture-round"></span>
                <span className="take-photo" onClick={capture}></span>
            </div>

            <div className="webcamCapture__text">
                <p className="fw-bold">Take a Selfie</p>
                <p className="webcamCapture-instructions">
                    Make sure your face fits inside the oval and is clearly
                    visible
                </p>
                <Button onClick={firstStepHandler} size="medium">
                    Back
                </Button>
            </div>
        </>
    );
}

export default Camera;
