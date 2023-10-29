import React, { useState } from "react";
import Style from "../login/login.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Forgetpassword() {
  const [user, setUser] = useState({
    email: "",
  });
  const [message, setMessage] = useState();

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
      .patch("https://backend-kappa-beige.vercel.app/auth/forgetCode", user)
      .then((res) => {
        console.log(res.data);
        setMessage(res.data.message);
        if (res.data.success) {
          navigate("/resetpassword");
        }
      })
      .catch((err) => console.log(err));

    e.preventDefault();
  };

  console.log(
    "🚀 ~ file: Forgetpassword.jsx:7 ~ Forgetpassword ~ user:",
    user.email
  );
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

          {message && <div className={`${Style.message}`}>{message}</div>}

          <div className={Style.submit}>
            <button className={Style.btn} type="submit">
              Send Code
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Forgetpassword;
