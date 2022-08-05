/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import { magic } from "../../utils/magic";

const LoginForm = ({ className }) => {
    const [_, setIsLoggingIn] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });
    const login = useCallback(
        async (email) => {
            setIsLoggingIn(true);
            try {
                await magic.auth.loginWithMagicLink({ email });
                setIsLoggingIn(true);
                router.push("/");
            } catch {
                setIsLoggingIn(false);
            }
        },
        [formSubmitted]
    );

    const onSubmit = (data, e) => {
        setFormSubmitted(true);
        e.preventDefault();
        login(data.email);
    };

    return (
        <div className={clsx("form-wrapper-one", className)}>
            <h4>Login</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.email && (
                        <ErrorText>{errors.email?.message}</ErrorText>
                    )}
                </div>
                <div className="d-flex flex-column align-items-center ">
                    <Button type="submit" size="medium" className="mr--15">
                        Log In / Sign Up
                    </Button>
                </div>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    className: PropTypes.string,
};
export default LoginForm;
