import React, { useEffect } from 'react';
import style from "./style.module.css";
import FirstSection from './FirstSection/FirstSection';
import SecondContainer from './SecondContainer/SecondContainer';
import ContactSales from '../../CommonFolder/ContactSales/ContactSales';

const Coffee = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className={style.contentContainer}>
        <FirstSection />
        <SecondContainer />
        <ContactSales />
      </div>
    </div>
  )
}

export default Coffee;
