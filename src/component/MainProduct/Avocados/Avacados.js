import { useEffect } from 'react';
import style from "./style.module.css";

import ContactSales from '../../CommonFolder/ContactSales/ContactSales';
import FirstSection from './FirstSection/FirstSection';
import SecondContainer from './SecondContainer/SecondContainer';

const Avacados = () => {
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

export default Avacados;
