import React from "react";
import "./dashboardcontent3.css";
import {
  BsFillPatchCheckFill,
  BsFillPatchExclamationFill,
} from "react-icons/bs";

const DashboardContent3 = () => {
  return (
    <div className="dashboardcontent dashboardcontent3">
      <div>
        Order delivered <BsFillPatchCheckFill />
        <p>0 orders</p>
      </div>
      <div>
        Order returned <BsFillPatchExclamationFill />
        <p>0 orders</p>
      </div>
    </div>
  );
};

export default DashboardContent3;
