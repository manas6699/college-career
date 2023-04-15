import React, { useState, useEffect, Component } from "react";
import "../Home/Home.css";
import c1 from "../../assets/c-1.jpg";
import c2 from "../../assets/c-2.jpg";
import c3 from "../../assets/c-3.jpg";
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
        
        <div className="container my-4">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={c1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2>First slide label</h2>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={c2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Second slide label</h2>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={c3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Third slide label</h2>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
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

