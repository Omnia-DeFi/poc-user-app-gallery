import PropTypes, { string } from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import Anchor from "@ui/anchor";
import { markAsRead } from "@utils/markAsRead";

const unreadActivityStyle = {
    backgroundColor: "#FFCB74",
};

const getPath = (type) => {
    if (type === "kyc" || type === "kyb") return "/profile";
    if (type === "assets") return "/assets";
    return "#";
};

const handleClick = async (id, read, type) => {
    console.log("clicked");
    if (!read) await markAsRead(id);
    // push locations
    window.location.href = getPath(type);
};

const Activity = ({
    className,
    title,
    desc,
    time,
    date,
    image,
    status,
    read,
    type,
    id,
}) => (
    <div
        className={clsx("single-activity-wrapper", className)}
        style={read ? {} : unreadActivityStyle}
    >
        <div className="inner">
            <div className="read-content">
                {image?.src && (
                    <div className="thumbnail">
                        <Anchor path="#">
                            <Image
                                src={image.src}
                                alt={image?.alt || "Nft_Profile"}
                                width={image?.width || 500}
                                height={image?.height || 500}
                            />
                        </Anchor>
                    </div>
                )}
                <div className="content">
                    {/* <Anchor path="#" onClick={() => handleClick(id, read)}>
                        <h6 className="title">{title}</h6>
                    </Anchor> */}
                    <h6 onClick={() => handleClick(id, read, type)}>
                        <a href="">{title}</a>{" "}
                    </h6>
                    <p dangerouslySetInnerHTML={{ __html: desc }} />
                    <div className="time-maintane">
                        <div className="time data">
                            <i className="feather-clock" />
                            <span>
                                {time} on {date}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="icone-area">
                {status === "follow" && <i className="feather-thumbs-up" />}
                {status === "sale" && <i className="feather-shopping-cart" />}
                {status === "like" && <i className="feather-heart" />}
                {status === "offer" && <i className="feather-user-plus" />}
            </div>
        </div>
    </div>
);

Activity.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    read: Boolean,
    type: string,
    id: string,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.shape({
        src: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string])
            .isRequired,
        alt: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
    status: PropTypes.oneOf(["follow", "sale", "like", "offer"]),
};

export default Activity;
