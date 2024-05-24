import React, { useState, useEffect, Component } from "react";
import "../Home/Home.css";
import c1 from "../../assets/c-4.jpg";
import c2 from "../../assets/c-5.jpg";
import c3 from "../../assets/c-6.jpg";
import Members from "../Members.jsx";
import Notice from "../Notice";
import Tpo from "../Tpo";
import Contacts from "../Contacts";
import GotoTop from "../GotoTop";
const Home = () => {
  return (
    <>  
      <div className="bg">
        
        <div className="container-sm my-4">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={c1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={c2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={c3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>

      <Members />
      <Tpo />
      <Contacts />
      <GotoTop />
    </>
  );
};

export default Home;

