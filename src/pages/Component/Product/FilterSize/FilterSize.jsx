import React from "react";
import "./filtersize.css";
import { UseGlobalcontext } from "../../../../context";
const FilterSize = () => {
  const { categories, filterSize } = UseGlobalcontext();
  return (
    <>
      <div className="filtersize">
        <div className="">
          <div>size</div>
          {categories.map((category, index) => {
            return (
              <p key={index} onClick={() => filterSize(category)}>
                {category}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FilterSize;
