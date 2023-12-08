import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import notfoundImage from "../../Images/404.json";
/**
 * @author
 * @function Notfound
 **/

const Notfound = (props) => {
  useEffect(() => {
    props.show(false);
    return () => {
      props.show(true);
    };
  }, [props]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        flexDirection: "column",
        height: "80vh",
        width: "100%",
        gap: "30px",
      }}
    >
      {/* <h1
        className=" text-center"
        style={{ fontSize: "110px", fontWeight: "500" }}
      >
        404 Not found
      </h1> */}
      <Lottie
        loop={false}
        style={{ maxWidth: "600px", marginBottom: "30px" }}
        animationData={notfoundImage}
      />
      <Link
        to={"/home"}
        className="btn btn-danger border-0 py-3 px-5  "
        style={{ backgroundColor: "#912b22", textTransform: "capitalize" }}
      >
        back to home
      </Link>
    </div>
  );
};

export default Notfound;
