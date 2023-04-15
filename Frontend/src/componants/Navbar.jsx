import React from 'react'
import Logo from "../assets/logo3.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg">
        <div className="container my-4">
        <nav className="navbar navbar-light">
            <Link to='/'><img className="img-fluid" src={Logo} alt="Logo" /></Link>
            <h4 className="heading">
              Training & Placement Cell of Government College Of Engineering and Textile Technology ,
              Berhampore
            </h4>

            <a className="Link" href="/contact">
              
              Contact
            </a>

            <Link to='notice' className="Link" href="/notice">
              Notice
            </Link>

            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="button"
            >
             Admin Login
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
                      <button
                        type="button"
                        class="btn btn-success"
                        data-bs-dismiss="modal"
                      >
                        Log In
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

           
            
          </nav>
        </div>
                
      </div>
    </div>
  )
}

export default Navbar
