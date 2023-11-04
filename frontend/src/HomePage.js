import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container-fluid " style={customContainer}>
      <div className="row text-center ">
        <div className="col-6">
          <Link
            to="/courses"
            style={{ textDecoration: "none", fontSize: 20, fontWeight: 600 }}
          >
            <div
              className="card card-body  justify-content-center"
              style={{ width: 300, height: 200 }}
            >
              Course List
            </div>
          </Link>
        </div>

        <div className="col-6">
          <Link
            to="/Dashboard"
            style={{ textDecoration: "none", fontSize: 20, fontWeight: 600 }}
          >
            <div
              className="card card-body justify-content-center"
              style={{ width: 300, height: 200 }}
            >
              Dashboard
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

const customContainer = {
  display: "flex",
  height: "100vh",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#fafafa",
};
