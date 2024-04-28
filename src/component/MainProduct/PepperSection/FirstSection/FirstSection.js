import React from "react";
import 'react-slideshow-image/dist/styles.css';
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

function ImageSlider() {
  const navigate=useNavigate();

  function clickHandler(){
    navigate("/contactSales");
  }
  return (
    <div className={style.fullContainer}>
      <div className={style.FirstContainer}>
        <img src="https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_640.jpg" alt="/" />
      </div>
      <div className={style.rightContainer}>
        <h1>A Spicy Tale of Cultivation</h1>
        <p>Step into the world of black pepper, where every peppercorn tells a story of tradition, flavor, and heat. Learn about the traditional and modern methods of cultivation that make black pepper the "King of Spices." Explore how this spice travels from the vine to your dining table, adding a burst of flavor to dishes around the world.</p>
        <button className={style.contactButton} onClick={clickHandler}>Contact sales</button>
      </div>
    </div>
  );
}

export default ImageSlider;
