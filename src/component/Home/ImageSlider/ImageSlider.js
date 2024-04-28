import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import data from "./data";

function ImageSlider() {
  const navigate=useNavigate();

  function clickHandle(){
    navigate("/contactSales");
  }

  return (
    <div className={style.fullContainer}>
      <div className={style.slideContainer}>
        <Slide>
          {data.map((image, index) => (
            <div key={index} className={style.imageBlock}>
              <div className={style.imageStyle} style={{ backgroundImage: `url(${image.url})` }}>
                <span className={style.spanStyle}>{image.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className={style.rightOfSlider}>
        <h1>Empowering Farmers, Cultivating Futures</h1>
        <p>Discover a world where coffee, pepper, and avocado growers thrive. Access best practices, resources, and markets to transform your cultivation journey.</p>
        {/* <p className={style.spacedPara}>-Shape of contact sales button</p>
        <p className={style.spacedPara}>-Modify the design to increase length of the section</p> */}
        <button className={style.contactButton} onClick={clickHandle}>Contact sales</button>
      </div>
    </div>
  );
}

export default ImageSlider;


