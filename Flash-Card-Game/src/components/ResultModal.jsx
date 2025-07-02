import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResultModal = ({ questions, userAnswers, onRestart, score }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();

  const toggleSelected = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const getScoreClass = (score) => {
    if (score === 20) return "score-lightblue";
    if (score >= 18) return "score-gold";
    if (score >= 15) return "score-silver";
    if (score >= 10) return "score-bronze";
    return "score-gray";
  };

  const handleGoHome = () => {
    navigate("/"); // Redirect naar home pagina
  };

  return (
    <div className="result-modal-overlay">
      <div className="result-modal-container">
        <div className="header-strip">
          <div className="result-modal-header">
            <h2 className="result-modal-title">Resultaten Overzicht</h2>
            <div className={`score ${getScoreClass(score)}`}>{score} / 20</div>
          </div>
        </div>

        <div className="result-grid">
          {questions.map((q, i) => {
            const userAnswer = userAnswers[i];
            const isCorrect = userAnswer?.correct === true;
            const isSelected = selectedIndex === i;

            return (
              <div
                key={i}
                onClick={() => toggleSelected(i)}
                className={`result-card ${isCorrect ? "correct" : "incorrect"} ${isSelected ? "expanded" : ""}`}
                title="Klik om details te bekijken"
              >
                <div className="result-card-title">
                  {q.title.length > 40 && !isSelected
                    ? q.title.slice(0, 37) + "..."
                    : q.title}
                </div>

                {isSelected && (
                  <div className="result-card-details">
                    <div>
                      <strong>Goed antwoord:</strong>{" "}
                      {q.answers.find((a) => a.correct)?.title || "Onbekend"}
                    </div>
                    <div>
                      <strong>Jouw antwoord:</strong>{" "}
                      {userAnswer?.title || "Niet ingevuld"}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="result-modal-buttons">
          <button onClick={onRestart} className="restart-btn">
            Opnieuw Spelen
          </button>

          <button onClick={handleGoHome} className="home-btn">
            Terug naar Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
