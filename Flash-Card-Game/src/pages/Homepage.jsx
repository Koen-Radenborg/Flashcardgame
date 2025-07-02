import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';
import Modal from '../components/Modal';

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


  const aboutText = `
    FlashcaRPG is gemaakt door faith en kiwi als oefenexamen. We wilden iets maken dat niet alleen leerzaam is, maar ook gewoon leuk om te spelen.

    We kwamen al snel op het idee van een quizspel, en dachten: waarom maken we er geen mini-avontuur van? Zo werd FlashcaRPG geboren, een spel waarin je je kennis test én mijlpalen kunt behalen (want wie wil nou geen diamanten sticker?).

    Alles in het spel is bedacht en gebouwd door ons, van de decks tot de puntentelling. We hopen dat jij er net zo veel plezier aan beleeft als wij tijdens het maken.

    Veel speelplezier!
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
      content: aboutText,
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
