import { Outlet } from "react-router-dom";
import Navbar from "./Home/Navbar/Navbar";
import Footer from "./Home/Footer/Footer";
import Totop from "./Home/Totop/Totop";
import Cart from "./Product/Cart/Cart";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Outlet />
      <Totop />
      <Footer />
    </>
  );
};

export default SharedLayout;
