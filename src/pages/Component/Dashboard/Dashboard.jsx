import React from "react";
import { Route, Routes } from "react-router";
import DashboardContent1 from "./DashboardContent1/DashboardContent1";
import DashboardContent2 from "./DashboardContent2/DashboardContent2";
import DashboardContent3 from "./DashboardContent3/DashboardContent3";
import SharedDasboard from "./ShareDashboard";

const Dashboard = () => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "100px" }}>
        <Routes>
          <Route path="/" element={<SharedDasboard />}>
            <Route index element={<DashboardContent1 />} />
            <Route path="/content2" element={<DashboardContent2 />} />
            <Route path="/content3" element={<DashboardContent3 />} />
          </Route>
         
        </Routes>
      </div>
    </>
  );
};

export default Dashboard;
