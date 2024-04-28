import React, {useEffect} from 'react';
import style from "./style.module.css";
import cardData from "./data";

const ContactSalesResponse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.header}>
          <h1>You can connect with the Sales department here:</h1>
        </div>
        <div className={style.cols}>
          {cardData.map(card => (
            <div className={style.col} key={card.id}>
              <div className={style.container}>
                <div className={style.front} style={{backgroundImage: `url(${card.image})`}}>
                  <div className={style.inner}>
                    <p>{card.name}</p>
                    <span>{card.contactNo}</span>
                  </div>
                </div>
                <div className={style.back}>
                  <div className={style.inner}>
                    <p>{card.description}</p>
                    <span>{card.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactSalesResponse;
