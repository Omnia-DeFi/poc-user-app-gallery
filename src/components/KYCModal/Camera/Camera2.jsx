import React, { useRef, useCallback } from "react";
// import "./WebcamCapture.css";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 350,
    height: 600,
    facingMode: "user",
};

function Camera2() {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        // history.push("/preview");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [webcamRef]);

    console.log(imgSrc);

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
            />

            <div className="webcamCapture__button">
                <p>Take a Selfie</p>
                <div>
                    <button>Tips</button>
                </div>
                <p className="webcam-close">Close</p>
            </div>
            <span className="Capture-round"></span>
            <span className="take-photo"></span>
            <p className="webcamCapture-face-fits">
                Make sure your face fits inside the oval and is clearly visible
            </p>
            {/* <ChatBubbleIcon className="webcamCapture__chatIcon" onClick={openChats} /> */}
            {/* <div className="webcamCapture__button" onClick={capture}></div> */}
        </div>
    );
}

export default Camera2;
