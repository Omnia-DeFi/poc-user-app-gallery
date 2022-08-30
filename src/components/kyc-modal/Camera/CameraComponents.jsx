import React, { useState, useRef, useEffect } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

const CameraComponents = () => {
    const from = sessionStorage.getItem("camera_origin");
    const toggle = !!(from === "takeselfie" || from === "verifyselfie");
    let to = "";

    switch (from) {
        case "takeselfie":
            to = "verifyselfie";
            break;
        case "verifyselfie":
            to = "verifyselfie";
            break;
        case "takeGovernmentIDFront":
            to = "verifyGovernmentIDFront";
            break;
        case "verifyGovernmentIDFront":
            to = "verifyGovernmentIDFront";
            break;
        case "takeGovernmentIDBack":
            to = "verifyGovernmentIDBack";
            break;
        case "verifyGovernmentIDBack":
            to = "verifyGovernmentIDBack";
            break;
        default:
            to = "";
            break;
    }

    const camera = useRef(null);
    const [image, setImage] = useState(null);
    const [showCanvas, setShowCanvas] = useState(false);
    // webcamRef: webcam reference
    // canvasRef: canvas reference
    // const webcamRef = React.useRef(null);
    // const canvasRef = React.useRef(null);

    // const capture = React.useCallback(() => {
    //     const imageSrc = webcamRef.current.getScreenshot();
    //     setImage(imageSrc);
    // }, [webcamRef, setImage]);

    // console.log(image);

    // const startCamera = () => {
    //     navigator.mediaDevices
    //         .getUserMedia({ video: true })
    //         .then((stream) => {
    //             const video = document.querySelector("video");
    //             video.srcObject = stream;
    //             video.play();
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    // useEffect(() => {
    //     startCamera();
    // }, []);

    // const stopCamera = () => {
    //     const video = document.querySelector("video");
    //     const stream = video.srcObject;
    //     const tracks = stream.getTracks();

    //     for (let i = 0; i < tracks.length; i++) {
    //         let track = tracks[i];
    //         track.stop();
    //     }

    //     video.srcObject = null;
    // };

    // const takePhoto = () => {
    //     const video = document.querySelector("video");
    //     const canvas = document.querySelector("canvas");
    //     const context = canvas.getContext("2d");
    //     const width = video.offsetWidth;
    //     const height = video.offsetHeight;

    //     canvas.width = width;
    //     canvas.height = height;

    //     context.drawImage(video, 0, 0, width, height);
    // };

    return (
        <>
            <Modal.Header>
                <div className="d-flex justify-content-center ">
                    <div>
                        <img
                            style={{ width: "50px", height: "50px" }}
                            className="me-4 mt-3 "
                            src="/images/KYC/logo.png"
                            alt=""
                        />
                    </div>
                    <div className="ms-4">
                        <h6 className="my-2">Verify your identity</h6>
                        <p className="m-0">
                            Please upload a selfie and provide personal details
                            for KYC verification
                        </p>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="border border-2 p-5">
                    <div className="d-flex justify-content-center">
                        {/* <div className="d-flex flex-column">
                            {showCanvas ? (
                                <div className="d-flex justify-content-center">
                                    <canvas
                                        style={{
                                            width: "300px",
                                            height: "300px",
                                            border: "1px solid #000",
                                        }}
                                    />
                                </div>
                            ) : (
                                <div className="d-flex justify-content-center">
                                    <video
                                        autoPlay
                                        playsInline
                                        muted
                                        style={{
                                            width: "300px",
                                            height: "300px",
                                            border: "1px solid #000",
                                        }}
                                    />
                                </div>
                            )}

                            <button
                                className="btn btn-primary"
                                onClick={stopCamera}
                            >
                                Stop Camera
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={takePhoto}
                            >
                                Take Photo
                            </button>
                        </div> */}
                        {/* <div>
                            {image === null && (
                                <Camera aspectRatio={16 / 9} ref={camera} />
                            )}

                            <button
                                onClick={() =>
                                    setImage(camera.current.takePhoto())
                                }
                            >
                                Take photo
                            </button>
                            <img src={image} alt="Taken photo" />
                        </div> */}
                    </div>
                    {/* take photo */}
                </div>
            </Modal.Body>
        </>
    );
};

export default CameraComponents;
