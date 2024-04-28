import React from 'react';
import style from "./style.module.css";

const GrowthStory = () => {
  return (
    <div className={style.fullContainer}>
      <div className={style.leftHalf}>
        {/* This is left half part we can add anything here */}
      </div>
      <div className={style.rightHalf}>
        <h1>Our Growth Story</h1>
        <div >
          <h3>2.5M+</h3>
          <p>Components</p>
        </div>
        <div>
          <h3>1000+</h3>
          <p>Clients</p>
        </div>
        <div>
          <h3>100+</h3>
          <p>Supplier</p>
        </div>
        <div>
          <h3>3</h3>
          <p>Industries</p>
        </div>
      </div>
    </div>
  )
}

export default GrowthStory;
