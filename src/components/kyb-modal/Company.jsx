import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";
import { getCookie } from "@utils/cookie";
import { setCookie } from "cookies-next";
import jurisdictionData from "../../data/jurisdiction.json";

const Company = ({ firstStepHandler }) => {
    const initialValues = {
        name: "",
        registrationNumber: "",
        incorporationDate: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [selectedJurisdictionId, setSelectedJurisdictionId] = useState(null);
    const [options, setOptions] = useState([]);

    const selectHandler = (e) => {
        if (e && e.id) {
            setSelectedJurisdictionId(e.id);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const formHandler = () => {
        if (selectedJurisdictionId === null) {
            toast.error("Please select jurisdiction Code!");
        } else {
            toast.success("Successfully Submit!");
            firstStepHandler();
        }
    };

    // useEffect(() => {
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //     }
    // }, [formErrors]);

    // if local asset use this set of code >>>>>>
    useEffect(() => {
        setOptions(
            jurisdictionData.map(({ id, jurisdiction, code }) => ({
                id,
                label: jurisdiction,
                value: code,
            }))
        );
    }, []);

    const customStyles = {
        control: (base, state) => ({
            ...base,
            background: "transparent",
        }),
        menu: (base) => ({
            ...base,
            // override border radius to match the box
            borderRadius: 0,
            // kill the gap
            marginTop: 0,
        }),
        menuList: (base) => ({
            ...base,
            // kill the white space on first and last option
            background: "#000",
            color: "transparent",
            padding: 0,
        }),
    };

    const saveKYB = () => {
        const userCookie = getCookie("user");
        if (userCookie) {
            const userCookiePayload = JSON.parse(
                decodeURIComponent(userCookie)
            );
            if (userCookiePayload && userCookiePayload.email) {
                const data = {
                    incorporationDate: formValues.incorporationDate,
                    name: formValues.name,
                    registrationNumber: formValues.registrationNumber,
                    jurisdiction: selectedJurisdictionId,
                    type: "KYB",
                    email: userCookiePayload.email,
                };

                fetch(`/api/kyb/create`, {
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                }).then(async (res) => {
                    if (res.status === 200) {
                        userCookiePayload.kycState = "verified";
                        setCookie("user", userCookiePayload);
                        firstStepHandler();
                    } else {
                        toast.error("Error saving KYB details");
                    }
                });
            } else {
                toast.error("Please login to continue");
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        saveKYB();
        // formHandler();
    };

    return (
        <>
            <Modal.Header>
                <div className="text-center">
                    <div className="mb-4">
                        <img
                            width="60px"
                            height="60px"
                            src="/images/kyb/kyb-icon.png"
                            alt=""
                        />
                    </div>
                    <div className="p-4">
                        <h6>Verify Your Business</h6>
                        <p className="fs-4">
                            Our partner ShuftiPro will vet your business through
                            KYB &amp; AML processes to ensure no illegal
                            business has been conducted
                        </p>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
                <form className="company-form" onSubmit={handleSubmit}>
                    <Toaster position="top-center" reverseOrder={false} />

                    <div className="p-3 pt-0">
                        <label htmlFor="Company-Registration-Number">
                            Company Registration Number
                        </label>
                        <input
                            className="border p-3 rounded modal-input-box"
                            type="text"
                            name="registrationNumber"
                            placeholder="Enter your company registration number"
                            id="company-registration-number"
                            value={formValues.registrationNumber}
                            onChange={handleChange}
                            required
                        />
                        <label className="mt-4" htmlFor="company-name">
                            Company Name
                        </label>
                        <input
                            className="border p-3 rounded modal-input-box"
                            type="text"
                            name="name"
                            placeholder="Enter your company name"
                            id="company-name"
                            value={formValues.name}
                            onChange={handleChange}
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
                            name="incorporationDate"
                            id="business-incorporation-date"
                            value={formValues.incorporationDate}
                            onChange={handleChange}
                            required
                        />

                        <label className="mt-4" htmlFor="jurisdiction-code">
                            Company Jurisdiction
                        </label>

                        <Select
                            className="text-xl jurisdiction-code"
                            classNamePrefix="react-select"
                            defaultValue={selectedJurisdictionId}
                            onChange={selectHandler}
                            options={options}
                            // styles={customStyles}
                            isClearable
                            id="jurisdiction-code"
                            required
                        />
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
};

export default Company;

Company.propTypes = {
    firstStepHandler: PropTypes.func.isRequired,
};
