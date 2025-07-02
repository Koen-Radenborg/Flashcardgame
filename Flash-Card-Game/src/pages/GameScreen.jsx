import React, { useState } from "react";
import dierenFeitjesQuestions from "../decks/aminalFactsDeck";
import englishQuestions from "../decks/englishDeck";
import frontEndQuestions from "../decks/front-endDeck";
import historyQuestions from "../decks/historyDeck";
import generalKnowledgeQuestions from "../decks/generalKnowledgeDeck";
import "../GameScreen.css";

// Functie om n willekeurige items te pakken uit een array
function getRandomItems(arr, n) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

// Thema kleuren per deck
const themes = {
  generalKnowledge: {
    background: "#FCD9FF",
    card: "#DA75E3",
    border: "#CD5CD7",
    title: generalKnowledgeQuestions.title,
    questions: [
      ...getRandomItems(generalKnowledgeQuestions.beginnerQuestions, 10),
      ...getRandomItems(generalKnowledgeQuestions.mediumQuestions, 6),
      ...getRandomItems(generalKnowledgeQuestions.advancedQuestions, 4),
    ],
  },
  english: {
    background: "#FFA1A1",
    card: "#FF6060",
    border: "#EA4343",
    title: englishQuestions.title,
    questions: [
      ...getRandomItems(englishQuestions.beginnerQuestions, 10),
      ...getRandomItems(englishQuestions.mediumQuestions, 6),
      ...getRandomItems(englishQuestions.advancedQuestions, 4),
    ],
  },
  frontEnd: {
    background: "#E0F7FA",
    card: "#318EA6",
    border: "#1E758B",
    title: frontEndQuestions.title,
    questions: [
      ...getRandomItems(frontEndQuestions.beginnerQuestions, 10),
      ...getRandomItems(frontEndQuestions.mediumQuestions, 6),
      ...getRandomItems(frontEndQuestions.advancedQuestions, 4),
    ],
  },
  history: {
    background: "#FFE5D1",
    card: "#F19646",
    border: "#D88033",
    title: historyQuestions.title,
    questions: [
      ...getRandomItems(historyQuestions.beginnerQuestions, 10),
      ...getRandomItems(historyQuestions.mediumQuestions, 6),
      ...getRandomItems(historyQuestions.advancedQuestions, 4),
    ],
  },
  animalFacts: {
    background: "#E1F7E4",
    card: "#4FAB5D",
    border: "#40914C",
    title: dierenFeitjesQuestions.title,
    questions: [
      ...getRandomItems(dierenFeitjesQuestions.beginnerQuestions, 10),
      ...getRandomItems(dierenFeitjesQuestions.mediumQuestions, 6),
      ...getRandomItems(dierenFeitjesQuestions.advancedQuestions, 4),
    ],
  },
};

// VERANDER HIER het deck dat je wilt gebruiken
const selectedDeckKey = "english";
const selectedDeck = themes[selectedDeckKey];

const GameScreen = () => {
  const questions = selectedDeck.questions;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];

  const getDifficulty = (index) => {
    const total = questions.length;
    if (index < total * 0.5) return "Makkelijk";
    if (index < total * 0.8) return "Medium";
    return "Moeilijk";
  };

  const difficulty = getDifficulty(currentIndex);
  const round = currentIndex + 1;

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      alert(`Einde quiz! Score: ${score} / ${questions.length}`);
      setCurrentIndex(0);
      setScore(0);
    }
  };

  const handleAnswer = (answer) => {
    if (answer.correct) setScore((prev) => prev + 1);
    handleNext();
  };

  if (!currentQuestion) return <div>Loading questions...</div>;

  return (
    <div
      className="game-screen"
      style={{
        "--background-color": selectedDeck.background,
        "--btn-bg-color": selectedDeck.card,
      }}
    >
      <header className="game-header">
        <div className="theme-title">{selectedDeck.title}</div>
        <div className="top-info">
          <div className="score">Score: {score}</div>
          <div className="round-difficulty">
            <div>Ronde: {round} / {questions.length}</div>
            <div>Moeilijkheid: {difficulty}</div>
          </div>
        </div>
      </header>

      <main className="question-area">
        <div
          className="question-card"
          style={{
            backgroundColor: selectedDeck.card,
            border: `3px solid ${selectedDeck.border}`,
          }}
        >
          <h2 className="question-title" style={{ color: "white" }}>
            {currentQuestion.title}
          </h2>
          <p style={{ color: "white" }}>
            {currentQuestion.description || "vraag over het onderwerp van de vraag"}
          </p>
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
      </main>

      <footer className="game-footer" />
    </div>
  );
};

export default GameScreen;
