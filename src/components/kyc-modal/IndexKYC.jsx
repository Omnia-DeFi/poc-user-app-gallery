import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";
import { useState } from "react";
import CustomerDetails from "./CustomerDetails";
import TakeSelfie from "./TakeSelfie";
import Camera2 from "./Camera/Camera2";
import DocumentCameraFront from "./Camera/DocumentCameraFront";
import VerifySelfie from "./VerifySelfie";
import TakeGovernmentIDFront from "./TakeGovernmentIDFront";
import VerifyDocumentFront from "./VerifyDocumentFront";
import TakeGovernmentIDBack from "./TakeGovernmentIDBack";
import DocumentCameraBack from "./Camera/DocumentCameraBack";

function IndexKYC({ show, handleModal }) {
    const [firstStep, setFirstStep] = useState(true);
    const [secondStep, setSecondStep] = useState(false);
    const [thirdStep, setThirdStep] = useState(false);
    const [fourthStep, setFourthStep] = useState(false);
    const [fifthStep, setFifthStep] = useState(false);
    const [sixthStep, setSixthStep] = useState(false);
    const [seventhStep, setSeventhStep] = useState(false);
    const [eighthStep, setEighthStep] = useState(false);
    const [nineStep, setNineStep] = useState(false);
    const [tenStep, setTenStep] = useState(false);

    const [driverLicense, setDriverLicense] = useState(true);
    const [passport, setPassport] = useState(false);
    const [nationalID, setNationalID] = useState(false);

    const [imgSrc, setImgSrc] = useState(null);
    const [documentFrontImage, setDocumentFrontImage] = useState(null);
    const [documentBackImage, setDocumentBackImage] = useState(null);

    const [dos, setDos] = useState({});
    const [idImage, setIdImage] = useState([
        "/images/KYC/driving-licence-front.png",
        "/images/KYC/driving-licence-front.png",
    ]);

    const firstStepHandler = () => {
        console.log("first step");
        setFirstStep(false);
        setSecondStep(true);
        setThirdStep(false);
        setFourthStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNineStep(false);
        setTenStep(false);
    };
    const secondStepHandler = () => {
        console.log("second step");
        setSecondStep(false);
        setFirstStep(false);
        setThirdStep(true);
        setFourthStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNineStep(false);
        setTenStep(false);
    };
    const thirdStepHandler = () => {
        console.log("third step");
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(true);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNineStep(false);
        setTenStep(false);
    };
    const fourthStepHandler = () => {
        console.log("fourth step");
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(true);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNineStep(false);
        setTenStep(false);
    };
    const fifthStepHandler = () => {
        console.log("fifth step");
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(true);
        setSeventhStep(false);
        setEighthStep(false);
        setNineStep(false);
        setTenStep(false);
    };
    const sixthStepHandler = () => {
        console.log("sixth step");
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(true);
        setEighthStep(false);
        setNineStep(false);
        setTenStep(false);
    };
    const seventhStepHandler = () => {
        console.log("seventh step");
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(true);
        setNineStep(false);
        setTenStep(false);
    };
    const eightStepHandler = () => {
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNineStep(true);
        setTenStep(false);
    };
    const nineStepHandler = () => {
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNineStep(false);
        setTenStep(true);
    };

    const looksGoodHandler = () => {
        seventhStepHandler();
        // if (img.length === 0) {
        //     setIdImage(documentImage);
        //     fifthStepHandler()
        // } else if (img.length === 1) {
        //     img.push(documentImage);
        // } else {
        //     seventhStepHandler();
        // }
    };

    return (
        <div>
            <Modal
                className="rn-popup-modal placebid-modal-wrapper"
                show={show}
                onHide={handleModal}
                centered
                backdrop="static"
                keyboard={false}
            >
                {show && (
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={handleModal}
                    >
                        <i className="feather-x" />
                    </button>
                )}

                {firstStep && (
                    <CustomerDetails firstStepHandler={firstStepHandler} />
                )}
                {secondStep && (
                    <TakeSelfie secondStepHandler={secondStepHandler} />
                )}
                {thirdStep && (
                    <Camera2
                        imgSrc={imgSrc}
                        setImgSrc={setImgSrc}
                        thirdStepHandler={thirdStepHandler}
                    />
                )}
                {fourthStep && (
                    <VerifySelfie
                        imgSrc={imgSrc}
                        secondStepHandler={secondStepHandler}
                        fourthStepHandler={fourthStepHandler}
                    />
                )}
                {fifthStep && (
                    <TakeGovernmentIDFront
                        fifthStepHandler={fifthStepHandler}
                        setNationalID={setNationalID}
                        nationalID={nationalID}
                        setPassport={setPassport}
                        passport={passport}
                        setDriverLicense={setDriverLicense}
                        driverLicense={driverLicense}
                    />
                )}
                {sixthStep && (
                    <DocumentCameraFront
                        sixthStepHandler={sixthStepHandler}
                        documentFrontImage={documentFrontImage}
                        setDocumentFrontImage={setDocumentFrontImage}
                        nationalID={nationalID}
                        passport={passport}
                        driverLicense={driverLicense}
                    />
                )}

                {seventhStep && (
                    <VerifyDocumentFront
                        documentFrontImage={documentFrontImage}
                        seventhStepHandler={seventhStepHandler}
                        fifthStepHandler={fifthStepHandler}
                        nationalID={nationalID}
                        passport={passport}
                        driverLicense={driverLicense}
                    />
                )}
                {eighthStep && (
                    <TakeGovernmentIDBack
                        documentFrontImage={documentFrontImage}
                        nationalID={nationalID}
                        passport={passport}
                        driverLicense={driverLicense}
                        eightStepHandler={eightStepHandler}
                        setDocumentBackImage={setDocumentBackImage}
                        documentBackImage={documentBackImage}
                    />
                )}
                {nineStep && (
                    <DocumentCameraBack
                    nineStepHandler={nineStepHandler}
                        setDocumentBackImage={setDocumentBackImage}
                        documentBackImage={documentBackImage}
                        nationalID={nationalID}
                        passport={passport}
                        driverLicense={driverLicense}
                    />
                )}
                {tenStep && (
                    <TakeGovernmentIDBack
                        documentFrontImage={documentFrontImage}
                        nationalID={nationalID}
                        passport={passport}
                        driverLicense={driverLicense}
                        eightStepHandler={eightStepHandler}
                        setDocumentBackImage={setDocumentBackImage}
                        documentBackImage={documentBackImage}
                    />
                )}
            </Modal>
        </div>
    );
}

export default IndexKYC;
