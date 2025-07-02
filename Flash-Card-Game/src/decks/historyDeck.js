const historyQuestions = {
    title: 'Geschiedenis',
    shortDescription: 'Vragen over de geschiedenis!!',
    longDescription: `Deze quiz test je kennis van belangrijke gebeurtenissen, personen, en tijdperken uit de wereldgeschiedenis. Van oude beschavingen en middeleeuwse koninkrijken tot revoluties en moderne tijden: je leert over invloedrijke momenten die de wereld gevormd hebben. Of je nu een beginner bent, je kennis wil uitbreiden, of een echte geschiedenisfanaat bent, deze quiz daagt je uit en laat je misschien zelfs nieuwe dingen ontdekken over het verleden.`,
    primaryColor: '#F19646',
    secondaryColor: '#D88033',
    tertiaryColor: '#FFA1A1',
    beginnerQuestions: [
        {
            id: 1,
            title: "Wie was de eerste president van de Verenigde Staten?",
            answers: [
                { title: "Abraham Lincoln", correct: false },
                { title: "George Washington", correct: true },
                { title: "Thomas Jefferson", correct: false },
                { title: "John Adams", correct: false },
            ],
        },
        {
            id: 2,
            title: "In welk jaar begon de Tweede Wereldoorlog?",
            answers: [
                { title: "1914", correct: false },
                { title: "1939", correct: true },
                { title: "1945", correct: false },
                { title: "1929", correct: false },
            ],
        },
        {
            id: 3,
            title: "Wat was het oude Romeinse rijk bekend om?",
            answers: [
                { title: "Uitvinding van de stoommachine", correct: false },
                { title: "Het bouwen van wegen en aquaducten", correct: true },
                { title: "De Renaissance kunst", correct: false },
                { title: "De industriële revolutie", correct: false },
            ],
        },
        {
            id: 4,
            title: "Wie was de beroemde ontdekkingsreiziger die Amerika ontdekte in 1492?",
            answers: [
                { title: "Marco Polo", correct: false },
                { title: "Christoffel Columbus", correct: true },
                { title: "Vasco da Gama", correct: false },
                { title: "Ferdinand Magellaan", correct: false },
            ],
        },
        {
            id: 5,
            title: "Wat was de naam van de oude Egyptische schrifttekens?",
            answers: [
                { title: "Cuneiform", correct: false },
                { title: "Hiërogliefen", correct: true },
                { title: "Runen", correct: false },
                { title: "Alfabet", correct: false },
            ],
        },
        {
            id: 6,
            title: "Welke middeleeuwse uitvinding veranderde het leven door het makkelijker maken van informatie verspreiding?",
            answers: [
                { title: "De boekdrukkunst", correct: true },
                { title: "De stoommachine", correct: false },
                { title: "Het kompas", correct: false },
                { title: "De klok", correct: false },
            ],
        },
        {
            id: 7,
            title: "Wie was koning van Engeland tijdens de Armada-oorlog met Spanje?",
            answers: [
                { title: "Koning Hendrik VIII", correct: false },
                { title: "Koning Elizabeth I", correct: true },
                { title: "Koning Richard III", correct: false },
                { title: "Koning George III", correct: false },
            ],
        },
        {
            id: 8,
            title: "Wat was de oorzaak van de Franse Revolutie?",
            answers: [
                { title: "Economische ongelijkheid en ontevredenheid met de monarchie", correct: true },
                { title: "Een oorlog met Engeland", correct: false },
                { title: "De ontdekking van Amerika", correct: false },
                { title: "De val van het Romeinse Rijk", correct: false },
            ],
        },
        {
            id: 9,
            title: "Wat is het symbool van de Amerikaanse onafhankelijkheid?",
            answers: [
                { title: "De Liberty Bell", correct: true },
                { title: "De Eiffeltoren", correct: false },
                { title: "De Big Ben", correct: false },
                { title: "De Taj Mahal", correct: false },
            ],
        },
        {
            id: 10,
            title: "Welke oude beschaving bouwde de piramides?",
            answers: [
                { title: "De Grieken", correct: false },
                { title: "De Romeinen", correct: false },
                { title: "De Egyptenaren", correct: true },
                { title: "De Babyloniërs", correct: false },
            ],
        },
        {
            id: 11,
            title: "In welk jaar viel de Berlijnse Muur?",
            answers: [
                { title: "1989", correct: true },
                { title: "1991", correct: false },
                { title: "1975", correct: false },
                { title: "1961", correct: false },
            ],
        },
        {
            id: 12,
            title: "Wie schreef de 'I Have a Dream' toespraak?",
            answers: [
                { title: "Malcolm X", correct: false },
                { title: "Martin Luther King Jr.", correct: true },
                { title: "Nelson Mandela", correct: false },
                { title: "Barack Obama", correct: false },
            ],
        },
        {
            id: 13,
            title: "Wat was de industriële revolutie?",
            answers: [
                { title: "Een periode van technologische vooruitgang en industrialisatie", correct: true },
                { title: "Een oorlog in Europa", correct: false },
                { title: "Een religieuze beweging", correct: false },
                { title: "Een politieke revolutie", correct: false },
            ],
        },
        {
            id: 14,
            title: "Wie was Napoleon Bonaparte?",
            answers: [
                { title: "Een Franse generaal en keizer", correct: true },
                { title: "Een Britse koning", correct: false },
                { title: "Een Russische tsaar", correct: false },
                { title: "Een Amerikaanse president", correct: false },
            ],
        },
        {
            id: 15,
            title: "Wat is het belangrijkste document van de Verenigde Staten?",
            answers: [
                { title: "De Grondwet", correct: true },
                { title: "Het Verdrag van Versailles", correct: false },
                { title: "De Magna Carta", correct: false },
                { title: "De Onafhankelijkheidsverklaring", correct: false },
            ],
        },
        {
            id: 16,
            title: "Welke gebeurtenis markeert het begin van de Middeleeuwen?",
            answers: [
                { title: "De val van het West-Romeinse Rijk", correct: true },
                { title: "De Renaissance", correct: false },
                { title: "De Franse Revolutie", correct: false },
                { title: "De Verlichting", correct: false },
            ],
        },
        {
            id: 17,
            title: "Wie was Anne Frank?",
            answers: [
                { title: "Een jonge Joods meisje dat een dagboek schreef tijdens WOII", correct: true },
                { title: "Een koningin van Nederland", correct: false },
                { title: "Een wetenschapper", correct: false },
                { title: "Een schrijfster uit de Middeleeuwen", correct: false },
            ],
        },
        {
            id: 18,
            title: "Welke stad werd verwoest door de atoombom in 1945?",
            answers: [
                { title: "Hiroshima", correct: true },
                { title: "Tokio", correct: false },
                { title: "Nagasaki", correct: false },
                { title: "Osaka", correct: false },
            ],
        },
        {
            id: 19,
            title: "Wat was de naam van de slavernijafschaffingsbeweging?",
            answers: [
                { title: "Abolitionisme", correct: true },
                { title: "Revolutionairisme", correct: false },
                { title: "Feminisme", correct: false },
                { title: "Imperialisme", correct: false },
            ],
        },
        {
            id: 20,
            title: "Wie was de leider van de Sovjet-Unie tijdens de Tweede Wereldoorlog?",
            answers: [
                { title: "Joseph Stalin", correct: true },
                { title: "Vladimir Lenin", correct: false },
                { title: "Nikita Chroesjtsjov", correct: false },
                { title: "Leon Trotski", correct: false },
            ],
        },
    ],

    mediumQuestions: [
        {
            id: 21,
            title: "Wat was de belangrijkste oorzaak van de Eerste Wereldoorlog?",
            answers: [
                { title: "De moord op Franz Ferdinand", correct: true },
                { title: "De Franse Revolutie", correct: false },
                { title: "De Industriële Revolutie", correct: false },
                { title: "De val van Constantinopel", correct: false },
            ],
        },
        {
            id: 22,
            title: "Welke economische crisis begon in 1929?",
            answers: [
                { title: "De Grote Depressie", correct: true },
                { title: "De Koude Oorlog", correct: false },
                { title: "De Franse Revolutie", correct: false },
                { title: "De Industriële Revolutie", correct: false },
            ],
        },
        {
            id: 23,
            title: "Wat was de naam van het beleid van rassenscheiding in Zuid-Afrika?",
            answers: [
                { title: "Apartheid", correct: true },
                { title: "Segregatie", correct: false },
                { title: "Jim Crow", correct: false },
                { title: "Rassenscheiding", correct: false },
            ],
        },
        {
            id: 24,
            title: "Wat was de belangrijkste functie van de zijderoute?",
            answers: [
                { title: "Handel tussen Azië en Europa", correct: true },
                { title: "Religieuze pelgrimstochten", correct: false },
                { title: "Militaire campagnes", correct: false },
                { title: "Kolonisatie van Afrika", correct: false },
            ],
        },
        {
            id: 25,
            title: "Wie schreef 'Het Communistisch Manifest'?",
            answers: [
                { title: "Karl Marx en Friedrich Engels", correct: true },
                { title: "Adam Smith", correct: false },
                { title: "John Locke", correct: false },
                { title: "Vladimir Lenin", correct: false },
            ],
        },
        {
            id: 26,
            title: "Wat was de Renaissance?",
            answers: [
                { title: "Een culturele en artistieke beweging in Europa", correct: true },
                { title: "Een oorlog tussen Europese landen", correct: false },
                { title: "Een periode van economische depressie", correct: false },
                { title: "Een wetenschappelijke ontdekking", correct: false },
            ],
        },
        {
            id: 27,
            title: "Wie was de farao tijdens de bouw van de Grote Piramide van Gizeh?",
            answers: [
                { title: "Cheops", correct: true },
                { title: "Toetanchamon", correct: false },
                { title: "Ramses II", correct: false },
                { title: "Akhenaten", correct: false },
            ],
        },
        {
            id: 28,
            title: "Wat was de uitkomst van het Verdrag van Versailles?",
            answers: [
                { title: "Het officiële einde van de Eerste Wereldoorlog", correct: true },
                { title: "Het begin van de Tweede Wereldoorlog", correct: false },
                { title: "De val van het Romeinse Rijk", correct: false },
                { title: "De oprichting van de Verenigde Naties", correct: false },
            ],
        },
        {
            id: 29,
            title: "Wat was het doel van de Koude Oorlog?",
            answers: [
                { title: "Politieke en ideologische rivaliteit tussen de VS en de Sovjet-Unie", correct: true },
                { title: "Een militaire oorlog tussen China en Japan", correct: false },
                { title: "De Franse Revolutie", correct: false },
                { title: "De Industriële Revolutie", correct: false },
            ],
        },
        {
            id: 30,
            title: "Wie was Elizabeth I?",
            answers: [
                { title: "Koningin van Engeland tijdens de late 16e eeuw", correct: true },
                { title: "Koningin van Frankrijk", correct: false },
                { title: "Koningin van Spanje", correct: false },
                { title: "Koningin van Nederland", correct: false },
            ],
        },
        {
            id: 31,
            title: "Wat was het doel van de kruistochten?",
            answers: [
                { title: "Het terugwinnen van het Heilige Land", correct: true },
                { title: "Het veroveren van Europa", correct: false },
                { title: "De verspreiding van de Renaissance", correct: false },
                { title: "De vestiging van handelsposten", correct: false },
            ],
        },
        {
            id: 32,
            title: "Wie was de leider van de Sovjet-Unie tijdens de Koude Oorlog?",
            answers: [
                { title: "Nikita Chroesjtsjov", correct: true },
                { title: "Joseph Stalin", correct: false },
                { title: "Leon Trotski", correct: false },
                { title: "Vladimir Lenin", correct: false },
            ],
        },
        {
            id: 33,
            title: "Wat was de belangrijkste oorzaak van de val van het Romeinse Rijk?",
            answers: [
                { title: "Interne politieke instabiliteit en invasies", correct: true },
                { title: "De ontdekking van Amerika", correct: false },
                { title: "De Renaissance", correct: false },
                { title: "De Industriële Revolutie", correct: false },
            ],
        },
        {
            id: 34,
            title: "Wat was het doel van de Magna Carta?",
            answers: [
                { title: "Beperking van de macht van de koning", correct: true },
                { title: "Het uitbreiden van het rijk", correct: false },
                { title: "Religieuze hervormingen", correct: false },
                { title: "Het stichten van een democratie", correct: false },
            ],
        },
        {
            id: 35,
            title: "Wat was de functie van de Gouden Eeuw in Nederland?",
            answers: [
                { title: "Een periode van grote welvaart en culturele bloei", correct: true },
                { title: "Een oorlog met Spanje", correct: false },
                { title: "De komst van Napoleon", correct: false },
                { title: "De bouw van de Eiffeltoren", correct: false },
            ],
        },
    ],

    advancedQuestions: [
        {
            id: 36,
            title: "Wat was het belang van het Congres van Wenen in 1815?",
            answers: [
                { title: "Herstel van de Europese orde na de Napoleontische oorlogen", correct: true },
                { title: "Het begin van de Eerste Wereldoorlog", correct: false },
                { title: "De onafhankelijkheid van de Verenigde Staten", correct: false },
                { title: "De oprichting van de Europese Unie", correct: false },
            ],
        },
        {
            id: 37,
            title: "Wie was de leider van de Franse revolutie?",
            answers: [
                { title: "Maximilien Robespierre", correct: true },
                { title: "Napoleon Bonaparte", correct: false },
                { title: "Louis XVI", correct: false },
                { title: "Jean-Jacques Rousseau", correct: false },
            ],
        },
        {
            id: 38,
            title: "Wat was de oorzaak van de val van Constantinopel in 1453?",
            answers: [
                { title: "De Ottomaanse verovering", correct: true },
                { title: "De Kruistochten", correct: false },
                { title: "De Zwarte Dood", correct: false },
                { title: "De Renaissance", correct: false },
            ],
        },
        {
            id: 39,
            title: "Wat was het doel van de Spaanse inquisitie?",
            answers: [
                { title: "Opsporen en uitroeien van ketters", correct: true },
                { title: "Verovering van nieuwe gebieden", correct: false },
                { title: "Uitbreiding van handel", correct: false },
                { title: "Religieuze hervorming", correct: false },
            ],
        },
        {
            id: 40,
            title: "Wat was de betekenis van de Verlichting in de 18e eeuw?",
            answers: [
                { title: "Een beweging die verstand, wetenschap en individuele rechten benadrukte", correct: true },
                { title: "Een militaire campagne", correct: false },
                { title: "Een economische crisis", correct: false },
                { title: "Een artistieke stroming", correct: false },
            ],
        },
        {
            id: 41,
            title: "Welke rol speelde de Hanze in de middeleeuwse handel?",
            answers: [
                { title: "Een handelsverbond van steden in Noord-Europa", correct: true },
                { title: "Een oorlogsbond", correct: false },
                { title: "Een religieuze orde", correct: false },
                { title: "Een koninkrijk", correct: false },
            ],
        },
        {
            id: 42,
            title: "Wat waren de belangrijkste gevolgen van de Franse Revolutie?",
            answers: [
                { title: "Afschaffing van de monarchie en invoering van de republiek", correct: true },
                { title: "Begin van de Middeleeuwen", correct: false },
                { title: "Herstel van het Romeinse Rijk", correct: false },
                { title: "Ontstaan van het feodalisme", correct: false },
            ],
        },
        {
            id: 43,
            title: "Wat was het belang van de ontdekking van Amerika voor Europa?",
            answers: [
                { title: "Nieuwe handelsroutes en kolonies", correct: true },
                { title: "Het einde van de Koude Oorlog", correct: false },
                { title: "Het begin van de Industriële Revolutie", correct: false },
                { title: "De val van het Romeinse Rijk", correct: false },
            ],
        },
        {
            id: 44,
            title: "Wie was Genghis Khan?",
            answers: [
                { title: "Stichter van het Mongoolse rijk", correct: true },
                { title: "Een Chinese keizer", correct: false },
                { title: "Een Japanse samoerai", correct: false },
                { title: "Een Egyptische farao", correct: false },
            ],
        },
        {
            id: 45,
            title: "Wat was de betekenis van het Verdrag van Tordesillas?",
            answers: [
                { title: "Verdeling van nieuwe ontdekkingen tussen Spanje en Portugal", correct: true },
                { title: "Begin van de Franse Revolutie", correct: false },
                { title: "Oprichting van de Verenigde Naties", correct: false },
                { title: "Het einde van de Middeleeuwen", correct: false },
            ],
        },
    ],
};

export default historyQuestions;