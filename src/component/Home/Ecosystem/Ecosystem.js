import React from "react";
import style from "./style.module.css";


const Ecosystem = () => {

  function supplierHandle (){
    window.open("https://chat.whatsapp.com/BWYCw8xrCpq8mwmQ3j2a3Y", "_blank");
  }

  return (
    <div className={style.fullContainer}>
      <div className={style.leftHalf}>
      <img src="https://blog.commlabindia.com/hubfs/Imported_Blog_Media/animated-gifs-corporate-training.gif" alt="Computer man" />

      </div>
      <div className={style.rightHalf}>
        <h2>Join our community </h2>
        <p>
        Showcase your products to a targeted audience of farmers eager to enhance their cultivation practices. Join our community to connect with growers actively seeking quality seeds, fertilizers, and agricultural tools.
        </p>

        <button className={style.supplierButton} onClick={supplierHandle}>
          Click For Join
        </button>
      </div>
    </div>
  );
};

export default Ecosystem;
