import React from 'react';
// import MainNavigation from '../CommonFolder/mainNavigation/mainNavigation';
import ContactSales from '../CommonFolder/ContactSales/ContactSales';
// import Footer from '../CommonFolder/Footer/Footer';
import style from "./style.module.css";
import SmallImages from './SmallImages/SmallImages';

const Fertilizer = () => {
  return (
    <div>
        {/* <MainNavigation/> */}
      <div className={style.contentContainer}>
        <SmallImages />
        <ContactSales />
        {/* <Footer /> */}
    </div>
    </div>
  )
}

export default Fertilizer
