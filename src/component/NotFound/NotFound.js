import React from 'react';
import style from "./style.module.css";

const NotFound = () => {
  return (
    <div>
        <img src="https://i.ibb.co/W6tgcKQ/softcodeon.gif" alt="/"/>
        <h1 className={style.errorText}>Whoops, We can't seem to find the resource you're looking for.</h1>
        <p className={style.text}>Please check that the Web site address is spelled correctly.Or,</p>
        <div className={style.btn1}>
        <a className={style.error} href="/">Go to Homepage</a>
        </div>

    </div>
  )
}

export default NotFound;
