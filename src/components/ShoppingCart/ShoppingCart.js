import clsx from "clsx";
import style from "./ShoppingCart.module.scss";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import MyButton from "../MyButton/MyButton";
import { useContext } from "react";
import { cartContext } from "../../App";
import { Link } from "react-router-dom";
import emptyCart from "@images/empty-cart.webp"
function ShoppingCart() {
    const importedCart = useContext(cartContext);
    let show = importedCart.cart.filter((item, index) => index < 3);
    return (
        <div className={clsx(style["shopping-cart"])}>
            <div className="px-4 py-2 border-bottom fw-light text-start">Your Cart</div>
            <div className={clsx(style["shopping-cart__body"])}>
                <div className="w-100" style={{height: "180px"}}><img src={emptyCart} alt="empty-cart" className="w-75" /></div>
                {show.map((item, index) => <ShoppingCartItem key={index} product={item}></ShoppingCartItem>)}
            </div>
            <div className="border-top d-flex w-100 justify-content-end">
                <div className="my-3 mx-auto">
                    <Link to = "/shopping-cart"><MyButton msg="View My Shopping Cart" /></Link>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart
