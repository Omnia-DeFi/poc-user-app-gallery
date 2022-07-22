import PropTypes from "prop-types";
import clsx from "clsx";

const ProductTitle = ({ className, title }) => (
    <div className={clsx("pd-title-area", className)}>
        <h4 className="title">{title}</h4>
    </div>
);

ProductTitle.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
};

export default ProductTitle;
