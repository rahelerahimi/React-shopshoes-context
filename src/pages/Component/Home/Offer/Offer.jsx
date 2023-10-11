import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./offer.css";
const Offer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1100,
    });
  }, []);

  return (
    <>
      <div className="container-fluid  offer">
        <div>
          <span data-aos="fade-up">Saving 50%</span>
          <h2 data-aos="flip-up">All Online Store</h2>
          <p>OFFER AVAILABLE ALL SHOES and PRODUCTS</p>
          <Link className="linkbtnred" to="/product" data-aos="fade-down">
            Shop Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Offer;
