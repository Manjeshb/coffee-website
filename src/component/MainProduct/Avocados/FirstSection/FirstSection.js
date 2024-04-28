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
        <h1>From Tree to Table</h1>
        <p>Dive into the creamy, nutritious world of avocado cultivation. Understand the conditions necessary for growing this superfood and the steps taken to ensure each fruit is perfectly ripened. We'll share insights into the benefits of avocados, from heart health to their versatile use in culinary delights.</p>
        <button className={style.contactButton} onClick={clickHandler}>Contact sales</button>
      </div>
    </div>
  );
}

export default ImageSlider;
