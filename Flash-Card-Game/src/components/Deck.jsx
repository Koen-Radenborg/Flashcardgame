const Deck = ({ title, shortDesc, bgColor, borderColor, openModal }) => {
    return (
        <div id="float" className="w-[170px] h-[230px] p-2 cursor-pointer rounded-2xl" onClick={openModal} style={{ backgroundColor: bgColor, border: `3px solid ${borderColor}` }}>
            <h2 className="text-white text-xl font-bold">{title}</h2>
            <p className="text-white text-base ">{shortDesc}</p>
        </div>
    );
}

export default Deck;