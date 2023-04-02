import React, { Component } from 'react';
import "../Home/Home.css"
import Logo from "../../assets/logo.png"
import { CgDarkMode } from 'react-icons/cg'
import bg from '../../assets/bg.png'
import avatar from '../../assets/avatar2.png'

const Home = () => {
  return (
    <>
      <div className="bg">
        <div className="container">
          <nav class="navbar navbar-light">

            <img src={Logo} alt="Logo" />
            <h1 class="heading">Government College Of Engineering and Textile Technology , Berhampore</h1>

            <a href="/brochure"> Brochure</a>

            <a href="/contact"> Contact</a>
            <button class="btn  position-relative">
              Notice
              <span class="position-absolute top-1 start-60 translate-middle p-1 bg-danger border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
              </span>
            </button>
            <button class="btn btn-lg">
              <CgDarkMode />
            </button>
          </nav>

          <img src={bg} alt="background" />
          <div className="sub"><h1>
            Connecting Our students to your company</h1></div>
          <div className="avatar">
            <img src={avatar} alt="" />
          </div>

        </div>
      </div>



    </>

  )
}

export default Home

// nodeMcu  ESP8266: 415
// MPU6050 ACCELEROMETER : 227
// soldering machine : 196
// flexible pcb : 7.50 dollar

