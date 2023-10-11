import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./sportshoes.css";

const SportShoes = () => {
  useEffect(() => {
    AOS.init({
      duration: 1100,
    });
  }, []);

  return (
    <>
      <div className="container-fluid sportshoes ">
        <div className="row">
          <div className="col-12 col-lg-6">
            <figure data-aos="zoom-in">
              <img
                src="/images/0-2.webp"
                alt=""
              />
            </figure>
          </div>

          <div className="col-12 col-lg-6">
            <figure data-aos="zoom-in">
              <img
                src="/images/0-0.webp"
                alt=""
              />
            </figure>
            <h2>Sports Shoes</h2>
            <p>UP TO 30% OFF ALL SHOES and PRODUCTS</p>
            <Link className="linkbtnred" to="/product">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportShoes;
