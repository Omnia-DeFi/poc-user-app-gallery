import PropTypes from "prop-types";
import clsx from "clsx";

const BurgerButton = ({ className, onClick }) => (
    <button
        type="button"
        className={clsx(className, "hamberger-button")}
        onClick={onClick}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="21px"
        >
            <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
            />
        </svg>
    </button>
);

BurgerButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default BurgerButton;
