import clsx from "clsx";
import style from "./ShoppingCart.module.scss";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import MyButton from "../MyButton/MyButton";
function ShoppingCart() {
    return (
        <div className={clsx(style["shopping-cart"])}>
            <div className="px-4 py-2 border-bottom fw-light text-start">Your Cart</div>
            <div className={clsx(style["shopping-cart__body"])}>
                <ShoppingCartItem></ShoppingCartItem>
                <ShoppingCartItem></ShoppingCartItem>
                <ShoppingCartItem></ShoppingCartItem>
            </div>

            <div className="border-top d-flex w-100 justify-content-end">
                <div className="my-3 mx-auto">
                    <MyButton msg="View My Shopping Cart" />
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart
