import React, { useState, useEffect, Component } from "react";
import "../Home/Home.css";
import c1 from "../../assets/c-4.jpg";
import c2 from "../../assets/c-5.jpg";
import c3 from "../../assets/c-6.jpg";
import Members from "../Members.jsx";
import Notice from "../Notice";
import Tpo from "../Tpo";
import Contacts from "../Contacts";
import { Outlet, Link } from "react-router-dom";
import GotoTop from "../GotoTop";
const Home = () => {
  return (
    <>  
      <div className="bg">
        
        <div className="container-sm my-4">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={c1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={c2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={c3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>

      <Members />
      <Notice />
      <Tpo />
      <Contacts />
      <GotoTop />
    </>
  );
};

export default Home;

