import React from 'react'
import Logo from "../assets/logo3.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
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
              Events
            </Link>

            <Link className="Link" href="/admin"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
             Admin Login
            </Link>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Admin login
                    </h5>

                    <div className="container">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Enter Admin Id
                        </label>
                        <input
                          className="form-control"
                          id="exampleFormControlInput1"
                        />
                      </div>
                      <div>
                        <label for="inputPassword" className="form-label">
                          Password
                        </label>

                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword"
                        />
                      </div>

                      {/* <Outlet/> */}
                    </div>
                    {/* <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button> */}
                  </div>
                  {/* <div className="modal-body">...</div> */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <Link to="admin">
                      <button
                        type="button"
                        className="btn btn-success"
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
