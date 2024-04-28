import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import data from "./data";
const SmallCard = () => {
  const [cards] = useState(data);
  const navigate = useNavigate();

  function handleButton(url){
    navigate(url);
  }

  return (
    <div>
      <section>
        <div className={style.container}>
          <h1>List of suppliers </h1>
          <div className={style.cards}>
            {cards.map((card, i) => (
              <div className={style.card}>
                <div className={style.imageContainer}>
                  <img src={card.url} alt="" />
                </div>
                <h3>{card.caption}</h3>
                <button className={style.btn} onClick={()=>handleButton(card.redirecturl)}>Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallCard;
