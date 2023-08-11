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
import { cartContext } from "../../App";
function Header() {
  const [search, setSearch] = useState('');
  const [active, setActive] = useState('home');
  const importedCart = useContext(cartContext);
  const navigate = useNavigate();
  function searchEnter(e)
  {
    if (e.key === 'Enter')
    {
      goSearch();
    }
  }
  function goSearch()
  {
    if (search.trim().length != 0)
    {
      getActive();
      navigate('/search', {state: search});
    }
  }
  function getActive()
  {
    setActive('');
  }
  function backHome()
  {
    navigate('/');
    setActive('home');
  }
  return (
    <>
      <HeaderBg/>
      <Container className="mt-1" fluid>
        <Row className={clsx("align-items-center", "border-bottom", "bottom-black", "px-5")}>
          <Col ><div style={{width: "200px", cursor: "pointer"}} className="overflow-hidden" onClick={backHome}><img src={logo} alt= "logo-website" className="w-100 h-100"/></div></Col>
          <Col className={clsx("align-items-center")} >
            <div className={clsx(style["nav-bar"], "d-flex", "justify-content-between", "align-items-center")}>
              <Link to = "/" className={clsx(style["nav-bar__item"], "text-decoration-none", active == 'home' ? style["nav-bar__item--home"] : '')} onClick={() => setActive('home')}>Home</Link>
              <Link to = "/shop" className={clsx(style["nav-bar__item"], "text-decoration-none", active == 'shopping' ? style["nav-bar__item--home"] : '')} onClick={() => setActive('shopping')}>Shopping</Link>
              <Link to = "/contact" className={clsx(style["nav-bar__item"], "text-decoration-none", active == 'contact' ? style["nav-bar__item--home"] : '')} onClick={() => setActive('contact')}>Contact Us</Link>
              <Link to = "/feedback" className={clsx(style["nav-bar__item"], "text-decoration-none", active == 'feedback' ? style["nav-bar__item--home"] : '')} onClick={() => setActive('feedback')}>Feedback</Link>
              
            </div>
          </Col>
          <Col className={clsx("align-items-center", "d-flex", "justify-content-end")} >
            <div className={clsx(style["nav-bar"], "d-flex", "justify-content-between", "align-items-center")}>
              
              <div className={clsx(style["nav-bar__item"],style["icon"], "mx-3", "text-decoration-none", "position-relative")}>
                <div className={clsx(style["input-search-box"], style["open"])}>
                  
                  <input placeholder="Search..." aria-label="Search" aria-describedby="search" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => searchEnter(e)}/>
                  <div className={clsx(style["search"])} onClick={goSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className={clsx(style["icon"])}/>
                  </div>
                </div>
              </div>
              <div className={clsx(style["nav-bar__item"],style["icon"], style["shopping-cart-icon"], "ms-3", "position-relative", "z-3")} onClick={getActive}>
                <Link  to = "/shopping-cart" className="text-decoration-none text-black"><FontAwesomeIcon icon={faBagShopping} size="lg" className="p-2"/></Link>
                <div className={clsx(style["badge"], "position-absolute", "rounded-circle", "d-flex", "justify-content-center", "align-items-center")}>{importedCart.cart.length}</div>
                <div  className={clsx(style["shopping-cart"])}>
                  <ShoppingCart></ShoppingCart>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Header;
