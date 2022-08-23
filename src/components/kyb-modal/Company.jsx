import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";
import Select from "react-select";
import jurisdictionData from "../../data/jurisdiction.json";

function Company({}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState([]);

   // if local asset use this set of code >>>>>>
    useEffect(() => {
        setOptions(
            jurisdictionData.map(({ id, jurisdiction, code }) => ({
                id,
                label: jurisdiction,
                value: code
            }))
        );
    }, []);

    // if not local asset use this set of code >>>>>>

    // useEffect(() => {
    //       const getOptions = async () => {
    //         try {
    //           const response = await fetch("");
    //           const options = await response.json();
    //           console.log(options);
    //           setOptions(
    //             jurisdictionData.map(({ id, jurisdiction, code }) => ({
    //               id,
    //               label: jurisdiction,
    //               value: code
    //             }))
    //           );
    //         } catch (error) {
    //           // ignore
    //         }
    //       };
    //       getOptions();
    // }, []);
  
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
                    <div className="p-4">
                        <h6 >Verify Your Business</h6>
                        <p className="fs-4">
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
                        <label className="mt-4" htmlFor="company-name">
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
                            className="mt-4"
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

                        <label className="mt-4" htmlFor="jurisdiction-code">
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
                    <div className="mt-5 text-center">
                        <Button size="medium">
                            Submit
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </>
    );
}

export default Company;

