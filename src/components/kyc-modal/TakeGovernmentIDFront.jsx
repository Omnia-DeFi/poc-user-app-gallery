import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

function TakeGovernmentIDFront({ fifthStepHandler }) {
    const [driverLicense, setDriverLicense] = useState(true);
    const [passport, setPassport] = useState(false);
    const [nationalID, setNationalID] = useState(false);

    const driverLicenseHandler = () => {
        setDriverLicense(true);
        setPassport(false);
        setNationalID(false);
    };
    const passportHandler = () => {
        setDriverLicense(false);
        setPassport(true);
        setNationalID(false);
    };
    const nationalIDHandler = () => {
        setDriverLicense(false);
        setPassport(false);
        setNationalID(true);
    };

    return (
        <>
            <Modal.Header>
                <div className="d-flex justify-content-center ">
                    <div>
                        <img
                            style={{ width: "50px", height: "50px" }}
                            className="me-4 mt-3 "
                            src="/images/kyc/logo.png"
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
                    <h5 className="my-2">Select a Government ID</h5>
                    <div className="select-Government-ID">
                        <div onClick={driverLicenseHandler}>
                            Driving Licence
                        </div>
                        <div onClick={passportHandler}>Passport</div>
                        <div onClick={nationalIDHandler}>National ID</div>
                    </div>

                    <div className="mt-5">
                        <div className="mb-5 modal-id-show">
                            <p>
                                Front of {driverLicense && "Driving Licence"}{" "}
                                {passport && "Passport"}{" "}
                                {nationalID && "National ID"}
                            </p>
                            <p>Your name and photo should be clearly visible</p>
                            {driverLicense && (
                                <img
                                    src="/images/kyc/driving-licence-front.png"
                                    alt="driving-licence-front"
                                />
                            )}
                            {passport && (
                                <img
                                    src="/images/kyc/passport.png"
                                    alt="passport-front"
                                />
                            )}
                            {nationalID && (
                                <img
                                    src="/images/kyc/national-id-front.png"
                                    alt="national-id-front"
                                />
                            )}
                        </div>
                        <Button
                            onClick={fifthStepHandler}
                            size="medium"
                            fullwidth
                        >
                            CLICK PHOTO
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </>
    );
}

export default TakeGovernmentIDFront;
