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
        <h1>The Journey from Bean to Brew</h1>
        <p>Discover the secrets behind cultivating the perfect coffee bean. From selecting the right soil and climate to the meticulous care during harvest, we cover it all. Follow the bean on its journey from the lush fields where it's grown, through the precise process of roasting, grinding, and finally brewing into the perfect cup of coffee that energizes and delights.</p>
        <button className={style.contactButton} onClick={clickHandler}>Contact sales</button>
      </div>
    </div>
  );
}

export default ImageSlider;
