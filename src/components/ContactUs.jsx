import React from "react";
import "../assets/styles/ContactUs.css";

import telp from "../assets/images/telp.png";
import email from "../assets/images/email.png";
import map from "../assets/images/map.png";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const ContactUs = () => {
  return (
    <>
      <div className="wrapper-contact">
        <div className="container">
          <div className="row text-center mt-5">
            <h2>Contact US</h2>
            <p>Reach out to us for any inquiry</p>
            <div className="col-md-6 mx-auto">
              <p>
                <img src={telp} alt="Telp" /> (024) 20192933
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <img src={email} alt="Email" className="me-1" />
                email@mail.com
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <img src={map} alt="Maps" className="maps" />
            </div>
            <div className="col-md-6">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="email" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="password" placeholder="Your Email" />
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea2" label="Comment">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
                <Button variant="primary" type="submit" className="mt-4">
                  Send
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
