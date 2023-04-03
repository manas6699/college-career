import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [details, setDetails] = useState({email: "", password: "" });
  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2 className="login">Admin Panel, Please Login</h2>
        {/* ERROR MESSAGE */}
        {(errors.email || errors.password) && (
          <div className="error">
            {errors.email && <p>{errors.email}</p>}
            {errors.password && <p>{errors.password}</p>}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) =>
              setDetails({ ...details, email: e.target.value })
            }
            value={details.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>

        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
};

export default Login;