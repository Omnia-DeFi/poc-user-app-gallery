import React from "react";
import { Col, FormGroup } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Button from "@ui/button";

function CustomerDetails() {
    return (
        <div>
            <form>
                <div className="row p-3">
                    <label htmlFor="">Your full name</label>
                    <input
                        className="border p-3 rounded"
                        type="text"
                        required
                        name="username"
                        placeholder="eg: Raj Kumar Babu"
                    />
                    <p>Ensure it matches name on your idendity documents</p>
                    <label htmlFor="">Your date of birth</label>
                    <input
                        className="border p-3 rounded"
                        type="date"
                        required
                        name="dateofbirth"
                        placeholder="DD/MM/YYYY"
                    />

                    <div className="mt-3">
                        <label className="text-color">Your gender</label>
                        <div className="row mt-3">
                            <div className="col-4">
                                <button
                                    type="button"
                                    className="bbutton col-12 border btn btn-block btn-success btn-outline-success"
                                    value="Female"
                                    // onClick={() => this.changegender("Female")}
                                >
                                    Female
                                </button>
                            </div>
                            <div className="col-4">
                                <button
                                    type="button"
                                    className="bbutton border RoundButton btn btn-block btn-outline-success"
                                    value="Male"
                                    // onClick={() => this.changegender("Male")}
                                >
                                    Male
                                </button>
                            </div>
                            <div className="col-4">
                                <button
                                    type="button"
                                    className="bbutton RoundButton border btn btn-block btn-outline-success"
                                    value="Other"
                                    // onClick={() => this.changegender("Other")}
                                >
                                    Other
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <Button size="medium" fullwidth>
                        Continue
                    </Button>
                </div>
            </form>
            {/* <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your full name</Form.Label>
                    <Form.Control
                        type="text"
                        className="border p-2"
                        placeholder="eg: Raj Kumar Babu"
                    />
                    <Form.Text className="text-muted">
                        Ensure it matches name on your idendity documents
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Your date of birth</Form.Label>
                    <Form.Control type="date"  />
                </Form.Group>
                <Button variant="primary" >
                    Submit
                </Button>
            </Form> */}
        </div>
    );
}

export default CustomerDetails;
