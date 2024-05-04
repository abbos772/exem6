import React from "react";
import "./Stay_home.css";
import ban from "../../img/ban.png";
function Stay_home() {
  return (
    <div className="stay">
      <div className="stay_text">
        <h1>
          Stay home & get your daily <br /> needs from our shop
        </h1>
        <p>
          Start You'r Daily Shopping with{" "}
          <b style={{ color: "green" }}>Nest Mart</b>{" "}
        </p>
        <div className="search">
          <p className="pp"> Your emaill address</p>
          <button className="btn_ser">Subscribe</button>
        </div>
      </div>
      <div className="stay_img">
        <img className="ban" src={ban} alt="" />
      </div>
    </div>
  );
}

export default Stay_home;
