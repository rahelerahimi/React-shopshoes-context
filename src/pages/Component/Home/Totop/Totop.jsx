import React, { useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import { UseGlobalcontext } from "../../../../context";
import "./totop.css";

const Totop = () => {
  const { showBtn, setShowBtn, Totop } = UseGlobalcontext();
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 400) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <>
      <div onClick={Totop} className={showBtn ? "totop showtotop " : "totop"}>
        <FaChevronUp />
      </div>
    </>
  );
};

export default Totop;
