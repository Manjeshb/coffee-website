import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

const ContactSales = () => {
  const navigate = useNavigate();


  function clickHandler(){
    navigate("/become-supplier");
  }

  return (
    <div className={style.fullContainer}>
      <div className={style.leftHalf}>
        <div className={style.leftContent}>
          <h3 className={style.areYouA}>Are you a</h3>
          <h2 className={style.withSupplier}>supplier / seller?</h2>
        </div>
      </div>
      <div className={style.rightHalf}>
        <button className={style.contactButton} onClick={clickHandler}> Become suppplier</button>
      </div>
    </div>
  );
};

export default ContactSales;