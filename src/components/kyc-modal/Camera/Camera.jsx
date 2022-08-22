import React, { useRef, useCallback } from "react";
// import "./WebcamCapture.css";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 350,
    height: 450,
    facingMode: "user",
};

function Camera({  setImgSrc, thirdStepHandler,firstStepHandler }) {
    const webcamRef = useRef(null);
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        thirdStepHandler();
    }, [webcamRef]);

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
                <p>Take a Selfie</p>
                <div>
                    <button>Tips</button>
                </div>
                <p onClick={firstStepHandler} className="webcam-close">Close</p>
            </div>
            <span className="Capture-round"></span>
            <span className="take-photo" onClick={capture}></span>
            <p className="webcamCapture-face-fits">
                Make sure your face fits inside the oval and is clearly visible
            </p>
        </div>
    );
}

export default Camera;
