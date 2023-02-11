
import Questionnaire from './Questionnaire';
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
      <Questionnaire />
      </header>
    </div>
  );
}

export default App;
