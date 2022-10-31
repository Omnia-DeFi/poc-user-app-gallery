import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";
import { useContext, useState } from "react";
import { ModeContext } from "src/context/ModeContext";
import PropTypes from "prop-types";
import CustomerDetails from "./CustomerDetails";
import TakeSelfie from "./TakeSelfie";
import DocumentCameraFront from "./Camera/DocumentCameraFront";
import VerifySelfie from "./VerifySelfie";
import TakeGovernmentIDFront from "./TakeGovernmentIDFront";
import VerifyDocumentFront from "./VerifyDocumentFront";
import TakeGovernmentIDBack from "./TakeGovernmentIDBack";
import DocumentCameraBack from "./Camera/DocumentCameraBack";
import Success from "./Success";
import Camera from "./Camera/Camera";
import VerifyYourAddress from "./VerifyYourAddress";
import VerifyYourAddressCamera from "./Camera/VerifyYourAddressCamera";
import VerifyAddress from "./VerifyAddress";
import UploadPhoto from "./UploadPhoto";

const IndexKYC = ({ show, handleModal }) => {
    const { kycState, setkycState } = useContext(ModeContext);
    const [firstStep, setFirstStep] = useState(true);
    const [secondStep, setSecondStep] = useState(false);
    const [thirdStep, setThirdStep] = useState(false);
    const [fourthStep, setFourthStep] = useState(false);
    const [fifthStep, setFifthStep] = useState(false);
    const [sixthStep, setSixthStep] = useState(false);
    const [seventhStep, setSeventhStep] = useState(false);
    const [eighthStep, setEighthStep] = useState(false);
    const [ninethStep, setNinethStep] = useState(false);
    const [tenthStep, setTenthStep] = useState(false);
    const [eleventhStep, setEleventhStep] = useState(false);
    const [twelvethStep, setTwelvethStep] = useState(false);
    const [thirteenthStep, setThirteenthStep] = useState(false);
    const [fourteenthStep, setFourteenthStep] = useState(false);
    const [fifteenthStep, setFifteenthStep] = useState(false);

    const [driverLicense, setDriverLicense] = useState(true);
    const [passport, setPassport] = useState(false);
    const [nationalID, setNationalID] = useState(false);

    const [imgSrc, setImgSrc] = useState(null);
    const [addressImgSrc, setAddressImgSrc] = useState(null);
    const [documentFrontImage, setDocumentFrontImage] = useState(null);
    const [documentBackImage, setDocumentBackImage] = useState(null);

    const [dos, setDos] = useState({});
    const [idImage, setIdImage] = useState([
        "/images/kyc/driving-licence-front.png",
        "/images/kyc/driving-licence-front.png",
    ]);

    const firstBack = () => {
        setFirstStep(true);
        setSecondStep(false);
        setThirdStep(false);
        setFourthStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNinethStep(false);
        setTenthStep(false);
        setEleventhStep(false);
        setTwelvethStep(false);
        setThirteenthStep(false);
        setFourteenthStep(false);
        setFifteenthStep(false);
    };

    const firstStepHandler = () => {
        setFirstStep(false);
        setSecondStep(true);
        setThirdStep(false);
        setFourthStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNinethStep(false);
        setTenthStep(false);
        setEleventhStep(false);
        setTwelvethStep(false);
        setThirteenthStep(false);
        setFourteenthStep(false);
        setFifteenthStep(false);
    };
    const secondStepHandler = () => {
        setSecondStep(false);
        setFirstStep(false);
        setThirdStep(true);
        setFourthStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNinethStep(false);
        setTenthStep(false);
        setEleventhStep(false);
        setTwelvethStep(false);
        setThirteenthStep(false);
        setFourteenthStep(false);
        setFifteenthStep(false);
    };
    const thirdStepHandler = () => {
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(true);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNinethStep(false);
        setTenthStep(false);
        setEleventhStep(false);
        setTwelvethStep(false);
        setThirteenthStep(false);
        setFourteenthStep(false);
        setFifteenthStep(false);
    };
    const fourthStepHandler = () => {
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(true);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNinethStep(false);
        setTenthStep(false);
        setEleventhStep(false);
        setTwelvethStep(false);
        setThirteenthStep(false);
        setFourteenthStep(false);
        setFifteenthStep(false);
    };
    const fifthStepHandler = () => {
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(true);
        setSeventhStep(false);
        setEighthStep(false);
        setNinethStep(false);
        setTenthStep(false);
        setEleventhStep(false);
        setTwelvethStep(false);
        setThirteenthStep(false);
        setFourteenthStep(false);
        setFifteenthStep(false);
    };
    const sixthStepHandler = () => {
        setFirstStep(false);
        setSecondStep(false);
        setThirdStep(false);
        setFourthStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(true);
        setEighthStep(false);
        setNinethStep(false);
        setTenthStep(false);
        setEleventhStep(false);
        setTwelvethStep(false);
        setThirteenthStep(false);
        setFourteenthStep(false);
        setFifteenthStep(false);
    };
    const seventhStepHandler = () => {
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(true);
        setNinethStep(false);
        setTenthStep(false);
        setEleventhStep(false);
        setTwelvethStep(false);
        setThirteenthStep(false);
        setFourteenthStep(false);
        setFifteenthStep(false);
    };
    const eighthStepHandler = () => {
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNinethStep(true);
        setTenthStep(false);
        setEleventhStep(false);
        setTwelvethStep(false);
        setThirteenthStep(false);
        setFourteenthStep(false);
        setFifteenthStep(false);
        setDocumentBackImage(null);
    };
    const ninethStepHandler = () => {
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNinethStep(false);
        setTenthStep(true);
        setEleventhStep(false);
        setTwelvethStep(false);
        setThirteenthStep(false);
        setFourteenthStep(false);
        setFifteenthStep(false);
    };

    const tenthStepHandler = () => {
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNinethStep(false);
        setTenthStep(false);
        setEleventhStep(true);
        setTwelvethStep(false);
        setThirteenthStep(false);
        setFourteenthStep(false);
        setFifteenthStep(false);
        setAddressImgSrc(null);
    };

    const eleventhStepHandler = () => {
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNinethStep(false);
        setTenthStep(false);
        setEleventhStep(false);
        setTwelvethStep(true);
        setThirteenthStep(false);
        setFourteenthStep(false);
        setFifteenthStep(false);
        // setImgSrc(null);
        // setDocumentBackImage(null);
        // setDocumentFrontImage(null);
        // handleModal();
    };

    const twelvethStepHandler = () => {
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNinethStep(false);
        setTenthStep(false);
        setEleventhStep(false);
        setTwelvethStep(false);
        setThirteenthStep(true);
        setFourteenthStep(false);
        setFifteenthStep(false);
    };

    const thirteenthStepHandler = () => {
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNinethStep(false);
        setTenthStep(false);
        setEleventhStep(false);
        setTwelvethStep(false);
        setThirteenthStep(false);
        setFourteenthStep(true);
        setFifteenthStep(false);
    };

    const fourteenthStepHandler = () => {
        setThirdStep(false);
        setSecondStep(false);
        setFourthStep(false);
        setFirstStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNinethStep(false);
        setTenthStep(false);
        setEleventhStep(false);
        setTwelvethStep(false);
        setThirteenthStep(false);
        setFourteenthStep(false);
        setFifteenthStep(true);
    };

    const fifteenthStepHandler = () => {
        setFirstStep(true);
        setSecondStep(false);
        setThirdStep(false);
        setFourthStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNinethStep(false);
        setTenthStep(false);
        setEleventhStep(false);
        setTwelvethStep(false);
        setThirteenthStep(false);
        setFourteenthStep(false);
        setFifteenthStep(false);
        setImgSrc(null);
        setAddressImgSrc(null);
        setDocumentBackImage(null);
        setDocumentFrontImage(null);
        handleModal();
        setkycState("pending");
    };

    const modalCloseHandler = () => {
        setFirstStep(true);
        setSecondStep(false);
        setThirdStep(false);
        setFourthStep(false);
        setFifthStep(false);
        setSixthStep(false);
        setSeventhStep(false);
        setEighthStep(false);
        setNinethStep(false);
        setTenthStep(false);
        setEleventhStep(false);
        setTwelvethStep(false);
        setThirteenthStep(false);
        setFourteenthStep(false);
        setFifteenthStep(false);
        setImgSrc(null);
        setAddressImgSrc(null);
        setDocumentBackImage(null);
        setDocumentFrontImage(null);
        handleModal();
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
                        onClick={modalCloseHandler}
                    >
                        <i className="feather-x" />
                    </button>
                )}

                {firstStep && (
                    <CustomerDetails
                        fourteenthStepHandler={fourteenthStepHandler}
                    />
                )}
                {secondStep && (
                    <TakeSelfie
                        firstStepHandler={firstStepHandler}
                        secondStepHandler={secondStepHandler}
                        firstBack={firstBack}
                    />
                )}
                {thirdStep && (
                    <Camera
                        setImgSrc={setImgSrc}
                        firstStepHandler={firstStepHandler}
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
                        fourthStepHandler={fourthStepHandler}
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
                        sixthStepHandler={sixthStepHandler}
                        eighthStepHandler={eighthStepHandler}
                        documentFrontImage={documentFrontImage}
                        nationalID={nationalID}
                        passport={passport}
                        driverLicense={driverLicense}
                        setDocumentBackImage={setDocumentBackImage}
                        documentBackImage={documentBackImage}
                    />
                )}
                {ninethStep && (
                    <DocumentCameraBack
                        ninethStepHandler={ninethStepHandler}
                        seventhStepHandler={seventhStepHandler}
                        setDocumentBackImage={setDocumentBackImage}
                        documentBackImage={documentBackImage}
                        nationalID={nationalID}
                        passport={passport}
                        driverLicense={driverLicense}
                    />
                )}
                {tenthStep && (
                    <TakeGovernmentIDBack
                        documentFrontImage={documentFrontImage}
                        tenthStepHandler={tenthStepHandler}
                        nationalID={nationalID}
                        passport={passport}
                        driverLicense={driverLicense}
                        eighthStepHandler={eighthStepHandler}
                        setDocumentBackImage={setDocumentBackImage}
                        documentBackImage={documentBackImage}
                    />
                )}

                {eleventhStep && (
                    <VerifyYourAddress
                        eleventhStepHandler={eleventhStepHandler}
                        setAddressImgSrc={setAddressImgSrc}
                        thirteenthStepHandler={thirteenthStepHandler}
                        ninethStepHandler={ninethStepHandler}
                    />
                )}
                {twelvethStep && (
                    <VerifyYourAddressCamera
                        setAddressImgSrc={setAddressImgSrc}
                        twelvethStepHandler={twelvethStepHandler}
                        tenthStepHandler={tenthStepHandler}
                    />
                )}
                {thirteenthStep && (
                    <VerifyAddress
                        addressImgSrc={addressImgSrc}
                        fourteenthStepHandler={fourteenthStepHandler}
                        tenthStepHandler={tenthStepHandler}
                    />
                )}
                {fourteenthStep && (
                    <UploadPhoto
                        setAddressImgSrc={setAddressImgSrc}
                        twelvethStepHandler={twelvethStepHandler}
                    />
                )}
                {fifteenthStep && (
                    <Success fifteenthStepHandler={fifteenthStepHandler} />
                )}
            </Modal>
        </div>
    );
};

export default IndexKYC;

IndexKYC.propTypes = {
    show: PropTypes.bool,
    handleModal: PropTypes.func,
};
