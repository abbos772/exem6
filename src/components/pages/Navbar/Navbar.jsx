import React, { useState } from "react";
import "../Navbar/Navbar.css";
import Nest from "../../img/Logo.png";
import Group from "../../img/Group.png";
import Vector from "../../img/Vector.png";
import Gr from "../../img/Gr.png";
import Head from "../../img/Head.png";
import Vector24 from "../../img/Vector24.png";
import Olov from "../../img/Olov.png";
import Nav from "../../img/Nav.png";
import Hand from "../../img/Handphone.png";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { VscChevronDown } from "react-icons/vsc";
function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="nav_top">
        <div className="continer">
          <div className="nav_top_center">
            <div className="nav_top_flex">
              <p>About Us | My Account | Wishlist | Order Tracking</p>
            </div>
            <div className="nav_top_flex">
              <p>100% Secure delivery without contacting the courier</p>
            </div>
            <div className="nav_top_flex">
              <p>
                Need help? Call Us:{" "}
                <b style={{ color: "green" }}>:+ 1800 900</b> | English | USD
              </p>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="nav_medium">
          <div className="continer">
            <div className="nav_medium_flex">
              <Link to={"/"}>
                <div>
                  <img src={Nest} alt="" />
                </div>
              </Link>
              <div className="navbar__search">
                <select name="" id="all">
                  <option value="All Categories">All Categories</option>
                </select>
                <input type="text" placeholder="Search for items..." />
                <div className="lupa">
                  <CiSearch />
                </div>
              </div>
              <div className="btn_loc">
                <CiLocationOn />
                <select name="" id="btn_loc">
                  <option value=" Your Location">Your Location</option>
                </select>
              </div>
              <div className="nav_med_flex">
                <div className="nav_med">
                  <img src={Group} alt="" />
                  <p>Compare</p>
                </div>
                <div className="nav_med">
                  <img src={Vector} alt="" />
                  <p>Wishlist</p>
                </div>
                <div className="nav_med">
                  <img src={Gr} alt="" />
                  <p>Cart</p>
                </div>
                <Link className="link" to={"/login"}>
                  <div className="nav_med">
                    <img src={Head} alt="" />
                    <p>Account</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="nav_bottom">
            <div className="continer">
              <div className="nav_flex">
                <div className={`nav_bot_flex ${toggle ? "show" : " "}`}>
                  <button className="btn_browe">
                    <img src={Vector24} alt="" />
                    Browse
                    <select name="" id="cate">
                      <option value="All Categories">All Categories</option>
                    </select>
                  </button>
                  <div className="nav">
                    <img src={Olov} alt="" />
                    <h3>Deals</h3>
                  </div>
                  <div className="nav">
                    <h3>Home</h3>
                    <img src={Nav} width={10} alt="" />
                  </div>
                  <div className="nav">
                    <h3>About</h3>
                  </div>
                  <div className="nav">
                    <h3>Shop</h3>
                    <VscChevronDown />
                  </div>
                  <div className="nav">
                    <h3>Vendors </h3>
                    <VscChevronDown />
                  </div>
                  <div className="nav">
                    <h3>Mega menu </h3>
                    <VscChevronDown />
                  </div>
                  <div className="nav">
                    <h3>Blog </h3>
                    <VscChevronDown />
                  </div>
                  <div className="nav">
                    <h3>Pages </h3>
                    <VscChevronDown />
                  </div>
                  <div className="nav">
                    <h3>Contact </h3>
                  </div>
                </div>

                <div className="nav_bot_flexx">
                  <div className="phone">
                    <img src={Hand} alt="" />
                    <div className="handphone">
                      <h1>1900 - 888</h1>
                      <p>24/7 Support Center</p>
                    </div>
                  </div>
                </div>
                <button className="menu" onClick={() => setToggle(!toggle)}>
                  <CiMenuBurger />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
