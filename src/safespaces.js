import React, { Component } from "react";
import Navbar from "./Navbar";
const Safespaces = () => {
  const styleobj = {
    overflow: "hidden",
    width: "70vw",
    height: "100vh",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "180px 0px 0px 200px",
  };
  const restaurants = [
    {
      name: "Cedar Springs Tap House",
      location: "Oak Lawn, Dallas, TX, 75212",
      status: "open",
    },
    {
      name: "The Tin Room",
      location: "2514 Hudnall St Dallas, TX 75235",
      status: "open",
    },
    {
      name: "JRs Bar and Grill",
      location: "3923 Cedar Springs Rd Dallas, TX 75219",
      status: "open",
    },
    {
      name: "Sue Ellens",
      location: "3014 Throckmorton St Dallas, TX 75219",
      status: "close",
    },
    {
      name: "TMC",
      location: "3903 Cedar Springs Dallas, TX 75295",
      status: "close",
    },
    {
      name: "Club Reflection",
      location: "604 S Jennings Fort Worth, TX 76104",
      status: "close",
    },
  ];

  return (


      <div>
          <Navbar/>
        <div style={styleobj}>
        <h1>Safespaces near you!</h1>
      <hr></hr>
          <div class="list-group">
            {restaurants.map((restaurant, index) => (
             <a
                href="#"
                class="list-group-item list-group-item-action flex-column align-items-start start"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{restaurant.name}</h5>
                  {restaurant.status === "open" && <span class="badge bg-success">{restaurant.status}</span>}
                  {restaurant.status === "close" && <span class="badge bg-danger">{restaurant.status}</span>}
                </div>
                <p class="mb-1">{restaurant.location}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

  );
};

export default Safespaces;
