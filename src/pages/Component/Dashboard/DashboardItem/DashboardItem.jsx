import React from "react";
import { BsFillHouseDoorFill, BsGraphUp, BsHeartFill } from "react-icons/bs";
import "./dashboarditem.css";
import {Link, useLocation } from "react-router-dom";
const DashboardItem = () => {
  const { pathname } = useLocation();

  return (
    <div className=" dashboarditem">
      <div className="">
        <ul>
          <Link
            to="/dashboard"
            className={pathname === "/dashboard" ? "item" : ""}
          >
            <li>
              <span>
                <BsFillHouseDoorFill />
              </span>
              <span>home</span>
            </li>
          </Link>
          <Link
            to="/dashboard/content2"
            className={pathname === "/dashboard/content2" ? "item" : ""}
          >
            <li>
              <span>
                <BsGraphUp />
              </span>
              <span>analytics</span>
            </li>
          </Link>
          <Link
            to="/dashboard/content3"
            className={pathname === "/dashboard/content3" ? "item" : ""}
          >
            <li>
              <span>
                <BsHeartFill />
              </span>
              <span>activities</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default DashboardItem;
