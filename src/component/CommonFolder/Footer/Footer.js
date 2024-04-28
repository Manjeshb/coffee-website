import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';


const Footer = () => {
  return (
    <footer className={styles.footerDistributed}>
      <div className={styles.footerLeft}>
        <h3>Coffee<span>Connect</span></h3>
        <p className={styles.footerLinks}>
          <Link to="/">Home</Link>
          <Link to="/coffee">Coffee</Link>
          <Link to="/pepper">Pepper</Link>
          <Link to="/avocados">Avocados</Link>
        </p>
        <p className={styles.footerCompanyName}>company Founded in © 2019</p>
      </div>
      <div className={styles.footerCenter}>
        <div>
          <i className="fas fa-map-marker"></i>
          <p><span>444, fourth floor near AK hospital</span> Sector 38 Bengaluru, India</p>
        </div>
        <div>
          <i className="fas fa-phone"></i>
          <p>+91 1234567890</p>
        </div>
        <div>
          <i className="fas fa-envelope"></i>
          <p><a href="mailto:support@coffeeconnect.com">support@coffeeconnect.com</a></p>
        </div>
      </div>
      <div className={styles.footerRight}>
        <p className={styles.footerCompanyAbout}>
          <span>About the company</span>
          Our mission is to empower new generation farmers with cutting-edge information on crop cultivation, best practices, and sustainable farming solutions.
        </p>
        <div className={styles.footerIcons}>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a> 
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
