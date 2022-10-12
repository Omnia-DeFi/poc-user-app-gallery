import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Notifications from "@components/notifications";
import { IDType, ImageType } from "@utils/types";
import { useUserContext } from "src/context/context";
import axios from "axios";
import moment from "moment";
import { markAsAllRead } from "@utils/markAsAllRead";
import Pusher from "pusher-js";
import { getNotifications } from "@utils/getNotReadNotifications";
import { readNotification } from "src/context/actions";
import { getUserIdByEmail } from "../../utils/getUserIdByEmail";

const NotificationsArea = ({ space, className }) => {
    // const [activities] = useState(data?.activities || []);
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(false);
    const { state, dispatch } = useUserContext();
    const [markAllRead, setMarkAllRead] = useState(true);
    const [buttonText, setButtonText] = useState("Mark all read");

    const retrieveNotifications = async () => {
        const userId = await getUserIdByEmail(state.email);
        // setLoading(true);
        // eslint-disable-next-line no-shadow

        try {
            const { data } = await axios.get(
                `/api/notification/getNotifications/${userId}`
            );
            const notificationsCount = await getNotifications(state.email);
            if (notificationsCount.length !== 0) setMarkAllRead(false);
            else setMarkAllRead(true);
            // eslint-disable-next-line react/prop-types
            setNotifications(data.notifications.reverse() || []);
        } catch (error) {
            setNotifications([]);
        }
        // setLoading(false);
    };

    useEffect(() => {
        retrieveNotifications();
    }, [state]);

    useEffect(() => {
        // only for test, this has to be removed from production
        // Pusher.logToConsole = true;
        const pusher = new Pusher("b2c6e10ed473266b458b", {
            cluster: "eu",
        });
        const channel = pusher.subscribe("omnia");
        channel.bind("new-notification", async (data) => {
            retrieveNotifications();
            console.log("You should see a NEW NEW NOTIFICATION!", data);
        });
    }, []);

    const handleMarkAsAllReadClick = async () => {
        setButtonText(<div className="large-notification-loader" />);
        const userId = await getUserIdByEmail(state.email);
        await markAsAllRead(userId);
        retrieveNotifications();
        await dispatch(readNotification());
        // dispatch()
    };

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
                    <h3 className="title col-md-10">All Notifications</h3>
                    <p
                        className="col-md-2 text-end color-primary fw-bold"
                        onClick={() => handleMarkAsAllReadClick()}
                        style={markAllRead ? { visibility: "hidden" } : null}
                        tabIndex={0}
                        // we need onClick handler here
                        // eslint-disable-next-line max-len
                        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                        role="button"
                        onKeyUp={(e) => e.preventDefault()}
                    >
                        {buttonText}
                    </p>
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
