import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../components/Modal';
import '../src/App.css';

function Homepage() {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleStartClick = () => {
    navigate('/DeckSelect');
  };

  const instructionsText = `
    Welkom bij FlashcaRPG! In dit spel test je je kennis met 20 vragen verdeeld over drie niveaus: makkelijk, gemiddeld en moeilijk.

    Je kunt kiezen uit vijf verschillende decks, zoals Engels, Front-end Development, Geschiedenis, Dierweetjes en Algemene kennis. Kies wat je leuk vindt!

    Hoe meer vragen je goed beantwoordt, hoe beter je score. Er zijn vijf scorecategorieën, van brons tot diamant — dus probeer zo veel mogelijk vragen juist te beantwoorden en wie weet verdien jij wel die felbegeerde diamanten sticker!

    Veel succes en vooral veel plezier tijdens het spelen!
    `;


  const openModal = (type) => {
  if (type === 'instructions') {
    setModalData({
      title: 'Hoe werkt het?',
      content: instructionsText,
      bgColor: '#F2D2BD',
      borderColor: '#C0AA9C',
    });
  } else if (type === 'about') {
    setModalData({
      title: 'Over het spel',
      content: 'Beschrijving van het spel, doel, etc.',
      bgColor: '#F2D2BD',
      borderColor: '#C0AA9C',
    });
  }
  setModalOpen(true);
};


  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="background-container">
      <h1 className="heading-title">FlashcaRPG</h1>
      <div className="button-group-container">
        <button className="button-base button-large" onClick={handleStartClick}>
          Start
        </button>
        <button className="button-base button-small" onClick={() => openModal('instructions')}>
          Hoe het werkt
        </button>
        <button className="button-base button-small" onClick={() => openModal('about')}>
          Over het spel
        </button>
      </div>

      {modalOpen && (
        <Modal
          title={modalData.title}
          content={modalData.content}
          bgColor={modalData.bgColor}
          borderColor={modalData.borderColor}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Homepage;
