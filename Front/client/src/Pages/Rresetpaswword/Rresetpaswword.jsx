import React, { useState } from "react";
import Style from "../login/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Rresetpaswword() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    forgetCode: "",
  });
  const [message, setMessage] = useState("");
  let navigate = useNavigate();
  let handleChange = (e) => {
    const { name, value } = e.target;
    setUser((old) => ({
      ...old,
      [name]: value,
    }));
    console.log(user);
  };

  let confirmCodeRequist = (e) => {
    axios
      .patch("https://backend-kappa-beige.vercel.app/auth/resetPassword", user)
      .then((res) => {
        console.log(res.data);
        setMessage(res.data.message);
        if (res.data.success) {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));

    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <form
          action=""
          onSubmit={confirmCodeRequist}
          className={`${Style.form} mt-5`}
        >
          <div className="form mb-3">
            <input
              type="email"
              className={`form-control ${Style.input}`}
              id="email"
              name="email"
              value={user.email}
              placeholder="Your email"
              onChange={handleChange}
            />
          </div>
          <div className="form mb-3">
            <input
              type="password"
              className={`form-control ${Style.input}`}
              id="password"
              name="password"
              value={user.password}
              placeholder="password"
              onChange={handleChange}
            />
          </div>
          <div className="form mb-3">
            <input
              type="password"
              className={`form-control ${Style.input}`}
              id="confirmPassword"
              name="confirmPassword"
              value={user.confirmPassword}
              placeholder="confirm password"
              onChange={handleChange}
            />
          </div>
          <div className="form mb-3">
            <input
              type="number"
              className={`form-control ${Style.input}`}
              id="forgetCode"
              name="forgetCode"
              value={user.forgetCode}
              placeholder="Code"
              onChange={handleChange}
            />
          </div>
          {message && <div className={`${Style.message}`}>{message}</div>}

          <div className={Style.submit}>
            <button className={Style.btn} type="submit">
              confirm
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Rresetpaswword;
