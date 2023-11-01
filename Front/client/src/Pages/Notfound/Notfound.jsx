import React from "react";
import { Link } from "react-router-dom";

/**
 * @author
 * @function Notfound
 **/

const Notfound = (props) => {
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
      <h1
        className=" text-center"
        style={{ fontSize: "110px", fontWeight: "500" }}
      >
        404 Not found
      </h1>

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
