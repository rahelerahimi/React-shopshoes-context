import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
import "./dashboardcontent1.css";

const Dashboardcontent1 = () => {
  return (
    <>
      <div className="dashboardcontent dashboardcontent1">
        <div>
          <div className="compared">
            <p>orders</p>
            <p>
              $2.41575 <BsArrowDownShort size={25} />{" "}
            </p>
            <span>compared to last month</span>
          </div>

          <div className="compared">
            <p>interests</p>
            <p>
              $2.41575 <BsArrowDownShort size={25} />{" "}
            </p>
            <span>compared to last month</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboardcontent1;
