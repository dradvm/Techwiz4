import style from "./Header.module.scss";
import { faBagShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import HeaderBg from "../HeaderBg/HeaderBg";
import logo from "@images/logo.webp"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useContext, useState } from "react";
import { cartContext, responsiveContext } from "../../App";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MediaQuery from "react-responsive";
function Header() {
  const [search, setSearch] = useState('');
  const [active, setActive] = useState('home');
  const importedCart = useContext(cartContext);
  const navigate = useNavigate();
  const { isDesktop } = useContext(responsiveContext)
  function searchEnter(e) {
    if (e.key === 'Enter') {
      goSearch();
    }
  }
  function goSearch() {
    if (search.trim().length != 0) {
      getActive();
      navigate('/search', { state: search });
    }
  }
  function getActive() {
    setActive('');
  }
  function backHome() {
    navigate('/');
    setActive('home');
  }
  return (
    <>
      <MediaQuery minWidth={992}>
      <Container className="pt-1 shadow-sm bg-white" fluid >
      <Row className={clsx("align-items-center", "border-bottom", "bottom-black", "px-5")}>
        <Col xs><div style={{ width: "200px", cursor: "pointer" }} className="overflow-hidden" onClick={backHome}><img src={logo} alt="logo-website" className="w-100 h-100" /></div></Col>
        <Col className={clsx("align-items-center")} >
          <div className={clsx(style["nav-bar"], "d-flex", "justify-content-between", "align-items-center")}>
            <Link to="/" className={clsx(style["nav-bar__item"], "text-decoration-none", active == 'home' ? style["nav-bar__item--home"] : '')} onClick={() => setActive('home')}>Home</Link>
            <Link to="/shop" className={clsx(style["nav-bar__item"], "text-decoration-none", active == 'shopping' ? style["nav-bar__item--home"] : '')} onClick={() => setActive('shopping')}>Shopping</Link>
            <Link to="/contact" className={clsx(style["nav-bar__item"], "text-decoration-none", active == 'contact' ? style["nav-bar__item--home"] : '')} onClick={() => setActive('contact')}>Contact Us</Link>
            <Link to="/feedback" className={clsx(style["nav-bar__item"], "text-decoration-none", active == 'feedback' ? style["nav-bar__item--home"] : '')} onClick={() => setActive('feedback')}>Feedback</Link>

          </div>
        </Col>
        <Col className={clsx("align-items-center", "d-flex", "justify-content-end")} >
          <div className={clsx(style["nav-bar"], "d-flex", "justify-content-between", "align-items-center")}>

            <div className={clsx(style["nav-bar__item"], style["icon"], "mx-3", "text-decoration-none", "position-relative")}>
              <div className={clsx(style["input-search-box"], style["open"])}>

                <input placeholder="Search..." aria-label="Search" aria-describedby="search" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => searchEnter(e)} />
                <div className={clsx(style["search"])} onClick={goSearch}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className={clsx(style["icon"])} />
                </div>
              </div>
            </div>
            <div className={clsx(style["nav-bar__item"], style["icon"], style["shopping-cart-icon"], "ms-3", "position-relative", "z-3")} onClick={getActive}>
              <Link to="/shopping-cart" className="text-decoration-none text-black"><FontAwesomeIcon icon={faBagShopping} size="lg" className="p-2" /></Link>
              <Link to="/shopping-cart" className={clsx(style["badge"], "position-absolute", "rounded-circle", "d-flex", "justify-content-center", "align-items-center", "text-decoration-none")}>{importedCart.cart.length}</Link>
              <div className={clsx(style["shopping-cart"])}>
                <ShoppingCart></ShoppingCart>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </MediaQuery>
<MediaQuery maxWidth={991}>

  <Navbar expand="lg" className="bg-white">
    <Container>
      <Navbar.Brand href="#home" className=" fw-semibold text-uppercase"><Link to="/" className="text-decoration-none text-primary-color">Plant Palace</Link></Navbar.Brand>
      <div className={clsx(style["nav-bar__item"], style["icon"], style["shopping-cart-icon"], "ms-3", "position-relative", "z-3", "mt-1")} onClick={getActive}>
        <Link to="/shopping-cart" className="text-decoration-none text-black"><FontAwesomeIcon icon={faBagShopping} size="lg" className="p-2" /></Link>
        <Link to="/shopping-cart" className={clsx(style["badge"], "position-absolute", "rounded-circle", "d-flex", "justify-content-center", "align-items-center", "text-decoration-none")}>{importedCart.cart.length}</Link>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto fw-semibold ">
          <Nav.Link><Link to="/" className="text-decoration-none text-black">Home</Link></Nav.Link>
          <Nav.Link><Link to="/shop" className="text-decoration-none text-black">Shop</Link></Nav.Link>
          <Nav.Link><Link to="/contact" className="text-decoration-none text-black">Contact Us</Link></Nav.Link>
          <Nav.Link><Link to="/feedback" className="text-decoration-none text-black">Feedback</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</MediaQuery>
    </>
  );
}
export default Header;
