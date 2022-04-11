import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase_init";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasword, setConfirmPassword] = useState("");
  const [signUpSubmit, setSignUpSubmit] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const signUpEmail = (e) => {
    setEmail(e.target.value);
  };
  const signUpPassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const signUpConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    console.log(e.target.value);
  };
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPasword) {
      setSignUpError("your password did not match");
      return;
    }
    if (password.length < 6) {
      setSignUpError("your password is short");
    }
    createUserWithEmailAndPassword(email, password);
    setEmail("");
  };
  if (user) {
    navigate("/");
  }
  return (
    <div className="login-form signupform">
      <h2>this is Signup</h2>
      <div className="input-group">
        <form onSubmit={handleCreateUser}>
          <div>
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              onChange={signUpEmail}
              type="email"
              name="email"
              id=""
              value={email}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br></br>
            <input
              onBlur={signUpPassword}
              type="password"
              name="password"
              id=""
              required
            ></input>
          </div>
          <div>
            <label htmlFor="confirm-password">confirm Password</label>
            <br></br>
            <p>{signUpError}</p>
            <input
              onBlur={signUpConfirmPassword}
              type="password"
              name="confirm-password"
              id=""
              required
            ></input>
          </div>
          <input
            className="login-form-btn signup-form-btn"
            type="submit"
            value="signup"
            required
          ></input>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="form-link" to="/Login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
