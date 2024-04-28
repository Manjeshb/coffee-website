import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import './CardSlider.css'; // Import your CSS file
import contentData from './data'; // Import the content data

const CardSlider = () => {
  const swiperRef = useRef(null);
  const swiperInterval = useRef(null); // Store swiperInterval in a useRef

  useEffect(() => {
    const initializeSwiper = () => {
      swiperRef.current = new Swiper('.slide-container', {
        direction: 'horizontal',
        slidesPerView: 3, // Display 3 cards at a time
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        },
        breakpoints: {
          768: {
            slidesPerView: 'auto',
            centeredSlides: false,
            spaceBetween: 10,
          },
        },
      });
      startAutoSlide(); // Start autoslide when swiper is initialized
    };

    const startAutoSlide = () => {
      swiperInterval.current = setInterval(() => { // Store interval in swiperInterval.current
        if (swiperRef.current) {
          swiperRef.current.slideNext();
        }
      }, 2500); // Autoslide duration: 2.5 seconds
    };

    initializeSwiper();

    return () => {
      clearInterval(swiperInterval.current); // Clear interval on component unmount
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true); // Destroy Swiper instance on component unmount
        swiperRef.current = null;
      }
    };
  }, []);

  const scrollNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const scrollPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const truncateDescription = (description) => {
    const maxLength = 350;
    return description.length > maxLength ? `${description.substring(0, maxLength)}...` : description;
  };

  return (
    <div className="slide-container swiper">
      <h1>Case studies</h1>
      <div className="swiper-wrapper">
        {contentData.map((item) => (
          <div key={item.id} className="swiper-slide">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img src={item.imageUrl} alt="" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">{item.name}</h2>
              <p className="description">{truncateDescription(item.description)}</p>
              {item.description.length > 350 && (
                <a href={`${item.url}`} className="button" target="_blank" rel="noopener noreferrer">
                  View More
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-button-next swiper-button-next-custom" onClick={scrollNext}></div>
      <div className="swiper-button-prev swiper-button-prev-custom" onClick={scrollPrev}></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default CardSlider;
