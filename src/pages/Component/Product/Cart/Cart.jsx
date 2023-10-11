import React from "react";
import Fade from "react-reveal/Fade";
import { UseGlobalcontext } from "../../../../context";
import { BsXLg } from "react-icons/bs";
import { FaPlus, FaRegWindowMinimize } from "react-icons/fa";

import "./cart.css";

const Cart = () => {
  const {
    cartData,
    addProducts,
    removeProduct,
    totalProduct,
    showCart,
    closeCart,
    closeProductContent,
  } = UseGlobalcontext();

  return (
    <>
      <div
        onClick={closeCart}
        className={showCart ? "backgroundcart" : ""}
      ></div>
      <div className={showCart ? "cart" : "cart hidecart"}>
        <div className="titlecard">
          <span>basket</span>
          <span onClick={closeCart}>
            <BsXLg />
          </span>
        </div>

        {cartData.length === 0 ? (
          <div className="emptycart">cart is emptty</div>
        ) : (
          <div className="showcart">
            you have {cartData.length} product in basket
          </div>
        )}

        {cartData.map((item) => {
          const { id, img, text, alt, price, count } = item;
          return (
            <Fade right key={id}>
              <div className="contentcart">
                <div>
                  <span onClick={() => closeProductContent(item)}>
                    <BsXLg />
                  </span>
                  <div className="price">
                    <span> {price}</span>
                    <span>$</span>{" "}
                  </div>
                  <div className="count">
                    <button onClick={() => removeProduct(item)}>
                      <FaRegWindowMinimize style={{ marginTop: "-7px" }} />{" "}
                    </button>
                    <span>{count} </span>
                    <button onClick={() => addProducts(item)}>
                      <FaPlus />{" "}
                    </button>
                  </div>
                </div>
                <div className="productcart">
                  <img src={img} alt={alt} />
                  <span>{text}</span>
                </div>
              </div>
            </Fade>
          );
        })}
        <div className="total">
          <span>total :</span>
          <span>{totalProduct}$</span>
        </div>

        <button className="checkout">checkout</button>
      </div>
    </>
  );
};

export default Cart;
