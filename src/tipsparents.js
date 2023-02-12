import React, { Component } from "react";
import Navbar from "./Navbar";
const TipsParents = () => {
  const styleobj = {
    overflow: "hidden",
    width: "70vw",
    height: "100vh",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "80px 0px 0px 200px",
  };
  const tips = [
    {
      name: "Let them know they are loved",
      Details:
        "You don’t need to be an expert in all things LGBTQ to let them know you care. “There's no right or wrong way to express love,” reminds Dr. Sanders. “Just be present and be open",
    },
    {
      name: "Encourage dialogue",
      Details:
        "Be curious about their life,” advises Dr. Sanders. Get to know their friends and what they like to do",
    },
    {
      name: "Learn the facts",
      Details:
        "It’s not just a phase. Embrace — don’t dismiss — their evolving sense of self.",
    },
    {
      name: "Stay involved with the school",
      Details:
        "“If there’s a problem and the school isn’t taking your concerns seriously, go to the principal or even the school board.”",
    },
    {
      name: "Ensure they form healthy relationships",
      Details:
        "By encouraging your kid to date in a way that's healthy and age-appropriate, you send a powerful message: LGBTQ relationships are normal, and there's nothing to hide or be ashamed of explains Dr. Fields.",
    },
    {
      name: "Take a team approach",
      Details:
        "If you’re struggling, reach out for help. Team up with a pediatrician, a counselor at school, close family members and even community organization",
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={styleobj}>
        <h1>Tips to understand your child better!</h1>
        <hr></hr>
        <div class="list-group">
          {tips.map((tip, index) => (
            <a
              href="#"
              class="list-group-item list-group-item-action flex-column align-items-start"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 style={{fontWeight:'bold',color:'darkgrey'}} >{tip.name}</h5>
              </div>
              <p class="mb-1">{tip.Details}</p>
     
            </a>
           
          ))}
        </div>
      </div>
    </div>
  );
};

export default TipsParents;
