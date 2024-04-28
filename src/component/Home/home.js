import React, {useEffect} from 'react';
// import MainNavigation from "../CommonFolder/mainNavigation/mainNavigation"
import styles from "./style.module.css"
import ImageSlider from './ImageSlider/ImageSlider';
import Card from './card/card';
import SmallCard from './smallCard/smallCard';
import CardSlider from './caseStudy/CardSlider';
// import GrowthStory from './growthStory/GrowthStory';
import ContactSales from '../CommonFolder/ContactSales/ContactSales';
import Ecosystem from './Ecosystem/Ecosystem';
// import Footer from '../CommonFolder/Footer/Footer';
// import ChatBotMain from '../Chatbot/Chatbot';

function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className={styles.contentContainer}>
        <ImageSlider/>
        <Card />
        <SmallCard />
        {/* <GrowthStory /> //* Currently hidden */ }
        <ContactSales />
        <CardSlider />
        <Ecosystem />
      </div>
    </div>
  );
}

export default Home;
