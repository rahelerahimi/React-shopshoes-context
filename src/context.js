import React, { useContext, useState } from "react";
import { Icon } from "react-icons-kit";
import { eye, lock } from "react-icons-kit/feather/eye";
import { eyeOff, heartO } from "react-icons-kit/feather/eyeOff";
import { products } from "./data";
import axios from "axios";

const Appcontext = React.createContext();

const Appprovider = ({ children }) => {
  const [showSidebar, setShowsideBar] = useState(false);
  const openSidebar = () => {
    setShowsideBar(true);
  };

  const closeSidebar = () => {
    setShowsideBar(false);
  };
  // ------------------show navbar----------------------------
  const [showBtn, setShowBtn] = useState(false);
  const Totop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  // ------------------to top------------------------

  const [item, setItem] = useState(products);
  const [sort, setSort] = useState("new");
  const [brand, setBrand] = useState("");

  const sortProducts = (event) => {
    setSort(event.target.value);
    if (sort === "new") {
      setItem(products.sort((a, b) => (a.id < b.id ? 1 : -1)));
    }
    if (sort === "old") {
      setItem(products.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  };

  const filterProducts = (event) => {
    if (event.target.value === "") {
      setBrand(event.target.value);
      setItem(products);
    } else {
      setBrand(event.target.value);
      setItem(
        products.filter(
          (product) => product.brand.indexOf(event.target.value) >= 0
        )
      );
    }
  };

  const allCategories = ["all", ...new Set(item.map((item) => item.category))];
  const [categories, setCategories] = useState(allCategories);

  const filterSize = (category) => {
    if (category === "all") {
      setItem(products);
      return;
    }
    const newItems = products.filter((item) => item.category === category);
    setItem(newItems);
  };

  // -------------------filter-&-sort-$-filtersize-----------------------

  const [cartData, setCartData] = useState([]);

  const addProducts = (product) => {
    const countProduct = cartData.find((element) => element.id === product.id);
    if (countProduct) {
      setCartData(
        cartData.map((element) =>
          element.id === product.id
            ? { ...countProduct, count: countProduct.count + 1 }
            : element
        )
      );
    } else {
      setCartData([...cartData, { ...product, count: 1 }]);
    }
  };

  const removeProduct = (product) => {
    const countProduct = cartData.find((element) => element.id === product.id);

    if (countProduct.count === 1) {
      setCartData(cartData.filter((element) => element.id !== product.id));
    } else {
      setCartData(
        cartData.map((element) =>
          element.id === product.id
            ? { ...countProduct, count: countProduct.count - 1 }
            : element
        )
      );
    }
  };

  const addShowCart = (product) => {
    setShowCart(true);
    const countProduct = cartData.find((element) => element.id === product.id);

    if (!countProduct) {
      setCartData([...cartData, { ...product, count: 1 }]);
    }
  };

  const priceProduct = cartData.reduce((a, c) => a + c.price * c.count, 0);
  const totalProduct = priceProduct;

  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };
  const closeCart = () => {
    setShowCart(false);
  };

  const closeProductContent = (product) => {
    setCartData(cartData.filter((element) => element.id !== product.id));
  };

  // -------------------card---------------------------

  const [password, setPassword] = useState("");

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const handleShowPassword = () => {
    if (type === "password") {
      setType("text");
      setIcon(eye);
    } else {
      setType("password");
      setIcon(eyeOff);
    }
  };
  // ----------------------login-----------------------//
  return (
    <>
      <Appcontext.Provider
        value={{
          item,
          sort,
          categories,
          brand,
          showSidebar,
          cartData,
          showBtn,
          totalProduct,
          showCart,
          password,
          type,
          icon,
          setPassword,
          setShowCart,
          setShowBtn,
          Totop,
          sortProducts,
          filterProducts,
          filterSize,
          addProducts,
          removeProduct,
          openSidebar,
          addShowCart,
          closeSidebar,
          openCart,
          closeCart,
          closeProductContent,
          handleShowPassword,
        }}
      >
        {children}
      </Appcontext.Provider>
    </>
  );
};

export const UseGlobalcontext = () => {
  return useContext(Appcontext);
};

export { Appcontext, Appprovider };
