import React, { useRef, useCallback } from "react";
// import "./WebcamCapture.css";
import Webcam from "react-webcam";
import PropTypes from "prop-types";

const videoConstraints = {
    width: 350,
    height: 450,
    facingMode: "user",
};

const Camera2 = ({ imgSrc, setImgSrc, thirdStepHandler }) => {
    const webcamRef = useRef(null);
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        // history.push("/preview");
        // eslint-disable-next-line react-hooks/exhaustive-deps
        thirdStepHandler();
    }, [webcamRef]);

    // console.log(imgSrc);

    // const openChats = () => {
    //   history.replace("/chats");
    // };
    return (
        <div className="webcamCapture">
            <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
                id="webcam"
            />

            <div className="webcamCapture__button">
                <p>Take a Selfie</p>
                <div>
                    <button type="button">Tips</button>
                </div>
                <p className="webcam-close">Close</p>
            </div>
            <span className="Capture-round" />
            <span
                className="take-photo"
                onClick={capture}
                role="button"
                onKeyUp={(e) => e.preventDefault()}
                tabIndex="0"
                aria-labelledby="webcam"
            />
            <p className="webcamCapture-face-fits">
                Make sure your face fits inside the oval and is clearly visible
            </p>
        </div>
    );
};

export default Camera2;

Camera2.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    setImgSrc: PropTypes.func.isRequired,
    thirdStepHandler: PropTypes.func.isRequired,
};
