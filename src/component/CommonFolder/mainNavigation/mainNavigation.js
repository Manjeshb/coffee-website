import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./mainNavigation.css"
import logo from "./logo.jpeg";

const MainNavigation = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const barHandler = () => {
    setClicked(!clicked);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate("/");
  };

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div className='mainNavigationClass'>
      <nav>
        <Link to="/">
          <img src={logo} alt="/" />
        </Link>

        <div>
          <ul id='navbar' className={clicked ? "#navbar active" : "#navbar"}>
            <li><a href="https://medium.com/@zuru_ai/" target="_blank" rel="noreferrer">Blog</a></li>
            <li><a href="https://rive.google.com/">About</a></li>
            <li><Link to="/contactSales">Contact</Link></li>
            {
              isLoggedIn ? (
                <li><button onClick={handleLogout}>LogOut</button></li>
              ) : (
                <li><button onClick={handleLogin}>LogIn</button></li>
              )
            }
          </ul>
        </div>
        <div id="mobile" onClick={barHandler}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
