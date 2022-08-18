import React, { useEffect } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "@ui/button";
import Select from "react-select";
import { useState } from "react";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

function Company({}) {
    const [selectedOption, setSelectedOption] = useState(null);
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
                    <div>
                        <h6 className="my-2">Hi, Help us Setup your account</h6>
                        <p className="m-0">
                            We will verify it with your KYB documents
                        </p>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="row p-3">
                        <label className="mt-3" htmlFor="company-registration-number">
                            Company Registration Number
                        </label>
                        <input
                            className="border p-3 rounded"
                            type="text"
                            placeholder="Enter your company registration number"
                            id="company-registration-number"
                            required
                        />
                        <label className="mt-3" htmlFor="company-name">
                            Company Name
                        </label>
                        <input
                            className="border p-3 rounded"
                            type="text"
                            placeholder="Enter your company name"
                            id="company-name"
                            required
                        />

                        <label className="mt-3" htmlFor="jurisdiction-code">
                            Company Jurisdiction
                        </label>
                        <Select
                            className="text-xl"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isClearable={true}
                            id="jurisdiction-code"
                        />
                    </div>
                    <div className="mt-5">
                        <Button size="medium" fullwidth>
                            Continue
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </>
    );
}

export default Company;
