import React from "react";
import { UseGlobalcontext } from "../../../../context";
import "./filter.css";

const Filter = () => {
  const { item, brand, sortProducts, filterProducts } = UseGlobalcontext();

  return (
    <>
      <div className="parentfilter">
        <div className="row filter">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="numberproduct">
              Number of products :<span>{item.length}</span>{" "}
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4  sort">
            <span>sort by : </span>
            <div>
              <input
                type="radio"
                value="new"
                name="radiofilter"
                id="sorta"
                onChange={sortProducts}
              />
              <label htmlFor="sorta">new </label>
            </div>
            <div>
              <input
                type="radio"
                value="old"
                name="radiofilter"
                id="sortb"
                onChange={sortProducts}
              />
              <label htmlFor="sortb"> old </label>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4 brand">
            <span>brand : </span>
            <select name="" id="" value={brand} onChange={filterProducts}>
              <option value="">all</option>
              <option value="rexpo">rexpo</option>
              <option value="quickiin">quickiin </option>
              <option value="nike">nike</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
