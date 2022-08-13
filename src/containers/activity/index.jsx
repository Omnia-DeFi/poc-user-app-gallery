import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Activity from "@components/activity";
import { IDType, ImageType } from "@utils/types";
import { useUserContext } from "src/context/context";
import axios from "axios";
import { getUserIdByEmail } from "../../utils/getUserIdByEmail";

const ActivityArea = ({ space, className, data }) => {
    // const [activities] = useState(data?.activities || []);
    const { state, dispatch } = useUserContext();
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(false);

    const retrieveNotifications = async () => {
        const userId = await getUserIdByEmail(state.email);
        setLoading(true);
        // eslint-disable-next-line no-shadow
        const { data } = await axios.post(
            `/api/notification/getNotifications/${userId}`
        );
        setLoading(false);
        // eslint-disable-next-line react/prop-types
        setNotifications(data.notifications || []);
    };

    useEffect(() => {
        retrieveNotifications();
    }, []);

    return (
        <div
            className={clsx(
                "rn-activity-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row mb--30">
                    <h3 className="title">All Notifications</h3>
                </div>
                <div className="row g-6 activity-direction">
                    {loading && <p className="">Loading</p>}
                    {notifications &&
                        notifications?.map((item) => (
                            <Activity
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                path="#"
                                desc={item.content}
                                time={item.createdAt}
                                date={item.createdAt}
                                author={item.author}
                                status={item.status}
                                read={item.read}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

ActivityArea.propTypes = {
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

ActivityArea.defaultProps = {
    space: 1,
};

export default ActivityArea;
