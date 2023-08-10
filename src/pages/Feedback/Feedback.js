import clsx from "clsx";
import style from "./Feedback.module.scss";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import MyButton from "../../components/MyButton/MyButton";
function Feedback() {
  return (
    <Container className={clsx("d-flex justify-content-center w-50 border my-5 text-white", style["feedback"])}>
      <Stack className={clsx("p-5",style["feedback__body"])}>
        <h1>Customer Satisfaction Survey</h1>
        <Row className="mt-5">
          <Col>
            <h3>Name (Optional)</h3>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="First Name"
                    aria-label="First Name"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Last Name"
                    aria-label="Last Name"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Col>
          <Col>
            <h3>Email (Optional)</h3>
        <InputGroup className="mb-3">
            <Form.Control
              placeholder="Email@gmail.com"
              aria-label="Email"
              aria-describedby="basic-addon3"
            />
          </InputGroup>
          </Col>
        </Row>
        <Stack className="mt-3">
          <h3>How would you rate your overall experience on our plant website?</h3>
           <div key={`inline-radio-q1`} className="mb-3 mt-1">
            {["Very Good","Good","Fair", "Poor"].map((item) => 
              <Form.Check
              inline
              label={item}
              name="group-q1"
              type="radio"
              id={`inline-radio-q1-${item}`}
              />
            )}
        </div>
        </Stack>
        <Stack className="mt-3">
          <h3>How satisfied are you with the quality of the plants you purchased?</h3>
           <div key={`inline-radio-q2`} className="mb-3 mt-1">
            {["Extremely satisfied","Satisfied","Satisfied", "Unsatisfied", "Extremely unsatisfied"].map((item) => 
              <Form.Check
              inline
              label={item}
              name="group-q2"
              type="radio"
              id={`inline-radio-q2-${item}`}
              />
            )}
        </div>
        </Stack>
        <Stack className="mt-3">
          <h3>Was the delivery of your plants prompt and in good condition?</h3>
           <div key={`inline-radio-q3`} className="mb-3 mt-1">
            {["Yes, absolutely", "Mostly yes", "Neutral", "Somewhat no", "No, not at all"].map((item) => 
              <Form.Check
              inline
              label={item}
              name="group-q3"
              type="radio"
              id={`inline-radio-q3-${item}`}
              />
            )}
        </div>
        </Stack>
        <Stack className="mt-3">
          <h3>Do you have any suggestions for us that we can/should improve?</h3>
          <FloatingLabel controlId="floatingTextarea2" label="Messages">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '200px' }}
            className="mt-1"
          />
        </FloatingLabel>
        </Stack>
        <div className="mt-5">
        </div>
          <MyButton size="lg" msg = "SUBMIT" />
      </Stack>
    </Container>
  );
}

export default Feedback
