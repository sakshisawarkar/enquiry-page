import React from "react";
import "./Clientsay.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utility/clientsay.json";
import { clientSettings } from "../../utility/common";

const App = () => {
    return (
        <section className="c-slider">
            <div className="ourdoc-left paddings">
          
<div className="image-container">
<div className="flexColCenter">
          <span className="primaryText">What clients have to say</span>
        </div>
  <Swiper {...clientSettings}>
    <SlidercButtons />

    {data.map((card, i) => (
      <SwiperSlide key={i}>
        
        <section className="f-wrapper paddings">
        <div className="c-card">
        <div className="c-img-card">
          <img src={card.image} alt="" />
          </div>
          <p className="secondaryText per-detail">
          {card.desc}
                  </p>
          <div className="row client_1">
              <div className="col-sm-3 col-md-3 col-lg-3 image-container">
                  <img src= {card.image_1} alt="client-img" />
                </div>
                <div className="col-sm-9 col-md-9 col-lg-9 flexColStart">
                  <span className="primaryText per-name">{card.c_name}</span>
                  <p className="secondaryText per-detail">
                  {card.c_desc}
                  </p>
                </div>
              </div>
        </div>
    </section>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
</div>
        </section>
  );
};

export default App;


const SlidercButtons = () => {
    const swiper = useSwiper();
    return (
      <div className="flexCenter c-button">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
    );
  };
  