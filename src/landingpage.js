
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import image from '../src/assets/landingpage2.gif';
import { useNavigate } from "react-router-dom";
const styleobj = 
  {
    overflow:'hidden',width:'50vw', height:'50vh',position: 'absolute',
    top:'0',
    bottom: '0',
    left: '0',
    right:'0',
    margin: '325px 0px 0px 680px'
  };

function LandingPage() {
const navigate = useNavigate();
  return (
    <div style={{
      backgroundImage: 'url('+image+')',
      backgroundSize: 'cover',
      height: '100vh',
    }}>
        <div style={styleobj}>
        <button type="button" class="btn btn-light btn-lg" style={{color:'black'}} onClick={() => {navigate('/questionnaire')}}>Take the Quiz today!</button>
        </div>
   
    </div>
  );
}

export default LandingPage;
