import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./smartlife.css";
const SmartLife = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="container smartlife">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img
              src="/images/30.webp"
              alt=""
              data-aos="fade-right"
            />
          </div>
          <div className="col-12 col-lg-6 life" data-aos="fade-left">
            <span>Smart Life</span>
            <h2>With Smart Shoes</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmol tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minivel quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidata non proident,
              sunt in culpa qui officia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartLife;
