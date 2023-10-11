import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsXLg, BsCart3, BsJustify } from "react-icons/bs";
import { UseGlobalcontext } from "../../../../context";
import "./navbar.css";

const Navbar = () => {
  const { showSidebar, openSidebar, closeSidebar, openCart, cartData } =
    UseGlobalcontext();

  return (
    <>
      <nav className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-6 logo">
            <Link to="/">
              <img
                src="/images/logo.webp"
                alt="logo"
              />
            </Link>
          </div>
          <div
            className="col-md-8   link"
            id={showSidebar ? " shownavbar" : "hidenavbar"}
          >
            <div onClick={closeSidebar}>
              <BsXLg size={17} />
            </div>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active " : "")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/product"
                >
                  product
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active " : "")}
                  to="/aboute"
                >
                  aboute
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active " : "")}
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-md-2 col-6    basket">
            {cartData.length > 0 ? (
              <span className="counter">{cartData.length}</span>
            ) : (
              ""
            )}

            <div onClick={openCart}>
              <BsCart3 size={25} />
            </div>
            <div onClick={openSidebar}>
              <BsJustify size={25} />
              <div />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
