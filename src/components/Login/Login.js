import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase_init";
import "./Login.css";
const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  };
  const handleLoginPass = (e) => {
    setLoginPass(e.target.value);
  };
  const LoginSubmit = (e) => {
    e.preventDefault();
    console.log(loginEmail, loginPass, user);
    signInWithEmailAndPassword(loginEmail, loginPass);
  };
  if (user) {
    console.log("user changed");
    navigate(from, { replace: true });
  }

  return (
    <div className="login-form">
      <h2 className="login-form-title">This is login</h2>
      <div className="input-group">
        <form onSubmit={LoginSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              onBlur={handleLoginEmail}
              type="email"
              name="email"
              id=""
              required
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br></br>
            <input
              onBlur={handleLoginPass}
              type="password"
              name="password"
              id=""
              required
            ></input>
          </div>
          <input
            className="login-form-btn"
            type="submit"
            value="Login"
            required
          ></input>
        </form>
        <p>{error?.message}</p>
        <p>
          New to emazon?{" "}
          <Link className="form-link" to="/Signup">
            create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
