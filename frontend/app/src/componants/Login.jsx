import React from "react";

const Login = () => {
  return (
    <div class="container">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Admin Id
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Password
        </label>

        <input type="password" class="form-control" id="inputPassword" />
      </div>

      <button type="button" class="btn btn-success">Log In</button>
    </div>
  );
};

export default Login;
