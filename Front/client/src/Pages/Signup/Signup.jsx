// @ts-nocheck
import React, { useEffect, useState } from "react";
import axios from "axios";
import Style from "./signup.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup(props) {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let handleChange = (e) => {
    const { name, value } = e.target;
    setUser((old) => ({
      ...old,
      [name]: value,
    }));
    console.log(user);
  };

  let signup = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("https://backend-kappa-beige.vercel.app/auth/register", user)
      .then((res) => {
        console.log(res.data);
        setMessage(res.data.message);
        if (res.data.success) {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
    console.log(response);
  };
  useEffect(() => {
    props.show(false)
    return () => {

      props.show(true)
    }
  }, [props])

  return (
    <>
      <div className={`container ${Style.signup}`}>
        <div
          className="row d-flex align-items-center m-0"
          style={{ minHeight: "100%" }}
        >
          <div className="col-7 d-sm-none d-md-block">
            <img
              className="img-fluid"
              src={require("../../Images/login.gif")}
              alt=""
            />
          </div>
          <div className="col-sm-12 col-md-5 mt-3" style={{ color: "#000" }}>
            <div className="text">
              <h2>Create an account </h2>
              <p>Enter your details below</p>
            </div>
            <form action="" onSubmit={signup}>
              <div className="form mb-3">
                <input
                  type="text"
                  className={`form-control ${Style.input}`}
                  id="userName"
                  name="userName"
                  placeholder="Name"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form mb-3">
                <input
                  type="email"
                  className={`form-control ${Style.input}`}
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={user.email}
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
                  placeholder="confirm password"
                  value={user.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              {message && <div className={`${Style.message}`}>{message}</div>}

              <div className={Style.submit}>
                <button type="submit">Create Acount</button>
                <Link
                  to={'https://backend-kappa-beige.vercel.app/auth/google'}
                // onClick=s{signupWithGoogle}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-google me-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                  Sign Up with google
                </Link>
              </div>
              <p className={`mt-4 text-center ${Style.last}`}>
                Already have acount
                <Link
                  to={"/login"}
                  className={`m-2 mt-3 text-center`}
                  style={{ color: '#912b22' }}
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div >
      </div >
    </>
  );
}

export default Signup;
