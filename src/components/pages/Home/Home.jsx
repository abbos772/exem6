import React, { useEffect, useState } from "react";
import "./Home.css";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import loading from "../../skeleton/Skeleton";
import "swiper/css/navigation";
import ceratine from "../../img/creatine.jpg";
import mass from "../../img/mass.jpg";
import pro from "../../img/pro.jpg";
import food1 from "../../img/food1.png";
import food2 from "../../img/food2.png";
import food3 from "../../img/food3.png";
import food4 from "../../img/food4.png";
import food5 from "../../img/food5.png";
import food6 from "../../img/food6.png";
import food7 from "../../img/food11.png";
import food8 from "../../img/food8.png";
import food9 from "../../img/food9.png";
import food10 from "../../img/food10.png";
import axios from "../../api";
import Product from "../Product/Product";
import skidka from "../../img/skidka.png";
import price from "../../img/price.png";
import doc from "../../img/doc.png";
import wide from "../../img/wide.png";
import box from "../../img/box.png";
import Stay_home from "../stay_home/Stay_home";
import Footer from "../footer/Footer";
function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="continer">
        <div className="home-page">
          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="hero">
                <div className="hero_text">
                  <h1>
                    Fresh <br /> Vegetables <br /> Big discount
                  </h1>
                  <p>Save up to 50% off on your first order</p>
                  <div className="search">
                    <p className="pp"> Your emaill address</p>
                    <button className="btn_ser">Subscribe</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img className="" src={ceratine} width={600} alt="" />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={mass} alt="" width={600} />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={pro} width={600} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <section className="">
          <div className="products__text">
            <div className="big__text">
              <h3>Featured Categories</h3>
            </div>

            <div className="items">
              <p>Cake & Milk</p>
              <p>Coffes&Teas</p>
              <p>Pet Foods</p>
              <p>Vegetables</p>
            </div>
          </div>

          <div className="cards">
            <div className="card">
              <img src={food1} alt="" />
              <h6>Cake & Milk</h6>
              <p>26 items</p>
            </div>

            <div className="card" id="card1">
              <img src={food2} alt="" />
              <h6>Oganic Kiwi</h6>
              <p>28 items</p>
            </div>

            <div className="card" id="card2">
              <img src={food3} alt="" />
              <h6>Peach</h6>
              <p>14 items</p>
            </div>

            <div className="card" id="card3">
              <img src={food4} alt="" />
              <h6>Red Apple</h6>
              <p>54 items</p>
            </div>

            <div className="card" id="card4">
              <img src={food5} alt="" />
              <h6>Snack</h6>
              <p>56 items</p>
            </div>

            <div className="card" id="card5">
              <img src={food6} alt="" />
              <h6>Vegetables</h6>
              <p>72 items</p>
            </div>

            <div className="card" id="card6">
              <img src={food7} alt="" />
              <h6>Strawberry</h6>
              <p>32 items</p>
            </div>

            <div className="card" id="card7">
              <img src={food8} alt="" />
              <h6>Black plum</h6>
              <p>123 items</p>
            </div>

            <div className="card" id="card8">
              <img src={food9} alt="" />
              <h6>Custard apple</h6>
              <p>34 items</p>
            </div>

            <div className="card" id="card9">
              <img src={food10} alt="" />
              <h6>Coffe & Tea</h6>
              <p>89 items</p>
            </div>
          </div>
        </section>
        <div className="mini_boxes">
          <div className="mini_box">
            <div className="mini_box_text">
              <h3>
                Everyday Fresh & <br /> Clean with Our <br /> Products
              </h3>
              <button className="btn_mini">Shop Now</button>
            </div>
          </div>
          <div className="mini_boxxx">
            <div className="mini_box_text">
              <h3>
                The best <br /> Organic <br />
                Products Online
              </h3>
              <button className="btn_mini">Shop Now</button>
            </div>
          </div>
          <div className="mini_boxx">
            <div className="mini_box_text">
              <h3>
                Make your <br /> Breakfast <br />
                Healthy and Easy
              </h3>
              <button className="btn_mini">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="api_flex">
          <div className="api_text">
            <h1>Popular Products</h1>
            <div className="api_p">
              <p style={{ color: "green" }}>All</p>
              <p>Milks & Dairies</p>
              <p>Coffes & Teas</p>
              <p>Pet Foods</p>
              <p>Meats</p>
              <p>Vegetables</p>
              <p>Fruits</p>
            </div>
          </div>
          <Product loading={loading} data={data} />
        </div>
        <Stay_home />
        <div className="best_p">
          <div className="best_price">
            <img className="bst" src={skidka} alt="" />
            <div className="best_text">
              <h3>
                Best prices & <br /> offers
              </h3>
              <p>Orders $50 or more</p>
            </div>
          </div>
          <div className="best_price">
            <img className="bst" src={price} alt="" />
            <div className="best_text">
              <h3>
                Free <br /> delivery
              </h3>
              <p>24/7 amazing services</p>
            </div>
          </div>
          <div className="best_price">
            <img className="bst" src={doc} alt="" />
            <div className="best_text">
              <h3>Great daily deal</h3>
              <p>When you sign up</p>
            </div>
          </div>
          <div className="best_price">
            <img className="bst" src={wide} alt="" />
            <div className="best_text">
              <h3>
                Wide <br /> assortment
              </h3>
              <p>Mega Discounts</p>
            </div>
          </div>
          <div className="best_price">
            <img className="bst" src={box} alt="" />
            <div className="best_text">
              <h3>
                Easy <br /> returns
              </h3>
              <p>Within 30 days</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
