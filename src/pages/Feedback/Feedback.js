import clsx from "clsx";
import style from "./Feedback.module.scss";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import MyButton from "../../components/MyButton/MyButton";
import { useRef, useState } from "react";
function Feedback() {
  let fNameRef = useRef(null);
  let lNameRef = useRef(null);
  let emailRef = useRef(null);
  let msgRef = useRef(null);
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [exp, setExp] = useState(0);
  const [quality, setQuality] = useState(0);
  const [delivery, setDelivey] = useState(0);
  const [msg, setMsg] = useState('');
  function fNameEnter(e)
  {
    if (e.key === 'Enter')
    {
      lNameRef.current.focus();
    }
  }
  function lNameEnter(e)
  {
    if (e.key === 'Enter')
    {
      emailRef.current.focus();
    }
  }
  function msgEnter(e)
  {
    if (e.key === 'Enter')
    {
      submit();
    }
  }
  function submit()
  {
    if (exp === 0 || quality === 0 || delivery === 0)
    {
      alert('Please let us know more about your experience.');
      return;
    }
    let temp =
    {
      fName: fName,
      lName: lName,
      email: email,
      exp: exp,
      quality: quality,
      delivery: delivery,
      msg: msg
    }
    let feedbacks = (JSON.parse(localStorage.getItem('feedbacks')) || []);
    feedbacks.push(temp);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    setFName('');
    setLName('');
    setEmail('');
    setMsg('');
  }
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
                    ref={fNameRef}
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                    onKeyDown={(e) => fNameEnter(e)}
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Last Name"
                    aria-label="Last Name"
                    aria-describedby="basic-addon2"
                    ref={lNameRef}
                    value={lName}
                    onChange={(e) => setLName(e.target.value)}
                    onKeyDown={(e) => lNameEnter(e)}
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
              ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          </Col>
        </Row>
        <Stack className="mt-3">
          <h3>How would you rate your overall experience on our plant website?</h3>
           <div key={`inline-radio-q1`} className="mb-3 mt-1">
            {["Very Good","Good","Fair", "Poor"].map((item, index) => 
              <Form.Check
              inline
              label={item}
              name="group-q1"
              type="radio"
              id={`inline-radio-q1-${item}`}
              onClick={() => setExp(index + 1)}
              />
            )}
        </div>
        </Stack>
        <Stack className="mt-3">
          <h3>How satisfied are you with the quality of the plants you purchased?</h3>
           <div key={`inline-radio-q2`} className="mb-3 mt-1">
            {["Extremely satisfied","Satisfied","Satisfied", "Unsatisfied", "Extremely unsatisfied"].map((item, index) => 
              <Form.Check
              inline
              label={item}
              name="group-q2"
              type="radio"
              id={`inline-radio-q2-${item}`}
              onClick={() => setQuality(index + 1)}
              />
            )}
        </div>
        </Stack>
        <Stack className="mt-3">
          <h3>Was the delivery of your plants prompt and in good condition?</h3>
           <div key={`inline-radio-q3`} className="mb-3 mt-1">
            {["Yes, absolutely", "Mostly yes", "Neutral", "Somewhat no", "No, not at all"].map((item, index) => 
              <Form.Check
              inline
              label={item}
              name="group-q3"
              type="radio"
              id={`inline-radio-q3-${item}`}
              onClick={() => setDelivey(index + 1)}
              />
            )}
        </div>
        </Stack>
        <Stack className="mt-3">
          <h3>Do you have any suggestions for us that we can/should improve? (Optional)</h3>
          <FloatingLabel controlId="floatingTextarea2" label="Messages">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '200px' }}
            className="mt-1"
            ref={msgRef}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e) => msgEnter(e)}
          />
        </FloatingLabel>
        </Stack>
        <div className="mt-5">
        </div>
          <MyButton size="lg" msg = "SUBMIT" onClick={submit}/>
      </Stack>
    </Container>
  );
}

export default Feedback
