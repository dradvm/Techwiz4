import clsx from "clsx";
import style from "./ContactUs.module.scss";
import { Col, Container, Row, Button, Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import spImg from "@images/contact-us-support-img.png"
import { useRef, useState } from "react";
function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  let nameRef = useRef(null);
  let emailRef = useRef(null);
  let msgRef = useRef(null);
  function nameEnter(e) 
  {
    if (e.key === 'Enter')
    {
      emailRef.current.focus();
    }
  }
  function emailEnter(e) 
  {
    if (e.key === 'Enter')
    {
      msgRef.current.focus();
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
    if (name.trim().length === 0)
    {
      alert('Pleas type your name');
      nameRef.current.focus();
      return;
    }
    let regEx = /^[a-zA-Z]+[0-9a-zA-Z]*@[a-zA-Z0-9]+.[a-zA-Z]+$/;
    if (!regEx.test(email))
    {
      alert('Pleas type your email');
      emailRef.current.focus();
      return;
    }
    if (msg.trim().length === 0)
    {
      alert('Pleas type your message');
      msgRef.current.focus();
      return;
    }
    let res =
    {
      name: name,
      email: email,
      msg: msg
    };
    let current = (JSON.parse(localStorage.getItem('msg')) || []);
    current.push(res);
    localStorage.setItem('msg', JSON.stringify(current));
    setName('');
    setEmail('');
    setMsg('');
  }
  return (
    <Container className={clsx("my-5", "py-5", "w-75", style["contact-us"])}>
      <Row>
        <Col className={clsx("d-flex", "flex-column", "justify-content-between")}>
          <h3>Contact us</h3>
          <div className={clsx(style["bar"], "mt-1")}></div>
          <Form className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Full Name" ref={nameRef} value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => nameEnter(e)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Control type="email" placeholder="Name@example.com" ref={emailRef} value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => emailEnter(e)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={5} placeholder="Message" ref={msgRef} value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={(e) => msgEnter(e)}/>
            </Form.Group>
            <Button variant="success" className="w-100" onClick={submit}>Submit</Button>
          </Form>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <img src={spImg} alt="support-img" className="w-75" />
        </Col>
      </Row>
      <div className="mt-5">
        <iframe title = "Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.9931044659634!2d105.7782761149011!3d10.033531573583208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0881f9a732075%3A0xfa43fbeb2b00ca73!2sCUSC%20-%20Cantho%20University%20Software%20Center!5e0!3m2!1sen!2s!4v1691591101282!5m2!1sen!2s" width="100%" height="400px" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="position-relative">

        </iframe>
      </div>
      <Row className="align-items-center mt-5">
        <Col className="d-flex justify-content-around">
          <Stack direction="horizontal" gap={3}>
            <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: "3.4rem", color: "#198754" }} />
            <Stack className="justify-content-around">
              <h6 className="mb-0">Location:</h6>
              <span>1 Ly Tu Trong, Ninh Kieu, Can Tho</span>
            </Stack>
          </Stack>
        </Col>
        <Col className="d-flex justify-content-around">
          <Stack direction="horizontal" gap={3}>
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "3.4rem", color: "#198754" }} />
            <Stack className="justify-content-around">
              <h6 className="mb-0">Email:</h6>
              <span>PlantPlace@gmail.com</span>
            </Stack>
          </Stack>
        </Col>
        <Col className="d-flex justify-content-around">
          <Stack direction="horizontal" gap={3}>
            <FontAwesomeIcon icon={faPhoneVolume} style={{ fontSize: "3.4rem", color: "#198754" }} />
            <Stack className="justify-content-around">
              <h6 className="mb-0">Phone:</h6>
              <span>+84 987 555 276</span>
            </Stack>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs
