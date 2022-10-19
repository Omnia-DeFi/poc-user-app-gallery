/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import Button from "@ui/button";
import ProductModal from "@components/modals/product-modal";
import ErrorText from "@ui/error-text";
import { toast } from "react-toastify";
import { getCookie } from "@utils/cookie";

const CreateNewArea = ({ className, space }) => {
    const [showProductModal, setShowProductModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const [hasImageError, setHasImageError] = useState(false);

    const [Avm, setAvm] = useState();
    const [Land_registry, setLand_registry] = useState();
    const [Survey_analysis, setSurvey_analysis] = useState();

    const [previewData, setPreviewData] = useState({});

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onChange",
    });

    const notify = () => toast("Your product has submitted");
    const handleProductModal = () => {
        setShowProductModal(false);
    };

    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const submitassets = (data) => {
        const userCookie = getCookie("user");
        const userCookiePayload = JSON.parse(decodeURIComponent(userCookie));

        const nftData = {
            email: userCookiePayload.email,
            images: data.image,
            productName: data.name,
            discription: data.discription,
            avm: data.avm,
            landRegistry: data.land_registry,
            survey_analysis: data.survey_analysis,
            floorArea: data.florarea,
            hasOutdoorSpace: data.outdoor_space === "Yes",
            bedrooms: parseInt(data.bedrooms, 10),
            bathrooms: parseInt(data.bathroom, 10),
            otherRooms: parseInt(data.other, 10),
            floorPrice: parseInt(data.floorPrice, 10),
            saleTimeframe: parseInt(data.sale_timeframe, 10),
            extraConditionsLabels: [data.Label_1, data.Label_2],
            extraConditionsDescriptions: [
                parseInt(data.extra_discretion_1, 10),
                parseInt(data.extra_discretion_2, 10),
            ],
        };

        try {
            fetch(`/api/assets/create`, {
                body: JSON.stringify(nftData),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            }).then(async (res) => {
                if (res.status === 200) {
                    console.log("submitted successfully");
                }
            });
        } catch (error) {
            console.log("createUser issue: ", error);
        }
    };

    const onSubmit = async (data, e) => {
        e.preventDefault();
        const { target } = e;
        const formattedData = {
            avm: Avm,
            land_registry: Land_registry,
            survey_analysis: Survey_analysis,
        };

        const submitBtn =
            target.localName === "span" ? target.parentElement : target;
        const isPreviewBtn = submitBtn.dataset?.btn;
        setHasImageError(!selectedImage);
        if (isPreviewBtn && selectedImage) {
            await setPreviewData({
                ...data,
                ...formattedData,
                image: selectedImage,
            });
            setShowProductModal(true);
        }
        if (!isPreviewBtn) {
            notify();
            reset();
            setSelectedImage();
        }
        submitassets({ ...data, ...formattedData });
    };

    return (
        <>
            <div
                className={clsx(
                    "create-area",
                    space === 1 && "rn-section-gapTop",
                    className
                )}
            >
                <form action="#" onSubmit={handleSubmit(onSubmit)}>
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
                                <div className="upload-area">
                                    <div className="upload-formate mb--30">
                                        <h6 className="title">Upload file</h6>
                                        <p className="formate">
                                            Drag or choose your file to upload
                                        </p>
                                    </div>

                                    <div className="brows-file-wrapper">
                                        <input
                                            name="file"
                                            id="file"
                                            type="file"
                                            className="inputfile"
                                            data-multiple-caption="{count} files selected"
                                            multiple
                                            onChange={imageChange}
                                        />
                                        {selectedImage && (
                                            <img
                                                id="createfileImage"
                                                src={URL.createObjectURL(
                                                    selectedImage
                                                )}
                                                alt=""
                                                data-black-overlay="6"
                                            />
                                        )}

                                        <label
                                            htmlFor="file"
                                            title="No File Choosen"
                                        >
                                            <i className="feather-upload" />
                                            <span className="text-center">
                                                Choose a File
                                            </span>
                                            <p className="text-center mt--10">
                                                PNG, GIF, WEBP, MP4 or MP3.{" "}
                                                <br /> Max 1Gb.
                                            </p>
                                        </label>
                                    </div>
                                    {hasImageError && !selectedImage && (
                                        <ErrorText>Image is required</ErrorText>
                                    )}
                                </div>

                                <div className="mt--100 mt_sm--30 mt_md--30 d-none d-lg-block">
                                    <h5> Note: </h5>
                                    <span>
                                        {" "}
                                        Service fee : <strong>2.5%</strong>{" "}
                                    </span>{" "}
                                    <br />
                                    <span>
                                        {" "}
                                        You will receive :{" "}
                                        <strong>25.00 ETH $50,000</strong>
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="form-wrapper-one">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="name"
                                                    className="form-label"
                                                >
                                                    Product Name
                                                </label>
                                                <input
                                                    id="name"
                                                    placeholder="e. g. `Digital Awesome Game`"
                                                    {...register("name", {
                                                        required:
                                                            "Name is required",
                                                    })}
                                                />
                                                {errors.name && (
                                                    <ErrorText>
                                                        {errors.name?.message}
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="Discription"
                                                    className="form-label"
                                                >
                                                    Discription
                                                </label>
                                                <textarea
                                                    id="discription"
                                                    rows="3"
                                                    placeholder="e. g. “After purchasing the product you can get item...”"
                                                    {...register(
                                                        "discription",
                                                        {
                                                            required:
                                                                "Discription is required",
                                                        }
                                                    )}
                                                />
                                                {errors.discription && (
                                                    <ErrorText>
                                                        {
                                                            errors.discription
                                                                ?.message
                                                        }
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        {/* new-changes */}
                                        <div className="text-white">
                                            Required Documents
                                        </div>
                                        <div className="mt-3">
                                            <label
                                                htmlFor="avm"
                                                className="form-label"
                                            >
                                                AVM*
                                            </label>
                                            <input
                                                type="file"
                                                id="avm"
                                                name="avm"
                                                multiple
                                                placeholder="e. g. `Digital Awesome Game`"
                                                onChange={(e) => {
                                                    setAvm(
                                                        e.target.files[0].name
                                                    );
                                                }}
                                            />
                                            <div>
                                                {errors.avm && (
                                                    <ErrorText>
                                                        {errors.avm?.message}
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <label
                                                htmlFor="land_registry"
                                                className="form-label"
                                            >
                                                Land registry*
                                            </label>
                                            <input
                                                type="file"
                                                id="land_registry"
                                                name="land_registry"
                                                multiple
                                                placeholder="e. g. ``"
                                                onChange={(e) => {
                                                    setLand_registry(
                                                        e.target.files[0].name
                                                    );
                                                }}
                                            />
                                            <div>
                                                {errors.land_registry && (
                                                    <ErrorText>
                                                        {
                                                            errors.land_registry
                                                                ?.message
                                                        }
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <label
                                                htmlFor="survey_analysis"
                                                className="form-label"
                                            >
                                                Survey analysis*
                                            </label>
                                            <input
                                                type="file"
                                                id="survey_analysis"
                                                name="survey_analysis"
                                                multiple
                                                placeholder="e. g. `Digital Awesome Game`"
                                                onChange={(e) => {
                                                    setSurvey_analysis(
                                                        e.target.files[0].name
                                                    );
                                                }}
                                            />
                                            <div>
                                                {errors.survey_analysis && (
                                                    <ErrorText>
                                                        {
                                                            errors
                                                                .survey_analysis
                                                                ?.message
                                                        }
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="text-white mb-3 mt-4">
                                            Space
                                        </div>
                                        <div className="col-md-4">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="price"
                                                    className="form-label"
                                                >
                                                    Floor area*
                                                </label>
                                                <input
                                                    id="florarea"
                                                    placeholder="e. g. `area`"
                                                    {...register("florarea", {
                                                        pattern: {
                                                            value: /^[0-9]+$/,
                                                            message:
                                                                "Please enter a number",
                                                        },
                                                        required:
                                                            "Floor area is required",
                                                    })}
                                                />
                                                {errors.florarea && (
                                                    <ErrorText>
                                                        {
                                                            errors.florarea
                                                                ?.message
                                                        }
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-3 ">
                                            <div className="input-box pb--20">
                                                <label
                                                    className="form-label"
                                                    htmlFor="select"
                                                >
                                                    Select
                                                </label>
                                                <input
                                                    type="text"
                                                    value="Select"
                                                />
                                            </div>
                                        </div>

                                        {/* is there an outdoor space */}
                                        <div>Is there an outdoor space? *</div>
                                        <div>
                                            <input
                                                type="radio"
                                                id="yes"
                                                name="outdoor_space"
                                                value="Yes"
                                                {...register("outdoor_space", {
                                                    required:
                                                        "Is there an outdoor space is required",
                                                })}
                                            />
                                            <label htmlFor="yes">Yes</label>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                id="no"
                                                name="outdoor_space"
                                                value="No"
                                                {...register("outdoor_space", {
                                                    required:
                                                        "Is there an outdoor space is required",
                                                })}
                                            />
                                            <label htmlFor="no">No</label>
                                        </div>

                                        {errors.outdoor_space && (
                                            <ErrorText>
                                                {errors.outdoor_space?.message}
                                            </ErrorText>
                                        )}
                                        <div className="text-white mb-3 mt-5">
                                            Amenities
                                        </div>
                                        <div className="col-md-4">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="price"
                                                    className="form-label"
                                                >
                                                    Bedrooms*
                                                </label>
                                                <input
                                                    id="bedrooms"
                                                    placeholder="e. g. `2`"
                                                    {...register("bedrooms", {
                                                        pattern: {
                                                            value: /^[0-9]+$/,
                                                            message:
                                                                "Please enter a number",
                                                        },
                                                        required:
                                                            "Bedrooms is required",
                                                    })}
                                                />
                                                {errors.bedrooms && (
                                                    <ErrorText>
                                                        {
                                                            errors.bedrooms
                                                                ?.message
                                                        }
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="bathroom"
                                                    className="form-label"
                                                >
                                                    Bathrooms*
                                                </label>
                                                <input
                                                    id="bathroom"
                                                    placeholder="e. g. `2`"
                                                    {...register("bathroom", {
                                                        required:
                                                            "Bathrooms is required",
                                                    })}
                                                />
                                                {errors.bathroom && (
                                                    <ErrorText>
                                                        {
                                                            errors.bathroom
                                                                ?.message
                                                        }
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="other"
                                                    className="form-label"
                                                >
                                                    Other Rooms
                                                </label>
                                                <input
                                                    id="other"
                                                    placeholder="e. g. `2`"
                                                    {...register("other", {
                                                        required:
                                                            "Other Rooms is required",
                                                    })}
                                                />
                                                {errors.other && (
                                                    <ErrorText>
                                                        {errors.other?.message}
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="text-white mb-3">
                                            Conditions Of Sale
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="input-box pb--20">
                                                    <label
                                                        htmlFor="floorPrice"
                                                        className="form-label"
                                                    >
                                                        Floor price*
                                                    </label>
                                                    <input
                                                        id="floorPrice"
                                                        placeholder="e. g. `xyz $`"
                                                        {...register(
                                                            "floorPrice",
                                                            {
                                                                pattern: {
                                                                    value: /^[0-9]+$/,
                                                                    message:
                                                                        "Please enter a number",
                                                                },
                                                                required:
                                                                    "Floor price is required",
                                                            }
                                                        )}
                                                    />
                                                    {errors.floorPrice && (
                                                        <ErrorText>
                                                            {
                                                                errors
                                                                    .floorPrice
                                                                    ?.message
                                                            }
                                                        </ErrorText>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-white mb-3">
                                            Terms of Payment
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="input-box pb--20">
                                                    <label
                                                        htmlFor="sale_timeframe"
                                                        className="form-label"
                                                    >
                                                        Sale consummation
                                                        timeframe (at least 24h)
                                                    </label>
                                                    <input
                                                        id="sale_timeframe"
                                                        placeholder="e. g. `xyz $`"
                                                        {...register(
                                                            "sale_timeframe",
                                                            {
                                                                pattern: {
                                                                    value: /^[0-9]+$/,
                                                                    message:
                                                                        "Please enter a number",
                                                                },
                                                                required:
                                                                    "Sale consummation timeframe is required",
                                                            }
                                                        )}
                                                    />
                                                    {errors.sale_timeframe && (
                                                        <ErrorText>
                                                            {
                                                                errors
                                                                    .sale_timeframe
                                                                    ?.message
                                                            }
                                                        </ErrorText>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-white mb-3">
                                            Extra Sale Conditions
                                        </div>
                                        <div className="col-md-4">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="Label_1"
                                                    className="form-label"
                                                >
                                                    Label 1*
                                                </label>
                                                <input
                                                    id="Label_1"
                                                    placeholder="e. g. `enter text`"
                                                    {...register("Label_1", {
                                                        required:
                                                            "1 is required",
                                                    })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="extra_discretion_1"
                                                    className="form-label"
                                                >
                                                    Discretion 1 *
                                                </label>
                                                <input
                                                    id="extra_discretion_1"
                                                    placeholder="e. g. `xyz $`"
                                                    Sale
                                                    consummation
                                                    {...register(
                                                        "extra_discretion_1",
                                                        {
                                                            required:
                                                                "1 is required",
                                                        }
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="Label_2"
                                                    className="form-label"
                                                >
                                                    Label 2*
                                                </label>
                                                <input
                                                    id="Label_2"
                                                    placeholder="e. g. `enter text`"
                                                    {...register("Label_2", {
                                                        required:
                                                            "2 is required",
                                                    })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="extra_discretion_2"
                                                    className="form-label"
                                                >
                                                    Discretion 2 *
                                                </label>
                                                <input
                                                    id="extra_discretion_2"
                                                    placeholder="e. g. `xyz $`"
                                                    {...register(
                                                        "extra_discretion_2",
                                                        {
                                                            required:
                                                                "2 is required",
                                                        }
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <div className="text-white mb-3">
                                            <span className="h6 me-3">⊕</span>
                                            Add another condition
                                        </div>
                                        <div className="col-md-12 col-xl-4">
                                            <div className="input-box">
                                                <Button
                                                    color="primary-alta"
                                                    fullwidth
                                                    type="submit"
                                                    data-btn="preview"
                                                    onClick={handleSubmit(
                                                        onSubmit
                                                    )}
                                                >
                                                    Preview
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-xl-8 mt_lg--15 mt_md--15 mt_sm--15">
                                            <div className="input-box">
                                                <Button type="submit" fullwidth>
                                                    Submit Item
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt--100 mt_sm--30 mt_md--30 d-block d-lg-none">
                                <h5> Note: </h5>
                                <span>
                                    {" "}
                                    Service fee : <strong>2.5%</strong>{" "}
                                </span>{" "}
                                <br />
                                <span>
                                    You will receive :{" "}
                                    <strong>25.00 ETH $50,000</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {showProductModal && (
                <ProductModal
                    show={showProductModal}
                    handleModal={handleProductModal}
                    data={previewData}
                />
            )}
        </>
    );
};
CreateNewArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
CreateNewArea.defaultProps = {
    space: 1,
};

export default CreateNewArea;
