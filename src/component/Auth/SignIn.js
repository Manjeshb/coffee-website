import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import style from "./style.module.css";

const PhoneAuth = () => {
  const [otp, setOtp] = useState('');
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {});
  }, []);

  const sendOtp = async () => {
    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, phone, appVerifier);
      setUser(confirmation);
      setOtpSent(true);
    } catch (err) {
      console.error(err.message);
    }
  }

  const verifyOtp = async () => {
    try {
      await user.confirm(otp);
      
      localStorage.setItem('isLoggedIn', 'true');
      navigate("/");
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const handleOtpChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setOtp(value);
    }
  };

  return (
    <div className={style.phoneAuthContainer}>
      <div className={style.formContainer}>
        <h1>Sign In</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={style.inputField}
        />
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={(phone) => setPhone("+" + phone)}
          inputStyle={{ width: '100%', padding: '10px', fontSize: '16px', cursor: 'text' }}
          containerStyle={{ marginBottom: '20px' }}
          autoFocus
        />
        <button className={style.btn} onClick={sendOtp}>Send OTP</button>
        {otpSent && (
          <>
            <p className={style.otpSentMessage}>OTP Sent</p>
            <div className={style.otpInput}>
              <input
                type="text"
                value={otp}
                onChange={handleOtpChange}
                maxLength={6}
                className={style.otpInputField}
              />
            </div>
            <button className={style.btn} onClick={verifyOtp}>Verify OTP</button>
          </>
        )}
        <div id="recaptcha" className={style.recaptcha}></div>
      </div>
    </div>
  )
}

export default PhoneAuth;
