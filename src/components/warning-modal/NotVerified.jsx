import { useRouter } from "next/router";

const NotVerified = () => {
    const router = useRouter();
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-warning">Verification required</h1>
            <p className="text-center">
                You need to have successfully passed KYC, AML and KYB to see
                this page
            </p>
            <div className="warning-checkmark my-5">
                <div className="check-icon">
                    <span className="icon-line line-tip" />
                    <span className="icon-line line-long" />
                    <div className="icon-circle" />
                    <div className="icon-fix" />
                </div>
            </div>
            <button
                className="btn btn-warning w-100"
                type="button"
                onClick={() => router.push("/")}
            >
                Go Home!!
            </button>
        </div>
    );
};

export default NotVerified;
