import React from "react";
import { Outlet } from "react-router";
import DashboardItem from "./DashboardItem/DashboardItem";

const ShareDashboard = () => {
  return (
    <>
      <DashboardItem />
      <Outlet />
    </>
  );
};

export default ShareDashboard;
