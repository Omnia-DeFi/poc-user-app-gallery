import PropTypes from "prop-types";
import clsx from "clsx";

const GoogleMapArea = ({ space, className }) => (
    <div
        className={clsx(
            "rn-contact-map-area position-relative",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                <div
                    className="col-12"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <div className="connect-thumbnail">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8684835071967!2d-0.16201018382514384!3d51.51562877963641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acb4614c871%3A0x2ab51d24c6b35214!2s44%20Great%20Cumberland%20Pl%2C%20London!5e0!3m2!1sen!2suk!4v1658750402191!5m2!1sen!2suk"
                            height="550"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

GoogleMapArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

GoogleMapArea.defaultProps = {
    space: 1,
};

export default GoogleMapArea;
