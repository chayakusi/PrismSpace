import ArticleFeed from './Feed';
import Questionnaire from './Questionnaire';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import image from '../src/assets/background-final.png'
import ConsultationForm from './consultation';
import Events from './events';
import LandingPage from './landingpage';
import LegalResources from './LegalResources';
import Community from './Community';
import Safespaces from './safespaces';
import TipsParents from './tipsparents';


function App() {
  return (
    <div style={{
      backgroundImage: 'url('+image+')',
      backgroundSize: 'cover',
      height: '140vh',
      color: "#f5f5f5"
    }}>
      <header>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/consultation" element={<ConsultationForm />} />
          <Route path="/events" element={<Events />} />
          <Route path="/articles" element={<ArticleFeed />} />
          <Route path="/resources" element={<LegalResources />} />
          <Route path="/community" element={<Community />} />
          <Route path="/safespaces" element={<Safespaces />} />
          <Route path="/parentaltips" element={<TipsParents />} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
