import React from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "@ui/button";

function CustomerDetails({ firstStepHandler }) {
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
                    <div>
                        <h6 className="my-2">
                            Hi ! Help us Setup your account
                        </h6>
                        <p className="m-0">
                            We'll verify it with your KYC documents
                        </p>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="row p-3">
                        <label htmlFor="">Your full name</label>
                        <input
                            className="border p-3 rounded"
                            type="text"
                            required
                            name="username"
                            placeholder="eg: Raj Kumar Babu"
                        />
                        <p>Ensure it matches name on your idendity documents</p>
                        <label htmlFor="">Your date of birth</label>
                        <input
                            className="border p-3 rounded"
                            type="date"
                            required
                            name="dateofbirth"
                            placeholder="DD/MM/YYYY"
                        />

                        <div className="mt-3">
                            <label className="text-color">Your gender</label>
                            <div className="row mt-3">
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className="bbutton col-12 border btn btn-block btn-success btn-outline-success"
                                        value="Female"
                                        // onClick={() => this.changegender("Female")}
                                    >
                                        Female
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className="bbutton border RoundButton btn btn-block btn-outline-success"
                                        value="Male"
                                        // onClick={() => this.changegender("Male")}
                                    >
                                        Male
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className="bbutton RoundButton border btn btn-block btn-outline-success"
                                        value="Other"
                                        // onClick={() => this.changegender("Other")}
                                    >
                                        Other
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <Button
                            onClick={firstStepHandler}
                            size="medium"
                            fullwidth
                        >
                            Continue
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </>
    );
}

export default CustomerDetails;
