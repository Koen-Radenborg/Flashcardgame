import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dierenFeitjesQuestions from "../decks/aminalFactsDeck";
import englishQuestions from "../decks/englishDeck";
import frontEndQuestions from "../decks/front-endDeck";
import historyQuestions from "../decks/historyDeck";
import planesQuestions from "../decks/planesDeck";
import generalKnowledgeQuestions from "../decks/generalKnowledgeDeck";
import ResultModal from "../components/ResultModal";
import "../GameScreen.css";

const themes = {
  generalKnowledge: {
    background: "#FCD9FF",
    card: "#DA75E3",
    border: "#CD5CD7",
    title: generalKnowledgeQuestions.title,
    deckData: generalKnowledgeQuestions,
  },
  english: {
    background: "#FFA1A1",
    card: "#FF6060",
    border: "#EA4343",
    title: englishQuestions.title,
    deckData: englishQuestions,
  },
  frontEnd: {
    background: "#E0F7FA",
    card: "#318EA6",
    border: "#1E758B",
    title: frontEndQuestions.title,
    deckData: frontEndQuestions,
  },
  history: {
    background: "#FFE5D1",
    card: "#F19646",
    border: "#D88033",
    title: historyQuestions.title,
    deckData: historyQuestions,
  },
  animalFacts: {
    background: "#E1F7E4",
    card: "#4FAB5D",
    border: "#40914C",
    title: dierenFeitjesQuestions.title,
    deckData: dierenFeitjesQuestions,
  },
    planeFacts: {
    background: planesQuestions.primaryColor,
    card: planesQuestions.tertiaryColor,
    border: planesQuestions.secondaryColor,
    title: planesQuestions.title,
    deckData: planesQuestions,
  },
};

// Haalt n willekeurige items uit array
function getRandomItems(arr, n) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

// Combineert beginner, medium en advanced vragen
function getRandomQuestions(deck) {
  return [
    ...getRandomItems(deck.beginnerQuestions, 10),
    ...getRandomItems(deck.mediumQuestions, 6),
    ...getRandomItems(deck.advancedQuestions, 4),
  ];
}

// LocalStorage functies voor highscores
const getHighScores = () => {
  try {
    return JSON.parse(localStorage.getItem("highScores")) || {};
  } catch {
    return {};
  }
};

const saveHighScore = (deckKey, score) => {
  const scores = getHighScores();
  if (!scores[deckKey] || score > scores[deckKey]) {
    scores[deckKey] = score;
    localStorage.setItem("highScores", JSON.stringify(scores));
  }
};

const getHighScore = (deckKey) => {
  const scores = getHighScores();
  return scores[deckKey] || 0;
};

// Bepaalt CSS-klasse op basis van score
const getScoreClass = (score) => {
  if (score === 20) return "score-lightblue";
  if (score >= 18) return "score-gold";
  if (score >= 15) return "score-silver";
  if (score >= 10) return "score-bronze";
  return "score-gray";
};

const GameScreen = () => {
  const { deckKey } = useParams();
  const navigate = useNavigate();

  const selectedDeck = themes[deckKey] || themes.generalKnowledge;

  // State initialisatie
  const [questions, setQuestions] = useState(() =>
    getRandomQuestions(selectedDeck.deckData)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [highScore, setHighScore] = useState(getHighScore(deckKey));

  const currentQuestion = questions[currentIndex];

  // Bepaalt moeilijkheidsgraad per vraag index
  const getDifficulty = (index) => {
    const total = questions.length;
    if (index < total * 0.5) return "Makkelijk";
    if (index < total * 0.8) return "Medium";
    return "Moeilijk";
  };

  const difficulty = getDifficulty(currentIndex);
  const round = currentIndex + 1;

  // Volgende vraag of modal tonen
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowModal(true);
    }
  };

  // Beantwoord een vraag en update score
  const handleAnswer = (answer) => {
    if (answer.correct) setScore((prev) => prev + 1);
    setUserAnswers((prev) => [...prev, answer]);
    handleNext();
  };

  // Start het spel opnieuw
  const handleRestart = () => {
    setQuestions(getRandomQuestions(selectedDeck.deckData));
    setCurrentIndex(0);
    setScore(0);
    setUserAnswers([]);
    setShowModal(false);
  };

  // Terug naar home
  const handleGoHome = () => {
    navigate("/");
  };

  // Highscore opslaan bij einde spel
  useEffect(() => {
    if (showModal) {
      saveHighScore(deckKey, score);
      setHighScore(getHighScore(deckKey));
    }
  }, [showModal, score, deckKey]);

  if (!currentQuestion && !showModal) return <div>Loading questions...</div>;

  return (
    <div
      className="game-screen"
      style={{
        "--background-color": selectedDeck.background,
        "--btn-bg-color": selectedDeck.card,
        "--border-color": selectedDeck.border,
      }}
    >
      <header className="game-header">
        <div className="theme-title">{selectedDeck.title}</div>
        <div className="score">Score: {score}</div>
        <div className="round-difficulty">
          <div>
            Ronde: {round > questions.length ? questions.length : round} / {questions.length}
          </div>
          <div>Moeilijkheid: {difficulty}</div>
          <div className={`highscore ${getScoreClass(highScore)}`} style={{ marginTop: "8px", fontWeight: "bold" }}>
            Highscore: {highScore}
          </div>
        </div>
      </header>

      <main className="question-container">
        {!showModal && (
          <>
            <div
              className="question-card"
              style={{
                backgroundColor: selectedDeck.card,
                border: `3px solid ${selectedDeck.border}`,
                color: "white",
              }}
            >
              <h2 className="question-title">{currentQuestion.title}</h2>
            </div>

            <div className="answers">
              {currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={() => handleAnswer(answer)}
                >
                  {answer.title}
                </button>
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="game-footer" />

      {showModal && (
        <ResultModal
          questions={questions}
          userAnswers={userAnswers}
          onRestart={handleRestart}
          onGoHome={handleGoHome}
          score={score}
        />
      )}
    </div>
  );
};

export default GameScreen;
