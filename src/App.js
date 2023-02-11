
import Questionnaire from './Questionnaire';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import image from '../src/assets/background.png'

function App() {
  return (
    <div style={{
      backgroundImage: 'url('+image+')',
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5"
    }}>
      <header>
      <Router>
        <Routes>
          {/* <PrivateRoute exact path="/" element={<Dashboard/>} /> */}
          {<Route path="/" element={<Questionnaire />} />}
          <Route path="/home" element={<Home />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
