import React from 'react'
import {FaRegUser} from "react-icons/fa";
import '../Home/HomeStyle.scss';

const Home = () => {
  return (
    <>
      <div className = "welcomeContainer">
        <FaRegUser className = "iconUser"></FaRegUser>
        <h1 className = "welcomeTitle">WELCOME</h1>
      </div>
      <div className = "loginContainer">
        <form className = "formLogin" method='post'>
          <label for = "POST-name">Email:</label>
          <input type = "email" name = "email"></input>
          <label>Password:</label>
          <input type = "password"></input>
          <button className = "btnLogin"><a href = "/profile" >Login</a></button>
        </form>
        <div className='btnExtras'>
          <p className='btnSingIn'>Sing In</p>
          <p className='btnForgotPassword'>Forgot your password?</p>
        </div>
      </div>
    </>
  )
}

export default Home