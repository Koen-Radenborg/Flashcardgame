const generalKnowledgeQuestions = {
    title: 'Algemene Kennis',
    shortDescription: 'Vragen over algemene kennis!!',
    longDescription: `Deze quiz test je kennis over allerlei onderwerpen uit de echte wereld. Van wetenschap, geografie, cultuur, technologie tot geschiedenis en meer — het is een leuke en uitdagende manier om te zien hoeveel je weet over de wereld om je heen. Of je nu je algemene kennis wil opfrissen of gewoon nieuwsgierig bent, deze quiz helpt je om nieuwe feiten te leren en jezelf te testen.`,
    primaryColor: '#DA75E3',
    secondaryColor: '#CD5CD7',
    tertiaryColor: '#FFA1A1',
    beginnerQuestions: [
        {
            id: 1,
            title: "Wat is de hoofdstad van Nederland?",
            answers: [
                { title: "Amsterdam", correct: true },
                { title: "Rotterdam", correct: false },
                { title: "Utrecht", correct: false },
                { title: "Den Haag", correct: false },
            ],
        },
        {
            id: 2,
            title: "Welk dier staat bekend als 'de koning van de jungle'?",
            answers: [
                { title: "Olifant", correct: false },
                { title: "Leeuw", correct: true },
                { title: "Tijger", correct: false },
                { title: "Neushoorn", correct: false },
            ],
        },
        {
            id: 3,
            title: "Hoeveel dagen heeft een gewone kalenderjaar?",
            answers: [
                { title: "365", correct: true },
                { title: "360", correct: false },
                { title: "366", correct: false },
                { title: "364", correct: false },
            ],
        },
        {
            id: 4,
            title: "Welk land staat bekend om de Eiffeltoren?",
            answers: [
                { title: "Italië", correct: false },
                { title: "Spanje", correct: false },
                { title: "Frankrijk", correct: true },
                { title: "Duitsland", correct: false },
            ],
        },
        {
            id: 5,
            title: "Welke planeet staat het dichtst bij de zon?",
            answers: [
                { title: "Venus", correct: false },
                { title: "Mercurius", correct: true },
                { title: "Aarde", correct: false },
                { title: "Mars", correct: false },
            ],
        },
        {
            id: 6,
            title: "Welk voedsel is traditioneel Italiaans?",
            answers: [
                { title: "Sushi", correct: false },
                { title: "Pizza", correct: true },
                { title: "Taco", correct: false },
                { title: "Curry", correct: false },
            ],
        },
        {
            id: 7,
            title: "Wat is de kleur van smaragd?",
            answers: [
                { title: "Rood", correct: false },
                { title: "Blauw", correct: false },
                { title: "Groen", correct: true },
                { title: "Geel", correct: false },
            ],
        },
        {
            id: 8,
            title: "Hoeveel continenten zijn er op aarde?",
            answers: [
                { title: "5", correct: false },
                { title: "6", correct: false },
                { title: "7", correct: true },
                { title: "8", correct: false },
            ],
        },
        {
            id: 9,
            title: "Welke sport speelt men met een racket en een shuttle?",
            answers: [
                { title: "Tennis", correct: false },
                { title: "Badminton", correct: true },
                { title: "Squash", correct: false },
                { title: "Tafeltennis", correct: false },
            ],
        },
        {
            id: 10,
            title: "Wat is het symbool voor waterstof in het periodiek systeem?",
            answers: [
                { title: "O", correct: false },
                { title: "H", correct: true },
                { title: "He", correct: false },
                { title: "C", correct: false },
            ],
        },
        {
            id: 11,
            title: "Welke kleur krijg je door rood en wit te mengen?",
            answers: [
                { title: "Roze", correct: true },
                { title: "Paars", correct: false },
                { title: "Oranje", correct: false },
                { title: "Bruin", correct: false },
            ],
        },
        {
            id: 12,
            title: "Wat is het grootste land ter wereld qua oppervlakte?",
            answers: [
                { title: "China", correct: false },
                { title: "Rusland", correct: true },
                { title: "Canada", correct: false },
                { title: "Verenigde Staten", correct: false },
            ],
        },
        {
            id: 13,
            title: "Wat voor soort dier is een kameleon?",
            answers: [
                { title: "Een vogel", correct: false },
                { title: "Een vis", correct: false },
                { title: "Een hagedis", correct: true },
                { title: "Een zoogdier", correct: false },
            ],
        },
        {
            id: 14,
            title: "Hoeveel tanden heeft een volwassen mens gemiddeld?",
            answers: [
                { title: "28", correct: false },
                { title: "32", correct: true },
                { title: "30", correct: false },
                { title: "36", correct: false },
            ],
        },
        {
            id: 15,
            title: "Wat is de meest gesproken taal ter wereld?",
            answers: [
                { title: "Engels", correct: false },
                { title: "Mandarijn", correct: true },
                { title: "Spaans", correct: false },
                { title: "Hindi", correct: false },
            ],
        },
        {
            id: 16,
            title: "Wat voor soort boom is een eik?",
            answers: [
                { title: "Naaldboom", correct: false },
                { title: "Loofboom", correct: true },
                { title: "Palmboom", correct: false },
                { title: "Bamboe", correct: false },
            ],
        },
        {
            id: 17,
            title: "Welke planeet wordt ook wel 'de rode planeet' genoemd?",
            answers: [
                { title: "Venus", correct: false },
                { title: "Mars", correct: true },
                { title: "Jupiter", correct: false },
                { title: "Saturnus", correct: false },
            ],
        },
        {
            id: 18,
            title: "Hoe heet het kleinste bot in het menselijk lichaam?",
            answers: [
                { title: "Stijgbeugel", correct: true },
                { title: "Knie", correct: false },
                { title: "Elleboog", correct: false },
                { title: "Scheenbeen", correct: false },
            ],
        },
        {
            id: 19,
            title: "Wat is het symbool voor goud in het periodiek systeem?",
            answers: [
                { title: "Au", correct: true },
                { title: "Ag", correct: false },
                { title: "Pb", correct: false },
                { title: "Fe", correct: false },
            ],
        },
        {
            id: 20,
            title: "Welke vogel kan achteruit vliegen?",
            answers: [
                { title: "Kolibrie", correct: true },
                { title: "Arend", correct: false },
                { title: "Zwaluw", correct: false },
                { title: "Pauw", correct: false },
            ],
        },
    ],
    mediumQuestions: [
        {
            id: 21,
            title: "Wie schreef het boek '1984'?",
            answers: [
                { title: "George Orwell", correct: true },
                { title: "Aldous Huxley", correct: false },
                { title: "J.K. Rowling", correct: false },
                { title: "Ernest Hemingway", correct: false },
            ],
        },
        {
            id: 22,
            title: "Wat is het grootste orgaan in het menselijk lichaam?",
            answers: [
                { title: "Lever", correct: false },
                { title: "Huid", correct: true },
                { title: "Hart", correct: false },
                { title: "Long", correct: false },
            ],
        },
        {
            id: 23,
            title: "Welke gas vormt het grootste deel van de aardatmosfeer?",
            answers: [
                { title: "Zuurstof", correct: false },
                { title: "Stikstof", correct: true },
                { title: "Koolstofdioxide", correct: false },
                { title: "Waterstof", correct: false },
            ],
        },
        {
            id: 24,
            title: "In welk jaar begon de Tweede Wereldoorlog?",
            answers: [
                { title: "1939", correct: true },
                { title: "1914", correct: false },
                { title: "1945", correct: false },
                { title: "1929", correct: false },
            ],
        },
        {
            id: 25,
            title: "Welke kunstenaar schilderde de Mona Lisa?",
            answers: [
                { title: "Vincent van Gogh", correct: false },
                { title: "Pablo Picasso", correct: false },
                { title: "Leonardo da Vinci", correct: true },
                { title: "Michelangelo", correct: false },
            ],
        },
        {
            id: 26,
            title: "Wat is de hoofdstad van Canada?",
            answers: [
                { title: "Toronto", correct: false },
                { title: "Ottawa", correct: true },
                { title: "Vancouver", correct: false },
                { title: "Montreal", correct: false },
            ],
        },
        {
            id: 27,
            title: "Wat is de grootste oceaan ter wereld?",
            answers: [
                { title: "Atlantische Oceaan", correct: false },
                { title: "Indische Oceaan", correct: false },
                { title: "Stille Oceaan", correct: true },
                { title: "Arctische Oceaan", correct: false },
            ],
        },
        {
            id: 28,
            title: "Welk element heeft het atoomnummer 1?",
            answers: [
                { title: "Waterstof", correct: true },
                { title: "Helium", correct: false },
                { title: "Zuurstof", correct: false },
                { title: "Koolstof", correct: false },
            ],
        },
        {
            id: 29,
            title: "Welke planeet heeft het grootste aantal manen?",
            answers: [
                { title: "Saturnus", correct: false },
                { title: "Jupiter", correct: true },
                { title: "Mars", correct: false },
                { title: "Neptunus", correct: false },
            ],
        },
        {
            id: 30,
            title: "Wat is het meest gesproken officiële taal in Zuid-Afrika?",
            answers: [
                { title: "Zulu", correct: false },
                { title: "Afrikaans", correct: true },
                { title: "Xhosa", correct: false },
                { title: "Engels", correct: false },
            ],
        },
        {
            id: 31,
            title: "Hoe heet de langste rivier ter wereld?",
            answers: [
                { title: "Nijl", correct: true },
                { title: "Amazone", correct: false },
                { title: "Yangtze", correct: false },
                { title: "Mississippi", correct: false },
            ],
        },
        {
            id: 32,
            title: "Wie was de eerste mens op de maan?",
            answers: [
                { title: "Neil Armstrong", correct: true },
                { title: "Buzz Aldrin", correct: false },
                { title: "Yuri Gagarin", correct: false },
                { title: "Michael Collins", correct: false },
            ],
        },
        {
            id: 33,
            title: "In welk land werd het ballet ontstaan?",
            answers: [
                { title: "Italië", correct: false },
                { title: "Rusland", correct: true },
                { title: "Frankrijk", correct: false },
                { title: "Spanje", correct: false },
            ],
        },
        {
            id: 34,
            title: "Welke uitvinding wordt toegeschreven aan Thomas Edison?",
            answers: [
                { title: "Telefoon", correct: false },
                { title: "Gloeilamp", correct: true },
                { title: "Auto", correct: false },
                { title: "Vliegtuig", correct: false },
            ],
        },
        {
            id: 35,
            title: "Wat is de officiële taal van Brazilië?",
            answers: [
                { title: "Spaans", correct: false },
                { title: "Portugees", correct: true },
                { title: "Frans", correct: false },
                { title: "Engels", correct: false },
            ],
        },
    ],
    advancedQuestions: [
        {
            id: 36,
            title: "Welke oorlog wordt ook wel 'De Grote Oorlog' genoemd?",
            answers: [
                { title: "De Tweede Wereldoorlog", correct: false },
                { title: "De Amerikaanse Burgeroorlog", correct: false },
                { title: "De Eerste Wereldoorlog", correct: true },
                { title: "De Koreaanse Oorlog", correct: false },
            ],
        },
        {
            id: 37,
            title: "Wie was de Britse premier tijdens het grootste deel van de Tweede Wereldoorlog?",
            answers: [
                { title: "Winston Churchill", correct: true },
                { title: "Neville Chamberlain", correct: false },
                { title: "Clement Attlee", correct: false },
                { title: "Margaret Thatcher", correct: false },
            ],
        },
        {
            id: 38,
            title: "In welk jaar viel de Berlijnse Muur?",
            answers: [
                { title: "1989", correct: true },
                { title: "1991", correct: false },
                { title: "1987", correct: false },
                { title: "1993", correct: false },
            ],
        },
        {
            id: 39,
            title: "Welke Nederlandse zeevaarder ontdekte Australië?",
            answers: [
                { title: "Abel Tasman", correct: true },
                { title: "Willem Barentsz", correct: false },
                { title: "Jacques Cartier", correct: false },
                { title: "Christoffel Columbus", correct: false },
            ],
        },
        {
            id: 40,
            title: "Wat was het belangrijkste doel van de Europese Unie toen die werd opgericht?",
            answers: [
                { title: "Economische samenwerking en vrede behouden", correct: true },
                { title: "Militaire alliantie tegen Rusland", correct: false },
                { title: "Culturele uitwisseling", correct: false },
                { title: "Technologische innovatie", correct: false },
            ],
        },
        {
            id: 41,
            title: "Wie schreef 'De Kleine Prins'?",
            answers: [
                { title: "Antoine de Saint-Exupéry", correct: true },
                { title: "Victor Hugo", correct: false },
                { title: "Albert Camus", correct: false },
                { title: "Marcel Proust", correct: false },
            ],
        },
        {
            id: 42,
            title: "Wat was de oorzaak van de Amerikaanse Burgeroorlog?",
            answers: [
                { title: "Belastingproblemen", correct: false },
                { title: "Slavernij en staatsrechten", correct: true },
                { title: "Religieuze conflicten", correct: false },
                { title: "Territoriale geschillen", correct: false },
            ],
        },
        {
            id: 43,
            title: "Wie was de farao van Egypte tijdens de bouw van de Grote Piramide van Gizeh?",
            answers: [
                { title: "Toetanchamon", correct: false },
                { title: "Cheops", correct: true },
                { title: "Ramses II", correct: false },
                { title: "Nefertiti", correct: false },
            ],
        },
        {
            id: 44,
            title: "Wat is het jaar waarin het Romeinse Rijk officieel viel?",
            answers: [
                { title: "476 na Christus", correct: true },
                { title: "1453 na Christus", correct: false },
                { title: "313 na Christus", correct: false },
                { title: "800 na Christus", correct: false },
            ],
        },
        {
            id: 45,
            title: "Wie was de belangrijkste leider van de Sovjet-Unie tijdens de Cubacrisis?",
            answers: [
                { title: "Jozef Stalin", correct: false },
                { title: "Nikita Chroesjtsjov", correct: true },
                { title: "Leon Trotski", correct: false },
                { title: "Michail Gorbatsjov", correct: false },
            ],
        },
    ],
};

export default generalKnowledgeQuestions