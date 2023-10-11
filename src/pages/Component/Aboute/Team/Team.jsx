import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./team.css";
import dataTeam from "./dataTeam";
const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="team">
        <div>
          {" "}
          <h3>Our Team</h3>
          <p>There are many variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="row containerteam">
          {dataTeam.map((item) => {
            const { id, img, alt, name, text } = item;
            return (
              <div
                className="col-12 col-md-6 col-lg-3"
                key={id}
                data-aos="fade-down"
              >
                <img src={img} alt={alt} />
                <p>{name}</p>
                <span>{text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
