import React, { useEffect } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
                <div className="text-center">
                    <div className="mb-4">
                        <img
                            width= "60px" height="60px"
                            src="/images/kyc/kyb-icon.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <h6 className="m-3 mt-0">Verify Your Business</h6>
                        <p className="mt-3 fs-4">
                            Our partner ShuftiPro will vet your business through KYB &amp; AML processes to ensure no illegal business has been conducted
                        </p>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
                <form className="company-form">
                    <div className="p-3 pt-0">
                        <label
                            htmlFor="Company-Registration-Number"
                        >
                            Company Registration Number
                        </label>
                        <input
                            className="border p-3 rounded modal-input-box"
                            type="text"
                            placeholder="Enter your company registration number"
                            id="company-registration-number"
                            required
                        />
                        <label className="mt-3" htmlFor="company-name">
                            Company Name
                        </label>
                        <input
                            className="border p-3 rounded modal-input-box"
                            type="text"
                            placeholder="Enter your company name"
                            id="company-name"
                            required
                        />
                        <label
                            className="mt-3"
                            htmlFor="business-incorporation-date"
                        >
                            Business Incorporation Date
                        </label>
                        <input
                            className="border p-3 rounded modal-input-box"
                            type="date"
                            id="business-incorporation-date"
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
                            required
                            isClearable={true}
                            id="jurisdiction-code"
                        />
                    </div>
                    <div className="mt-5">
                        <Button size="medium" fullwidth>
                            Submit
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </>
    );
}

export default Company;
