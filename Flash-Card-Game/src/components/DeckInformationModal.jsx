import React, { useEffect, useState } from "react";

//this thing gets your highscore from the local storage
const getHighScore = (deckKey) => {
  try {
    const scores = JSON.parse(localStorage.getItem("highScores")) || {};
    return scores[deckKey] || 0;
  } catch {
    return 0;
  }
};

const DeckInformationModal = ({
  title,
  longDesc,
  button,
  primaryColor,
  secondaryColor,
  tertiaryColor,
  onClose,
  deckKey,
}) => {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (deckKey) {
      setHighScore(getHighScore(deckKey));
    }
  }, [deckKey]);

  return (
    <div onClick={onClose} className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm bg-black/30">
      <div
        className="rounded-xl px-8 py-6 w-[800px] text-white shadow-lg"
        style={{
          backgroundColor: tertiaryColor,
          border: `3px solid ${secondaryColor}`,
        }}
      >
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl pb-2 font-semibold">{title}</h2>
            <p className="text-sm text-white/90">{longDesc}</p>
          </div>

          <p className="text-sm mt-2">High score: {highScore}</p>

          <div className="flex justify-end gap-3">
            <button
              className="text-2xl text-white px-6 py-2 rounded-full"
              style={{
                backgroundColor: primaryColor,
                border: `2px solid ${secondaryColor}`,
              }}
              onClick={button}
            >
              Go go go!!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckInformationModal;
