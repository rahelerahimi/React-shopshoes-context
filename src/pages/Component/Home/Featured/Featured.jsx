import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./featured.css";
import dataFeatured from "./dataFeatured";
const Featured = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="container-fluid featured ">
        <h2>Featured Items</h2>
        <p>There are many variations of passages of Lorem Ipsum available</p>

        <div>
          <div className="row">
            {dataFeatured.map((item) => {
              const { id, img, alt, text, price } = item;
              return (
                <div
                  className="col-12 col-md-6 col-lg-4  featureitem"
                  key={id}
                  data-aos="zoom-in"
                >
                  <Link to={`/product/${item.id}`}>
                    <img src={img} alt={alt} className="featureimage" />
                  </Link>
                  <div>
                    <Link to={`/product/${item.id}`}>
                      <h3>{text}</h3>
                    </Link>
                    <span>{price}</span>
                    <span>$</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
