/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import Button from "@ui/button";
import ProductModal from "@components/modals/product-modal";
import ErrorText from "@ui/error-text";
import { toast } from "react-toastify";
import { getCookie } from "@utils/cookie";
import Axios from "axios";
import IndexConfirmation from "../../components/assets-confirmation-modal/IndexConfirmation";
import IndexProgress from "../../components/asset-submission-progress/IndexProgress";

const CreateNewArea = ({ className, space }) => {
    const [showProductModal, setShowProductModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const [hasImageError, setHasImageError] = useState(false);
    const [confirmSubmission, setConfirmSubmission] = useState(false);
    const [assetsData, setAssetsData] = useState({});

    const [Avm, setAvm] = useState();
    const [landRegistry, setLandRegistry] = useState();
    const [surveyAnalysis, setSurveyAnalysis] = useState();
    const [galleryImage, setGalleryImage] = useState([]);

    const [previewData, setPreviewData] = useState({});

    const [extraSaleCondition, setExtraSaleCondition] = useState([]);

    const [loaderHeading, setLoaderHeading] = useState("Submitting Asset");
    const [loaderBody, setLoaderBody] = useState(
        "Uploading your asset please wait..."
    );
    const [submissionLoader, setSubmissionLoader] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onChange",
    });
    const handleProductModal = () => {
        setShowProductModal(false);
    };
    const notify = (text) => toast(text);
    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setGalleryImage([...galleryImage, ...e.target.files]);
            setSelectedImage(e.target.files[0]);
        }
    };
    const router = useRouter();
    const closeSubmissionModal = () => {
        setSubmissionLoader(false);
        setSubmissionSuccess(false);
        router.push("/");
    };

    const getSignature = async () => {
        const response = await fetch("/api/assets/signaturekey", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    };

    const saveAssetsTextInfo = async (data) => {
        try {
            return new Promise((resolve, reject) => {
                fetch(`/api/assets/create`, {
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                }).then(async (res) => {
                    if (res.status === 200) {
                        setGalleryImage([]);
                        const result = await res.json();
                        resolve(result);
                    } else {
                        setGalleryImage([]);
                        notify("Error while submitting assets");
                        reject(res);
                    }
                });
            });
        } catch (error) {
            notify("Error while submitting assets");
            return false;
        }
    };

    const sendFileToCloud = async (image, signature, timestamp) => {
        const promise = new Promise((resolve, reject) => {
            const data = new FormData();
            data.append("file", image);
            data.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
            data.append("signature", signature);
            data.append("timestamp", timestamp);
            // setTimeout(resolve("timeout"), 30 * 1000);
            Axios.defaults.timeout = 30000;
            Axios.post(
                "https://api.cloudinary.com/v1_1/omniadefi/image/upload",
                data
            )
                .then((res, err) => {
                    if (err) {
                        resolve("");
                    } else {
                        resolve(res.data.url);
                    }
                })
                .catch((err) => {
                    console.log("error while sending file to cloud", err);
                    resolve("");
                });
        });
        return promise;
    };

    const updateAsset = async (data) => {
        try {
            return new Promise((resolve, reject) => {
                fetch(`/api/assets/update`, {
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                }).then(async (res) => {
                    if (res.status === 200) {
                        const result = await res.json();
                        resolve(result);
                        // notify("Your assets successfully updated");
                    } else {
                        notify("Error while updating assets");
                        reject(res);
                    }
                });
            });
        } catch (error) {
            notify("Error while updating assets");
            return false;
        }
    };

    const prepareLoaderMsg = (key, index, total) => {
        switch (key) {
            case "AVM":
                setLoaderHeading("Uploading AVM");
                setLoaderBody("Uploading AVM");
                break;
            case "landRegistry":
                setLoaderHeading("Uploading Land Registry");
                setLoaderBody(
                    "Uploading Land Registry document, please wait..."
                );
                break;
            case "surveyProof":
                setLoaderHeading("Uploading Survey Analysis");
                setLoaderBody(
                    "Uploading Survey Analysis document, please wait..."
                );
                break;
            case "images":
                setLoaderHeading("Uploading Assets Image");
                setLoaderBody(
                    `Uploading Gallery (image/videos) (${
                        index + 1
                    }/${total}), please wait...`
                );
                break;
            default:
                setLoaderHeading("Submitting Asset");
                setLoaderBody(
                    "Uploading your asset document/images/videos, please wait..."
                );
                break;
        }
    };
    const uploadFile = async (signature, timestamp, assestId) => {
        const images = [
            {
                key: "landRegistry",
                values: landRegistry,
            },
            {
                key: "AVM",
                values: Avm,
            },
            {
                key: "surveyProof",
                values: surveyAnalysis,
            },
            {
                key: "images",
                values: galleryImage,
            },
        ];
        for (let i = 0; i < images.length; i++) {
            if (images[i].values && images[i].values.length) {
                for (let j = 0; j < images[i].values.length; j++) {
                    await prepareLoaderMsg(
                        images[i].key,
                        j,
                        images[i].values.length
                    );
                    const url = await sendFileToCloud(
                        images[i].values[j],
                        signature,
                        timestamp
                    );
                    await updateAsset({
                        id: assestId,
                        [images[i].key]: url,
                    });
                }
            } else {
                console.log("unbale to upload file: ", images[i].key);
                notify(`Error while uploading file: ${images[i].key}`);
            }
        }
    };

    const submitassets = async () => {
        const signature = await getSignature();
        setSubmissionLoader(true);
        const data = assetsData;
        const userCookie = getCookie("user");
        const userCookiePayload = JSON.parse(decodeURIComponent(userCookie));
        const extraConditionsLabels = [];
        const extraConditionsDescriptions = [];
        for (let i = 0; i < extraSaleCondition.length; i++) {
            extraConditionsLabels.push(data[`Label_${i + 1}`]);
            extraConditionsDescriptions.push(
                data[`extra_description_${i + 1}`]
            );
        }
        const nftData = {
            email: userCookiePayload.email,
            name: data.name,
            description: data.discription,
            avm: "",
            landRegistry: "",
            surveyAnalysis: "",
            images: [],
            productName: data.name,
            floorArea: data.florarea,
            hasOutdoorSpace: data.outdoor_space === "Yes",
            bedrooms: parseInt(data.bedrooms, 10),
            bathrooms: parseInt(data.bathroom, 10),
            otherRooms: parseInt(data.other, 10),
            floorPrice: parseInt(data.floorPrice, 10),
            saleTimeframe: parseInt(data.sale_timeframe, 10),
            extraConditionsLabels,
            extraConditionsDescriptions,
        };

        const assestId = await saveAssetsTextInfo(nftData);
        if (assestId && assestId.createdAssets && assestId.createdAssets.id) {
            await uploadFile(
                signature.data.signature,
                signature.data.timestamp,
                assestId.createdAssets.id
            );
            notify("Your assets has submitted");
            setSubmissionSuccess(true);
        } else {
            notify("Error while submitting assets");
        }
    };

    const onSubmit = async (data, e) => {
        e.preventDefault();
        const { target } = e;
        const formattedData = {
            avm: Avm,
            land_registry: landRegistry,
            survey_analysis: surveyAnalysis,
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
        setConfirmSubmission(true);
        setAssetsData({ ...data, ...formattedData });
    };

    const cancelSubmission = () => {
        setConfirmSubmission(false);
    };
    const completeSubmission = () => {
        setConfirmSubmission(false);
        submitassets();
    };
    const addExtraSaleCondition = () => {
        setExtraSaleCondition([
            ...extraSaleCondition,
            { label: "", description: "" },
        ]);
    };

    useEffect(() => {}, [extraSaleCondition]);

    return (
        <>
            {submissionLoader && (
                <IndexProgress
                    show
                    heading={loaderHeading}
                    body={loaderBody}
                    uploaded={submissionSuccess}
                    closeSubmissionModal={closeSubmissionModal}
                />
            )}
            {confirmSubmission && (
                <IndexConfirmation
                    show
                    handleModal={() => {
                        setConfirmSubmission(false);
                    }}
                    cancelSubmission={cancelSubmission}
                    completeSubmission={completeSubmission}
                />
            )}
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
                                        {/* {selectedImage && (
                                            <img
                                                id="createfileImage"
                                                src={URL.createObjectURL(
                                                    selectedImage
                                                )}
                                                alt=""
                                                data-black-overlay="6"
                                            />
                                        )} */}

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
                                <br />
                                {galleryImage && galleryImage.length ? (
                                    <div className="container d-flex justify-content-center selected-images">
                                        <div className="row d-flex gap-1 img-row">
                                            {galleryImage &&
                                                galleryImage.map(
                                                    (data, index) => (
                                                        <div className="col-md-2 img-item">
                                                            <img
                                                                id="createfileImage"
                                                                src={URL.createObjectURL(
                                                                    data
                                                                )}
                                                                alt=""
                                                                data-black-overlay="6"
                                                            />
                                                        </div>
                                                    )
                                                )}
                                        </div>
                                    </div>
                                ) : (
                                    <> </>
                                )}

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
                                                    setAvm([...e.target.files]);
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
                                                    setLandRegistry([
                                                        ...e.target.files,
                                                    ]);
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
                                                    setSurveyAnalysis([
                                                        ...e.target.files,
                                                    ]);
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
                                                    Unit
                                                </label>

                                                <select
                                                    name=""
                                                    className="custom-select"
                                                >
                                                    <option value="e. g. `area`">
                                                        Select
                                                    </option>
                                                    <option value="200">
                                                        m²
                                                    </option>
                                                    <option value="100">
                                                        ft²
                                                    </option>
                                                </select>
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

                                        {extraSaleCondition.map(
                                            (data, index) => (
                                                <>
                                                    <div className="col-md-4">
                                                        <div className="input-box pb--20">
                                                            <label
                                                                htmlFor={`Label_1+${
                                                                    index + 1
                                                                }`}
                                                                className="form-label"
                                                            >
                                                                Label{" "}
                                                                {index + 1} *
                                                            </label>
                                                            <input
                                                                id="Label_1"
                                                                placeholder="e. g. `enter text`"
                                                                {...register(
                                                                    `Label_${
                                                                        index +
                                                                        1
                                                                    }`,
                                                                    {
                                                                        required:
                                                                            "1 is required",
                                                                    }
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="input-box pb--20">
                                                            <label
                                                                htmlFor={`extra_description_${
                                                                    index + 1
                                                                }`}
                                                                className="form-label"
                                                            >
                                                                Description{" "}
                                                                {index + 1} *
                                                            </label>
                                                            <input
                                                                id={`extra_description_${
                                                                    index + 1
                                                                }`}
                                                                placeholder="e. g. `xyz $`"
                                                                Sale
                                                                consummation
                                                                {...register(
                                                                    `extra_description_${
                                                                        index +
                                                                        1
                                                                    }`,
                                                                    {
                                                                        required:
                                                                            "1 is required",
                                                                    }
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        )}

                                        <div className="text-white mb-3">
                                            <span
                                                className="h6 me-3"
                                                onClick={addExtraSaleCondition}
                                            >
                                                {" "}
                                                ⊕{" "}
                                            </span>
                                            Add another condition
                                        </div>

                                        <div className="col-md-12 col-xl-12 mt_lg--15 mt_md--15 mt_sm--15">
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
