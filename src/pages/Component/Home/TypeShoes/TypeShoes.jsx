import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "./typeshoes.css";
import dateTypeShoes from "./dataTypeShoes";

const TypeShoes = () => {
 

  return (
    <>
      <div className="container-fliud  typeshoes">
        <dir className="row">
          {dateTypeShoes.map((item) => {
            const { id, img, alt, title, price } = item;
            return (
              <Link
                to="/product"
                className="col-12 col-md-6 col-lg-4 parent"
                key={id}
               
              >
                <img src={img} alt={alt} />
                <div className="title">
                  <h2>{title}</h2>
                  <p>
                    from <span>{price}</span>
                    <span>$</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </dir>
      </div>
    </>
  );
};

export default TypeShoes;
