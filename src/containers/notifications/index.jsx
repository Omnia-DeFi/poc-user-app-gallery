import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Notifications from "@components/notifications";
import { IDType, ImageType } from "@utils/types";
import { useUserContext } from "src/context/context";
import axios from "axios";
import moment from "moment";
import { getUserIdByEmail } from "../../utils/getUserIdByEmail";

const NotificationsArea = ({ space, className }) => {
    // const [activities] = useState(data?.activities || []);
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(false);
    const { state, dispatch } = useUserContext();

    const retrieveNotifications = async () => {
        const userId = await getUserIdByEmail(state.email);
        setLoading(true);
        // eslint-disable-next-line no-shadow

        try {
            const { data } = await axios.get(
                `/api/notification/getNotifications/${userId}`
            );
            // eslint-disable-next-line react/prop-types
            setNotifications(data.notifications.reverse() || []);
        } catch (error) {
            setNotifications([]);
        }
        setLoading(false);
    };

    useEffect(() => {
        retrieveNotifications();
    }, [state]);

    // const handleClick = async (
    //     notificationsId,
    //     notificationsRead,
    //     notificationsType
    // ) => {
    //     if (!notificationsRead) await markAsRead(notificationsId);
    //     router.push(getPath(notificationsType));
    // };

    return (
        <div
            className={clsx(
                "rn-notifications-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row mb--30">
                    <h3 className="title col-md-6">All Notifications</h3>
                    <p className="col-md-6 text-end color-primary fw-bold">Mark all read</p>
                </div>
                <div className="row g-6 notifications-direction">
                    {loading && <p className="">Loading</p>}
                    {notifications &&
                        notifications?.map((item) => (
                            <Notifications
                                id={item.id}
                                key={item.id}
                                title={item.title}
                                desc={item.content}
                                time={moment(item.createdAt).format(
                                    "h:mm:ss a"
                                )}
                                date={moment(item.createdAt).format(
                                    "Do MMMM YYYY"
                                )}
                                status={item.status}
                                read={item.read}
                                type={item?.type?.toLowerCase()}
                                notificationsRefresh={retrieveNotifications}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

NotificationsArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        activities: PropTypes.arrayOf(
            PropTypes.shape({
                id: IDType,
                title: PropTypes.string,
                slug: PropTypes.string,
                description: PropTypes.string,
                date: PropTypes.string,
                time: PropTypes.string,
                author: PropTypes.shape({
                    name: PropTypes.string,
                    slug: PropTypes.string,
                }),
                image: ImageType,
                status: PropTypes.oneOf(["follow", "sale", "like", "offer"]),
                marketFilters: PropTypes.arrayOf(PropTypes.string),
                userFilters: PropTypes.arrayOf(PropTypes.string),
            })
        ),
    }),
};

NotificationsArea.defaultProps = {
    space: 1,
};

export default NotificationsArea;
