import PropTypes, { string } from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import Anchor from "@ui/anchor";
import { markAsRead } from "@utils/markAsRead";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
    notificationsRefresh,
}) => {
    const unreadActivityBg = {
        backgroundColor: "#333",
    };
    const unreadActivityText = {
        color: "#f6f6f6",
    };
    const router = useRouter();

    const getPath = (type) => {
        if (type === "kyc" || type === "kyb") return "/profile";
        if (type === "assets") return "/assets";
        return notificationsRefresh();
    };

    const handleClick = async (id, read, type) => {
        if (!read) await markAsRead(id);
        router.push(getPath(type));
    };

    return (
        <div
            className={clsx("single-activity-wrapper", className)}
            style={read ? {} : unreadActivityBg}
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
                        <h6
                            onClick={() => handleClick(id, read, type)}
                            style={read ? {} : unreadActivityText}
                        >
                            {title}
                        </h6>
                        <p dangerouslySetInnerHTML={{ __html: desc }} />
                        <div className="time-maintane">
                            <div className="time data">
                                <i className="feather-clock" />
                                <span style={read ? {} : unreadActivityText}>
                                    {time} on {date}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="icone-area">
                    {status === "follow" && <i className="feather-thumbs-up" />}
                    {status === "sale" && (
                        <i className="feather-shopping-cart" />
                    )}
                    {status === "like" && <i className="feather-heart" />}
                    {status === "offer" && <i className="feather-user-plus" />}
                </div>
            </div>
        </div>
    );
};

Activity.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    type: string,
    id: string,
    notificationsRefresh: PropTypes.func,
    image: PropTypes.shape({
        src: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string])
            .isRequired,
        alt: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }),
    status: PropTypes.oneOf(["follow", "sale", "like", "offer"]),
};

export default Activity;
