import React from "react";
import { Link, Outlet } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Admin Id
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>

        <input type="password" className="form-control" id="inputPassword" />
      </div>

      <Link to="admin">
        <button type="button" className="btn btn-success">
          Log In
        </button>
      </Link>
      <Outlet/>
    </div>
  );
};

export default Login;
