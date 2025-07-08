import { useNavigate } from "react-router-dom";
import englishDeck from '../decks/englishDeck.js'
import dierenFeitjesQuestions from '../decks/aminalFactsDeck.js';
import historyQuestions from '../decks/historyDeck.js';
import frontEndQuestions from '../decks/front-endDeck.js';
import generalKnowledgeQuestions from '../decks/generalKnowledgeDeck.js';
import Deck from '../components/Deck.jsx';
import DeckInformationModal from '../components/DeckInformationModal.jsx';
import gsap from 'gsap'
import { useEffect, useState } from 'react';
import planesQuestions from "../decks/planesDeck.js";

const DeckSelect = () => {
  const navigate = useNavigate();
  const [selectedDeck, setSelectedDeck] = useState(null);

  useEffect(() => {
    const items = gsap.utils.toArray("#float");
    items.forEach((item, i) => {
      gsap.to(item, {
        y: -10,
        duration: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.3
      });
    });
  }, []);

  const decks = [
    { ...englishDeck, key: "english" },
    { ...historyQuestions, key: "history" },
    { ...frontEndQuestions, key: "frontEnd" },
    { ...dierenFeitjesQuestions, key: "animalFacts" },
    { ...generalKnowledgeQuestions, key: "generalKnowledge" },
    { ...planesQuestions, key: 'planeFacts'}
  ];

  return (
    <section className='flex text-5xl w-[100vw] gap-16 bg-[#F2D2BD] h-[100vh] justify-evenly items-center flex-col'>
      <h1 className='p-4 bg-[#ffb481] rounded-2xl text-white w-3/5 text-center'>kies een!! ♪(^∇^*)</h1>
      <div className='flex gap-16 flex-wrap justify-center'>
        {decks.map((deck) => (
          <Deck
            key={deck.key}
            title={deck.title}
            bgColor={deck.primaryColor}
            borderColor={deck.secondaryColor}
            shortDesc={deck.shortDescription}
            onClick={() => setSelectedDeck(deck)}
          />
        ))}
      </div>

      {selectedDeck && (
        <DeckInformationModal
          title={selectedDeck.title}
          longDesc={selectedDeck.longDescription}
          primaryColor={selectedDeck.primaryColor}
          secondaryColor={selectedDeck.secondaryColor}
          tertiaryColor={selectedDeck.tertiaryColor}
          deckKey={selectedDeck.key}
          onClose={() => setSelectedDeck(null)}
          button={() => navigate(`/gamescreen/${selectedDeck.key}`)}
        />
      )}
    </section>
  );
}

export default DeckSelect;
