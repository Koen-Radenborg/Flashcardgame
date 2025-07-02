const Deck = ({ title, shortDesc, bgColor, borderColor, onClick }) => {
  return (
    <div
      id="float"
      className="w-[170px] h-[230px] p-2 cursor-pointer rounded-2xl select-none"
      onClick={onClick}
      style={{ backgroundColor: bgColor, border: `3px solid ${borderColor}` }}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
    >
      <h2 className="text-white text-xl font-bold">{title}</h2>
      <p className="text-white text-base">{shortDesc}</p>
    </div>
  );
};

export default Deck;
