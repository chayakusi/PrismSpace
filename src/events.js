import React, { useState } from "react";
import { eventsList } from "./eventsList";
import Navbar from "./Navbar";
const EventsPage = () => {
  const [events, setEvents] = useState(eventsList);

  return (

    <div >
    <Navbar/>
    <div class="container">
        
      <div class="row" style={{color:'ActiveBorder',textAlign:'center',padding:'2rem'}}>
      <h1>Events in your region</h1>
      <hr></hr>
        <div class="col-md-5">
        <div class="card text-dark bg-light mb-3">
            <div class="card-header">  
            <span class="">
            <h3 class="card-title">Active Events</h3>
            </span> 
            </div>
            <div class="card-body">
              <p class="card-text">
                <ul style={{listStyleType:'none'}}>
                {events
              .filter((event) => event.active)
              .map((event) => (
                <li key={event.title}>
                 <div class="row">
                     <div class ="col-md-1"></div>
                     <span style={{fontSize:'20px',padding:'0.5rem'}}>{event.title}</span></div>   
                 <div class="row" style={{fontSize:'20px',padding:'0.5rem'}}>
                  <div class="col-md-1"></div>  

                  <div class="col-md-3">
                  <span class="badge bg-secondary"> Ends {event.date.toDateString()}</span>
                  </div>  
                  <div class="col-md-1"></div>
                  <div class="col-md-6">
                  <button type="submit" className="btn btn-primary">Register</button>
                  </div>  
        
                     </div>  
                     <div class="row"><hr></hr></div>
                </li>
              ))}
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5">
        <div class="card text-dark bg-light mb-3">
            <div class="card-header">  
            <span class="">
            <h3 class="card-title">Upcoming Events</h3>
            </span> 
            </div>
            <div class="card-body">
              <p class="card-text">
                <ul style={{listStyleType:'none'}}>
                {events
              .filter((event) => !event.active)
              .map((event) => (
                <li key={event.title}>
                 <div class="row">
                     <div class ="col-md-1"></div>
                     <span style={{fontSize:'20px',padding:'0.5rem'}}>{event.title}</span></div>   
                 <div class="row" style={{fontSize:'20px',padding:'0.5rem'}}>
                  <div class="col-md-2"></div>  

                  <div class="col-md-3">
                  <span class="badge bg-secondary">{event.date.toDateString()}</span>
                  </div>  

                  <div class="col-md-6">
                  <button type="submit" className="btn btn-primary">Register</button>
                  </div>  
        
                     </div>  
                     <div class="row"><hr></hr></div>
                </li>
              ))}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventsPage;
