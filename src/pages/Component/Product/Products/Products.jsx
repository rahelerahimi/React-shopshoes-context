import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { UseGlobalcontext } from "../../../../context";
import Cart from "../Cart/Cart";
import FilterSize from "../FilterSize/FilterSize";
import "./products.css";

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const { item } = UseGlobalcontext();
  return (
    <>
      <div className="row  products">
        <div className="col-12 col-lg-3">
          <FilterSize />
        </div>
        <div className="col-12 col-md-9">
          <div className="row  ">
            <Cart />
            {item.map((item) => {
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
                    <Link to={`/product/${item.id}`} className="linkbtnred">
                      show{" "}
                    </Link>
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

export default Products;
