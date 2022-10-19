import { useRouter } from "next/router";

const SubmissionConfirmation = () => {
    const router = useRouter();
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-warning">Confirmation</h1>
            <p className="text-center">
                You need to have successfully passed KYC, AML and KYB to see
                this page
            </p>
            <div className="warning-checkmark my-5">
                <div className="check-icon">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iusto quisquam ex iure fuga nulla! Quidem neque dolor
                    commodi, corporis cupiditate, itaque repudiandaemollitia
                    debitis facere blanditiis possimus, obcaecati perferendis
                    officiis!
                </div>
            </div>
            <button
                className="btn btn-warning w-100"
                type="button"
                onClick={() => router.push("/")}
            >
                Confirm Assets Submission
            </button>
            <br />
            <button
                className="btn btn-warning w-100"
                type="button"
                onClick={() => router.push("/")}
            >
                Cancel
            </button>
        </div>
    );
};

export default SubmissionConfirmation;
