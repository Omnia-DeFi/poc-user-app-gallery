import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import Button from "@ui/button";

const UploadPhoto = ({ setAddressImgSrc, twelvethStepHandler }) => {
    const [img, setImg] = useState();

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
        setAddressImgSrc(URL.createObjectURL(file));
        twelvethStepHandler();
    };
    return (
        <>
            <Modal.Header>
                <div className="text-center">
                    <div>
                        <img
                            style={{ width: "50px", height: "50px" }}
                            src="/images/kyc/logo.png"
                            alt=""
                        />
                    </div>
                    <div className="ms-4">
                        <h6 className="my-2 fs-2">Verify Your Address</h6>
                        <p className="m-0 ">
                            Upload a Proof of address for KYC verification
                        </p>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="border border-2 p-5 text-center">
                    <p className="m-0 text-muted">
                        Upload a photo from your device
                    </p>
                    <div className="d-flex mx-auto mt-5">
                        <input
                            type="file"
                            id="upload"
                            hidden
                            onChange={onImageChange}
                        />
                        <label className="image_upload" htmlFor="upload">
                            Upload Photo
                        </label>
                    </div>
                </div>
            </Modal.Body>
        </>
    );
};

export default UploadPhoto;

UploadPhoto.propTypes = {
    setAddressImgSrc: PropTypes.func.isRequired,
    twelvethStepHandler: PropTypes.func.isRequired,
};
