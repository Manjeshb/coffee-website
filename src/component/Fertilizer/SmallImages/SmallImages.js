import React from "react";
import { useState } from "react";
import style from "./style.module.css";
import data from "./data";
const SmallCard = () => {
  const [cards] = useState(data);

  return (
    <div>
      <section>
        <div className={style.container}>
          <h1>Here is some fertilizers with images and it's description.</h1>
          <div className={style.cards}>
            {cards.map((card, i) => (
              <div className={style.card}>
                <div className={style.imageContainer}>
                  <img src={card.url} alt="" />
                </div>
                <div className={style.text}>
                    <h3>{card.name}</h3>
                    <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallCard;
