import React, {useEffect} from 'react';
import style from "./style.module.css";
// import MainNavigation from '../../CommonFolder/mainNavigation/mainNavigation';
// import Footer from '../../CommonFolder/Footer/Footer';
import ContactSales from '../../CommonFolder/ContactSales/ContactSales';
import FirstSection from './FirstSection/FirstSection';
import SecondContainer from './SecondContainer/SecondContainer';

const Pepper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* <MainNavigation/> */}
      <div className={style.contentContainer}>
        <FirstSection />
        <SecondContainer />
        <ContactSales />
      {/* <Footer /> */}
      </div>
    </div>
  )
}

export default Pepper;
