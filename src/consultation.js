import React, { useState } from 'react';
import Navbar from "./Navbar";

const ConsultationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };
  const queryParameters = new URLSearchParams(window.location.search);
  const answer = queryParameters.get("yes");

  const styleobj = 
  {overflow:'hidden',width:'40vw',height:"100vh",position: 'absolute',
  top:'0',
  bottom: '0',
  left: '0',
  right:'0',
  margin: '100px 0px 0px 450px'};

  return (
    <div>
    <Navbar/>
  
    <div style={styleobj}> 
    <h1>Request an Appointment</h1> 
    <div class="alert alert-dismissible alert-info">
  As per our survey, we identify you as 
  {answer === "1" && <strong> Queer! </strong> }
  {answer === "0" && <strong> Straight! </strong> }
  <br></br>But, we might be not accurate always.
</div>
    <h5>If you would like to learn more, you can request an appointment with one of our counselors</h5>
    <hr></hr>
    <form onSubmit={handleSubmit} style={{color:'ActiveBorder'}}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
          id="message"
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{margin:'1rem 0 0 0'}}>
        Request
      </button>
     
    </form>
    </div>
    </div>
  );
};

export default ConsultationForm;
