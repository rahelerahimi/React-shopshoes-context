import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import { Navigate } from "react-router-dom";
import { UseGlobalcontext } from "../../context";
const ProtectedRoure = (children) => {
  const { formik } = UseGlobalcontext();

  // if(!formik.validationSchema){
  //     return <Navigate to="/" />
  // }
  return <Dashboard />;
};

export default ProtectedRoure;
