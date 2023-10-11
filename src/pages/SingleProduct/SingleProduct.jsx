import ReactImageMagnify from "react-image-magnify";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UseGlobalcontext } from "../../context";
import { products } from "../../data";
import "./singleproduct.css";

const SingleProduct = () => {
  const { addShowCart } = UseGlobalcontext();
  const { productId } = useParams();
  const product = products.find((element) => element.id === productId);
  const mot = products.filter((item) => item.type === product.type);
  const motFilter = mot.filter((item) => item.id !== productId);
  console.log(mot);
  console.log(motFilter);
  const { img, alt, text, price } = product;
  const [src, setSrc] = useState(img);
  return (
    <>
      <div className="headerpage">
        <img
          src="https://htmldemo.net/shome/shome/assets/img/photos/bg3.webp"
          alt="productpage"
        />
        <h3 className="headerpagetitle">PRODUCT DETAILS</h3>
      </div>

      <div className="singleproduct">
        <div className="row ">
          <div className="col-12 col-md-6">
            <figure className="image-container">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: src,
                  },
                  largeImage: {
                    src: src,
                    width: 1500,
                    height: 2000,
                  },
                }}
              />
            </figure>
            <div className="row thumb">
              <img
                src={product.thubm.thubm1}
                className="col-12 col-md-6 col-lg-3"
                onClick={() => setSrc(product.thubm.thubm1)}
              />
              <img
                src={product.thubm.thubm2}
                className="col-12 col-md-6 col-lg-3"
                onClick={() => setSrc(product.thubm.thubm2)}
              />
              <img
                src={product.thubm.thumb3}
                className="col-12 col-md-6 col-lg-3"
                onClick={() => setSrc(product.thubm.thumb3)}
              />
              <img
                src={product.thubm.thubm4}
                className="col-12 col-md-6 col-lg-3"
                onClick={() => setSrc(product.thubm.thubm4)}
              />
            </div>
          </div>

          <div className="col-12 col-md-6 parentcaptionproduct">
            <h2 className="titlepoduct">{text}</h2>
            <p className="priceproduct">
              {price}
              <span>$</span>
            </p>

            <p className="captionproduct">
              Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do
              eiusmll tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad mill veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip exet commodo consequat. Duis aute irure dolor
              Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do
              eiusmll tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad mill veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip exet commodo consequat. Duis aute irure dolor
            </p>
            <button
              className="linkbtnred addcart"
              onClick={() => addShowCart(product)}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>

      <h3 className="title">Related products</h3>
      <div className="parent-relative">
        <div className="row relative">
          {motFilter.slice(0, 4).map((item) => {
            return (
              <div key={item.id} className="col-12 col-md-6 col-lg-3">
                <img src={item.img} className="featureimage" />

                <p className="textralatedproduct">{item.text}</p>
                <p>{item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
