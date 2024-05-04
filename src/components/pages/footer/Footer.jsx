import React from "react";
import { Link } from "react-router-dom";
import "../footer/Footer.css";
import log from "../../img/log.png";
import logo from "../../img/Logo.png";
import hand from "../../img/hand.png";
import teleg from "../../img/teleg.png";
import time from "../../img/time.png";
import store from "../../img/store.png";
import play from "../../img/play.png";
import vica from "../../img/vica.png";
import Group16 from "../../img/Group16.png";
import footer2 from "../../img/Footer2.png";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="foot">
          <Link to={"/"}>
            <img src={logo} width={215} alt="" />
          </Link>
          <h3>
            Awesome grocery store website <br />
            template
          </h3>
          <div className="loc">
            <img src={log} alt="" />
            <p>Address: 5171 W Campbell Ave</p>
          </div>
          <p>undefined Kent, Utah 53127 United States</p>
          <div className="loc">
            <img src={hand} alt="" />
            <p>Call Us:(+91) - 540-025-124553</p>
          </div>
          <div className="loc">
            <img src={teleg} alt="" />
            <p>Email:sale@Nest.com</p>
          </div>
          <div className="loc">
            <img src={time} alt="" />
            <p>Hours:10:00 - 18:00, Mon - Sat</p>
          </div>
        </div>
        <div className="foot">
          <h2>Company</h2>
          <p>About Us</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Contact Us</p>
          <p>Support Center</p>
          <p>Careers</p>
        </div>
        <div className="foot">
          <h2>Account</h2>
          <Link to={"/login"}>
            <p>Sign In</p>
          </Link>
          <p>View Cart</p>
          <p>My Wishlist</p>
          <p>Track My Order</p>
          <p>Help Ticket</p>
          <p>Shipping Details</p>
          <p>Compare products</p>
        </div>
        <div className="foot">
          <h2>Corporate</h2>
          <p>Become a Vendor</p>
          <p>Affiliate Program</p>
          <p>Farm Business</p>
          <p>Farm Careers</p>
          <p>Our Suppliers</p>
          <p>Accessibility</p>
          <p>Promotions</p>
        </div>
        <div className="foot">
          <h2>Popular</h2>
          <p>Milk & Flavoured Milk</p>
          <p>Butter and Margarine</p>
          <p>Eggs Substitutes</p>
          <p>Marmalades</p>
          <p>Sour Cream and Dips</p>
          <p>Tea & Kombucha</p>
          <p>Cheese</p>
        </div>
        <div className="foot">
          <h2>Install App</h2>
          <p>From App Store or Google Play</p>
          <div className="play">
            <img src={store} alt="" />
            <img src={play} alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src={vica} alt="" />
        </div>
      </div>
      <hr className="hr" />
      <div className="finish">
        <p>
          © 2022, <b style={{ color: "green" }}>Nest</b> - HTML Ecommerce
          Template <br /> All rights reserved
        </p>
        <div className="phone">
          <div className="p_img">
            <img src={Group16} alt="" />
            <div className="p_text">
              <h3>1900 - 6666</h3>
              <p>Working 8:00 - 22:00</p>
            </div>
          </div>
          <div className="phone">
            <div className="p_img">
              <img src={Group16} alt="" />
              <div className="p_text">
                <h3>1900 - 6666</h3>
                <p>Working 8:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
        <img src={footer2} alt="" />
      </div>
    </div>
  );
}

export default Footer;
