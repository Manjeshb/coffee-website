import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import style from "./style.module.css";
import data from "./data";
import WhyChooseUs from "./whyChooseUS/whyChooseUs";


const Card = () => {
  const [cards] = useState(data);
  const navigate =useNavigate();

  function handleButton(url){
    navigate(url);
  }

  return (
    <div>
      <section>
        <div className={style.container}>
          <h5>Our misson</h5>
          <p> we're dedicated to advancing the success of coffee, pepper, and avocado growers. With a commitment to sustainability and innovation, we provide comprehensive resources, from cultivation best practices to market access, fostering a community where farmers flourish.</p>

          <WhyChooseUs />
          <h1>Choose where you want to redirect. </h1>
          <div className={style.cards}>
            {cards.map((card, i) => (
              <div className={style.card}>
                <div className={style.imageContainer}>
                  <img src={card.url} alt="" />
                </div>
                <h3>{card.title}</h3>
                
                <button className={style.btn} onClick={()=>handleButton(card.redirecturl)}>View More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
