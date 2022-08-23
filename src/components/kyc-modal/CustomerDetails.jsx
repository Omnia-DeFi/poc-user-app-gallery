import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "@ui/button";

function CustomerDetails({ firstStepHandler }) {
    const [gender, setGender] = useState("");
    const [validgender, setValidGender] = useState(false);
    const [formValue, setFormValue] = useState({
        username: "",
        dateofbirth: "",
    });

    const changeGender = (e) => {
        setValidGender(true);
        setGender(e);
    };

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };
    const formHandler = () => {
        let i;
        let valid = true;
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        let yyyy = today.getFullYear();
        today = yyyy + "-" + mm + "-" + dd;
        for (i = 0; i < formValue.username.length; i++) {
            let val = formValue.username.charCodeAt(i);
            if ((val >= 65 && val <= 90) || (val >= 97 && val <= 122)) {
            } else if (val == 32) {
            } else valid = false;
        }
        if (!valid) {
            alert("Name cannot contain numbers or special characters !");
        } else if (formValue.dateofbirth >= today) {
            alert("invalid date of birth !");
        } else if (validgender === false) {
            alert("Please select gender!");
        } else {
            firstStepHandler();
        }
    };

    return (
        <>
            <Modal.Header>
                <div className="text-center">
                    <div className="mb-4">
                        <img
                            style={{ width: "60px", height: "60px" }}
                            src="/images/kyc/logo.png"
                            alt=""
                        />
                    </div>
                    <div className="p-4">
                        <h6>Verify Your Identity</h6>
                        <p className="mt-3 fs-4">
                            We'll verify it with your KYC documents
                        </p>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
                <form className="company-form">
                    <div className="p-3 pt-0">
                        <label htmlFor="full-name">Your full name</label>
                        <input
                            className="border p-3 rounded modal-input-box"
                            type="text"
                            required
                            name="username"
                            id="full-name"
                            defaultValue={formValue.username}
                            onChange={(e) => handleChange(e)}
                            placeholder="eg: Raj Kumar Babu"
                        />
                        <p className="input-box-button mb-0">
                            Ensure it matches name on your idendity documents
                        </p>

                        <label className="mt-4" htmlFor="date-of-birth">
                            Your date of birth
                        </label>
                        <input
                            className="border p-3 rounded modal-input-box"
                            type="date"
                            required
                            defaultValue={formValue.dateofbirth}
                            onChange={(e) => handleChange(e)}
                            name="dateofbirth"
                            id="date-of-birth"
                        />
                        <div className="mt-4">
                            <label htmlFor="gender">Your gender</label>
                            <div className="row mt-3" id="gender">
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className={`w-100 btn ${
                                            gender === "Female"
                                                ? `btn-success`
                                                : `btn-secondary `
                                        }`}
                                        onClick={() => changeGender("Female")}
                                    >
                                        Female
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className={`w-100 btn ${
                                            gender === "Male"
                                                ? `btn-success`
                                                : `btn-secondary `
                                        }`}
                                        onClick={() => changeGender("Male")}
                                    >
                                        Male
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className={`w-100 btn ${
                                            gender === "Other"
                                                ? `btn-success`
                                                : `btn-secondary `
                                        }`}
                                        onClick={() => changeGender("Other")}
                                    >
                                        Other
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 text-center">
                        <Button onClick={formHandler} size="medium">
                            Submit
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </>
    );
}

export default CustomerDetails;
