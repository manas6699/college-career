import React, { useState, useEffect, Component } from "react";
import "../Home/Home.css";
import Logo from "../../assets/logo.png";
import bg from "../../assets/bg.png";
import avatar from "../../assets/avatar2.png";
import Members from "../Members.jsx";
import Notice from "../Notice";
import Tpo from "../Tpo";
import Contacts from "../Contacts";
import Footer from "../Footer";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg">
        <div className="container">
          <nav className="navbar navbar-light">
            <img className="img-fluid" src={Logo} alt="Logo" />
            <h4 className="heading">
              Government College Of Engineering and Textile Technology ,
              Berhampore
            </h4>

            <a href="/brochure"> Brochure</a>

            <a href="/contact"> Contact</a>

            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Log in
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Admin login
                    </h5>

                    <div class="container">
                      <div class="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Enter Admin Id
                        </label>
                        <input
                          class="form-control"
                          id="exampleFormControlInput1"
                        />
                      </div>
                      <div>
                        <label for="inputPassword" class="form-label">
                          Password
                        </label>

                        <input
                          type="password"
                          class="form-control"
                          id="inputPassword"
                        />
                      </div>

                      {/* <Outlet/> */}
                    </div>
                    {/* <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button> */}
                  </div>
                  {/* <div class="modal-body">...</div> */}
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <Link to="admin">
                      <button type="button" class="btn btn-success"  data-bs-dismiss="modal">
                        Log In
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn  position-relative">
              Notice
              <span className="position-absolute top-1 start-60 translate-middle p-1 bg-danger border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </button>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" for="flexSwitchCheckDefault">
                Dark Mode
              </label>
            </div>
          </nav>

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
                <img src={Logo} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={bg} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={avatar} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
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
      <Footer />
    </>
  );
};

export default Home;

// nodeMcu  ESP8266: 415
// MPU6050 ACCELEROMETER : 227
// soldering machine : 196
// flexible pcb : 7.50 dollar
