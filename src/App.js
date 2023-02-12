import ArticleFeed from './Feed';
import Questionnaire from './Questionnaire';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import image from '../src/assets/background-final.png'
import ConsultationForm from './consultation';
import Events from './events';
import LegalResources from './LegalResources';

function App() {
  return (
    <div style={{
      backgroundImage: 'url('+image+')',
      backgroundSize: 'cover',
      height: '100vh',
      color: "#f5f5f5"
    }}>
      <header>
      <Router>
        <Routes>
          {/* <PrivateRoute exact path="/" element={<Dashboard/>} /> */}
          {<Route path="/" element={<ArticleFeed />} />}
          <Route path="/home" element={<Home />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/consultation" element={<ConsultationForm />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<LegalResources />} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
