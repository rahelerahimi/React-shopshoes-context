import React from "react";
import { Slider, TypeShoes, Featured, Offer, SportShoes } from "./Component";
const Home = () => {
  return (
    <>
      <main>
        <Slider />
        <TypeShoes />
        <Featured />
        <Offer />
        <SportShoes />
      </main>
    </>
  );
};

export default Home;
