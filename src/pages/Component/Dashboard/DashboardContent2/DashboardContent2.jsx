import React from "react";
import dataChart from "./data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./dashboardcontent2.css";
const DashboardContent2 = () => {
  return (
    <div className=" dashboardcontent  dashboardcontent2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={400}
          height={400}
          data={dataChart}
          margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardContent2;
