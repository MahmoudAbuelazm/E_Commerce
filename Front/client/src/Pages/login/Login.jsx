// @ts-nocheck
import React, { useEffect, useState } from "react";
import Style from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function Login(props) {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    const { name, value } = e.target;
    setUser((old) => ({
      ...old,
      [name]: value,
    }));
    console.log(user);
  };

  let login = (e) => {
    e.preventDefault();
    setisLoading(true);
    axios
      .post("https://backend-kappa-beige.vercel.app/auth/login", user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("userToken", res.data.result);
        setisLoading(false);
        setMessage(res.data.message);
        if (res.data.success) {
          swal({
            title: "you are logged in successfully",
            text: "",
            icon: "success",
            button: "Continue",
          }).then(() => {
            props.setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", "true");
            navigate("/");
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  };
  useEffect(() => {
    props.show(false);
    return () => {
      props.show(true);
    };
  }, [props]);

  return (
    <>
      <div className={`container ${Style.login} `}>
        <div
          className="row d-flex align-items-center justify-content-center m-0"
          style={{ minHeight: "100%" }}
        >
          <div className="col-7 d-sm-none d-md-block">
            <img
              className="img-fluid"
              src={require("../../Images/login.gif")}
              alt=""
            />
          </div>
          <div className="col-sm-12 col-md-5 " style={{ color: "#000" }}>
            <div className="text">
              <h2>Welcome Back :) </h2>
              <p>
                To keep connected with us please login with your personal
                information by email address and password 🔔.
              </p>
            </div>
            <div className="text">
              <h2>Log in to Exclusive </h2>
              <p>Enter your details below</p>
            </div>
            <form action="" onSubmit={login} className={`${Style.form}`}>
              <div className="form mb-3">
                <input
                  type="email"
                  className={`form-control ${Style.input}`}
                  id="email"
                  name="email"
                  value={user.email}
                  placeholder="phone number or gmail"
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
              {message && <div className={`${Style.message}`}>{message}</div>}
              <div className={Style.submit}>
                <button className={Style.btn} type="submit">
                  {!isLoading ? (
                    <div
                      style={{ background: "#912b22" }}
                      className="text-white align-self-end"
                    >
                      login
                    </div>
                  ) : (
                    <div
                      style={{ background: "#912b22" }}
                      className="justify-content-center rounded-3 align-self-end"
                    >
                      <div
                        class="spinner-border text-white mx-auto d-block"
                        role="status"
                      >
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  )}
                </button>
                <Link to={"/forgetpassword"}>forget password</Link>
              </div>
              <p className={`mt-4 text-center ${Style.last} `}>
                don`t have an acount
                <Link
                  to={"/signup"}
                  className={`m-2 mt-3 text-center`}
                  style={{ color: "#912b22" }}
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
