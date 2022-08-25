import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";
import toast, { Toaster } from "react-hot-toast";

function CustomerDetails({ firstStepHandler }) {
    const initialValues = { username: "", dateofbirth: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [gender, setGender] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const [validgender, setValidGender] = useState(false);

    const changeGender = (e) => {
        setValidGender(true);
        setGender(e);
    };

    const formHandler = () => {
        if (validgender === false) {
            toast.error("Please select gender!");
        } else {
            toast.success("Successfully Submit!");
            firstStepHandler();
        }
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        formHandler();
    };

    return (
        <>
            <Modal.Header>
                <div className="text-center">
                    <img
                        style={{ width: "60px", height: "60px" }}
                        src="/images/kyc/logo.png"
                        alt=""
                    />
                    <h6 className="my-2">
                        Verify Your Identity
                    </h6>
                    <p className="m-0">
                        We'll verify it with your KYC documents
                    </p>
                </div>
            </Modal.Header>
            <Modal.Body>
                <form className="company-form" onSubmit={handleSubmit}>
                    <Toaster position="top-center" reverseOrder={false} />
                    <div className="p-3 pt-0">
                        <label htmlFor="full-name">Your full name</label>
                        <input
                            className="border p-3 rounded modal-input-box"
                            type="text"
                            name="username"
                            value={formValues.username}
                            onChange={handleChange}
                            required
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
                            value={formValues.dateofbirth}
                            onChange={handleChange}
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
                        <Button type="submit" size="medium">
                            Submit
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </>
    );
}

export default CustomerDetails;
