import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, History } from "swiper";
// import { Navigation, Pagination, History ,EffectFade} from "swiper";
import dataSlide from "./dataSlida";
import "./slider.css";
// import {FaArrowLeft } from "react-icons/fa";
//import {FaArrowRight } from "react-icons/fa";

const Slider = () => {
  /*  برای کاستومایز کردن paginationباید کلاس مربوط به خودش را تغییر داد*/
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="parent-slide">
        <Swiper
          spaceBetween={50}
          // effect={"fade"}
          slidesPerView={1}
          navigation={true}
          //برای کاستومایز navigation
          // navigation={{
          //   nextEl:".next-button",
          //   prevEl:".prev-button"

          // }}
          // pagination={true}

          onSlideChange={(cur) => setActive(cur.realIndex)}
          loop={true}
          pagination={{
            clickable: true,
          }}
          // modules={[Navigation, Pagination, History,EffectFade]}
          modules={[Navigation, Pagination, History]}
          className="mySwiper"
        >
          {dataSlide.map((item, i) => {
            const { id, title, text, img, alt, link } = item;
            return (
              <SwiperSlide key={id}>
                <div className=" row slides">
                  <div className="col-12 col-md-6 slider-text">
                    <h2 className={`${active === i && "title"}`}>{title}</h2>
                    <p className={`${active === i && "text"}`}>{text}</p>
                    <Link to="/product">{link}</Link>
                  </div>
                  <img src={img} alt={alt} className="col-12 col-md-6" />
                </div>
              </SwiperSlide>
            );
          })}
          {/* <div style={{display:'flex',justifyContent:'space-between',padding:"0 40px"}}>
  <div className="next-button "><FaArrowRight/></div>
<div className="prev-button"><FaArrowLeft/></div></div> */}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
