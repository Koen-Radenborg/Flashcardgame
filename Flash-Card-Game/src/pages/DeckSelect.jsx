import englishDeck from '../decks/englishDeck.js'
import dierenFeitjesQuestions from '../decks/aminalFactsDeck.js';
import historyQuestions from '../decks/historyDeck.js';
import frontEndQuestions from '../decks/front-endDeck.js';
import generalKnowledgeQuestions from '../decks/generalKnowledgeDeck.js';
import Deck from '../components/Deck.jsx';
import gsap from 'gsap'
import { useEffect } from 'react';


const DeckSelect = () => {
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

    const decks = [englishDeck, historyQuestions, frontEndQuestions, dierenFeitjesQuestions, generalKnowledgeQuestions]

    return (
        <>
            <section className='flex text-5xl w-[100vw] gap-16 bg-[#F2D2BD] h-[100vh] justify-evenly items-center flex-col'>
                <h1 className='p-4 bg-[#ffb481] rounded-2xl text-white w-3/5 text-center'>kies een!! ♪(^∇^*)</h1>
                <div className='flex gap-24 flex-wrap justify-center'>
                    {
                        decks.map((deck) => (
                            <Deck key={deck.title} title={deck.title} bgColor={deck.primaryColor} borderColor={deck.secondaryColor} shortDesc={deck.shortDescription} />
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default DeckSelect;