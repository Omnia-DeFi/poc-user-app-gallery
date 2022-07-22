import PropTypes from "prop-types";
import clsx from "clsx";
import LoginForm from "@components/login-form";

const LoginArea = ({ className, space }) => (
    <div
        className={clsx(
            "login-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row">
                <div style={{ maxWidth: "65%" }} className="mx-auto">
                    <LoginForm />
                </div>
            </div>
        </div>
    </div>
);

LoginArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

LoginArea.defaultProps = {
    space: 1,
};
export default LoginArea;
