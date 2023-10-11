import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { UseGlobalcontext } from "../../context";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./login.css";
import "./style.css";

const Login = () => {
  const { type, icon, handleShowPassword } = UseGlobalcontext();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("welcome");
      navigate("/dashboard");
    },

    validationSchema: Yup.object({
      email: Yup.string().email("invalid email").required("required"),
      userName: Yup.string()
        .min(8, "least 8 characters")
        .max(15, "max 15")
        .matches(/[a-zA-Z]/)
        .required("required"),
      password: Yup.string()
        .min(8, "least 8 characters")
        .max(20, "max 20 ")
        .matches(/[a-zA-Z0-9~!@#$%^&*()_+]/, "password is not strong")
        .required("required"),
    }),
  });
  console.log(formik.values.password);

  return (
    <>
      <div className="form">
        <h2>Register</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="">Email address</label>
            <input
              type="text"
              id=""
              className="form-control"
              {...formik.getFieldProps("email")}
            />
            <span className="error">
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </span>
          </div>

          <div className="mb-3">
            <label htmlFor="">Username</label>
            <input
              type="text"
              id=""
              className="form-control"
              {...formik.getFieldProps("userName")}
            />
            <span className="error">
              {formik.touched.userName && formik.errors.userName ? (
                <div>{formik.errors.userName}</div>
              ) : null}
            </span>
          </div>

          <div className="password">
            <span className="iconpassword" onClick={handleShowPassword}>
              <Icon size={20} icon={icon} />
            </span>

            <div className="password">
              <span className="iconpassword" onClick={handleShowPassword}>
                <Icon size={20} icon={icon} />
              </span>
              <div className="mb-3">
                <label htmlFor="">password</label>
                <input
                  type={type}
                  className={`form-control ${
                    formik.touched.password && formik.errors.password && "error"
                  }`}
                  id=""
                  {...formik.getFieldProps("password")}
                />
                <span className="error">
                  {" "}
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </span>
              </div>
            </div>
          </div>

          <button type="submit">vorod</button>
        </form>
      </div>
    </>
  );
};
export default Login;
