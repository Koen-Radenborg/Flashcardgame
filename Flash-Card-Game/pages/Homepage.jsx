import { useNavigate } from 'react-router-dom';
import '../src/App.css';

function Homepage() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/DeckSelect');
  };

  return (
    <div className="background-container">
      <h1 className="heading-title">FlashcaRPG</h1>
      <div className="button-group-container">
        <button className="button-base button-large" onClick={handleStartClick}>
          Start
        </button>
        <button className="button-base button-small">Hoe het werkt</button>
        <button className="button-base button-small">Over het spel</button>
      </div>
    </div>
  );
}

export default Homepage;
