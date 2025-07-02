const frontEndQuestions = {
    title: 'Front-end',
    shortDescription: 'Vragen over front-end!!',
    longDescription: 'Deze quiz test je kennis van front-end webontwikkeling, inclusief HTML, CSS, JavaScript en moderne tools zoals Flexbox, Grid en React. Je krijgt vragen over structuur, styling, interactie, best practices en veelvoorkomende fouten. Van basiskennis zoals tags en opmaak tot complexere onderwerpen zoals component-gebaseerde ontwikkeling en asynchrone functies—alles komt aan bod. Of je nu een beginner bent die wil oefenen, of een ontwikkelaar die zijn vaardigheden wil opfrissen, deze quiz helpt je om je kennis te meten en uit te breiden. Alle vragen zijn in het Nederlands.',
    primaryColor: '#318EA6',
    secondaryColor: '#1E758B',
    tertiaryColor: '#FFA1A1',
    beginnerQuestions: [
        {
            id: 1,
            title: "Wat doet HTML?",
            answers: [
                { title: "Het voegt stijlen toe aan een pagina", correct: false },
                { title: "Het structureert de inhoud van een webpagina", correct: true },
                { title: "Het maakt een pagina interactief", correct: false },
                { title: "Het slaat gegevens op in een database", correct: false }
            ]
        },
        {
            id: 2,
            title: "Wat betekent CSS?",
            answers: [
                { title: "Creative Style Sheets", correct: false },
                { title: "Colorful Style Scripts", correct: false },
                { title: "Cascading Style Sheets", correct: true },
                { title: "Computer Style Syntax", correct: false }
            ]
        },
        {
            id: 3,
            title: "Wat is het juiste HTML-element voor de grootste koptekst?",
            answers: [
                { title: "<h6>", correct: false },
                { title: "<heading>", correct: false },
                { title: "<h1>", correct: true },
                { title: "<head>", correct: false }
            ]
        },
        {
            id: 4,
            title: "Welke CSS-eigenschap verandert de tekstkleur?",
            answers: [
                { title: "background", correct: false },
                { title: "font-color", correct: false },
                { title: "color", correct: true },
                { title: "text-style", correct: false }
            ]
        },
        {
            id: 5,
            title: "Waar staat CSS voor?",
            answers: [
                { title: "Computer Style Sheets", correct: false },
                { title: "Creative Style System", correct: false },
                { title: "Cascading Style Sheets", correct: true },
                { title: "Colorful Style Sheets", correct: false }
            ]
        },
        {
            id: 6,
            title: "Hoe voeg je JavaScript toe aan een HTML-document?",
            answers: [
                { title: "<js>", correct: false },
                { title: "<script>", correct: true },
                { title: "<javascript>", correct: false },
                { title: "<code>", correct: false }
            ]
        },
        {
            id: 7,
            title: "Welke HTML-tag wordt gebruikt om een afbeelding weer te geven?",
            answers: [
                { title: "<pic>", correct: false },
                { title: "<image>", correct: false },
                { title: "<img>", correct: true },
                { title: "<src>", correct: false }
            ]
        },
        {
            id: 8,
            title: "Welke attribuut geeft de afbeeldingsbron op in een <img>-tag?",
            answers: [
                { title: "href", correct: false },
                { title: "link", correct: false },
                { title: "src", correct: true },
                { title: "source", correct: false }
            ]
        },
        {
            id: 9,
            title: "Welke HTML-tag maakt een regeleinde?",
            answers: [
                { title: "<break>", correct: false },
                { title: "<lb>", correct: false },
                { title: "<br>", correct: true },
                { title: "<hr>", correct: false }
            ]
        },
        {
            id: 10,
            title: "Welke CSS-eenheid is relatief aan de lettergrootte van het element?",
            answers: [
                { title: "px", correct: false },
                { title: "em", correct: true },
                { title: "%", correct: false },
                { title: "vh", correct: false }
            ]
        },
        {
            id: 11,
            title: "Welke van deze is een JavaScript datatype?",
            answers: [
                { title: "div", correct: false },
                { title: "boolean", correct: true },
                { title: "style", correct: false },
                { title: "h1", correct: false }
            ]
        },
        {
            id: 12,
            title: "Waar staat DOM voor?",
            answers: [
                { title: "Document Object Model", correct: true },
                { title: "Data Object Method", correct: false },
                { title: "Document Order Mode", correct: false },
                { title: "Design Oriented Model", correct: false }
            ]
        },
        {
            id: 13,
            title: "Welke selector selecteert alle <p>-elementen in CSS?",
            answers: [
                { title: "#p", correct: false },
                { title: ".p", correct: false },
                { title: "p", correct: true },
                { title: "*p", correct: false }
            ]
        },
        {
            id: 14,
            title: "Welk HTML-element gebruik je voor een ongeordende lijst?",
            answers: [
                { title: "<ul>", correct: true },
                { title: "<ol>", correct: false },
                { title: "<li>", correct: false },
                { title: "<list>", correct: false }
            ]
        },
        {
            id: 15,
            title: "Welke CSS-eigenschap stel je in om de achtergrondkleur te bepalen?",
            answers: [
                { title: "bgcolor", correct: false },
                { title: "background-color", correct: true },
                { title: "color-bg", correct: false },
                { title: "background", correct: false }
            ]
        },
        {
            id: 16,
            title: "Hoe maak je tekst vetgedrukt in HTML?",
            answers: [
                { title: "<strong>", correct: true },
                { title: "<bld>", correct: false },
                { title: "<bold>", correct: false },
                { title: "<text-bold>", correct: false }
            ]
        },
        {
            id: 17,
            title: "Welke van deze is GEEN geldige CSS-eenheid?",
            answers: [
                { title: "px", correct: false },
                { title: "rem", correct: false },
                { title: "kg", correct: true },
                { title: "vh", correct: false }
            ]
        },
        {
            id: 18,
            title: "Welk symbool gebruik je om een klasse te selecteren in CSS?",
            answers: [
                { title: "#", correct: false },
                { title: ".", correct: true },
                { title: "*", correct: false },
                { title: "/", correct: false }
            ]
        },
        {
            id: 19,
            title: "Welk HTML-element gebruik je om video af te spelen?",
            answers: [
                { title: "<movie>", correct: false },
                { title: "<video>", correct: true },
                { title: "<media>", correct: false },
                { title: "<vid>", correct: false }
            ]
        },
        {
            id: 20,
            title: "Welke JavaScript-methode schrijft content naar de browser?",
            answers: [
                { title: "console.log()", correct: false },
                { title: "document.write()", correct: true },
                { title: "write.text()", correct: false },
                { title: "alert()", correct: false }
            ]
        }
    ],

    intermediateQuestions: [
        {
            id: 21,
            title: "Wat is het verschil tussen == en === in JavaScript?",
            answers: [
                { title: "Er is geen verschil", correct: false },
                { title: "=== vergelijkt alleen waarden, == vergelijkt waarden en types", correct: false },
                { title: "== vergelijkt waarden, === vergelijkt waarden en types", correct: true },
                { title: "== is alleen voor strings, === is voor alle types", correct: false }
            ]
        },
        {
            id: 22,
            title: "Wat betekent 'responsive design'?",
            answers: [
                { title: "Een ontwerp dat reageert op muisbewegingen", correct: false },
                { title: "Een ontwerp dat zich aanpast aan verschillende schermformaten", correct: true },
                { title: "Een ontwerp met veel animaties", correct: false },
                { title: "Een ontwerp dat alleen werkt op desktop", correct: false }
            ]
        },
        {
            id: 23,
            title: "Welke methode wordt gebruikt om een element via JavaScript te selecteren op ID?",
            answers: [
                { title: "getElementsByClassName", correct: false },
                { title: "querySelectorAll", correct: false },
                { title: "getElementById", correct: true },
                { title: "getById", correct: false }
            ]
        },
        {
            id: 24,
            title: "Wat doet de CSS-eigenschap 'position: absolute'?",
            answers: [
                { title: "Maakt een element zwevend boven andere elementen", correct: true },
                { title: "Zorgt dat het element volledig uitgeschakeld is", correct: false },
                { title: "Maakt het element scrollbaar", correct: false },
                { title: "Maakt het element sticky", correct: false }
            ]
        },
        {
            id: 25,
            title: "Wat doet `preventDefault()` in JavaScript?",
            answers: [
                { title: "Voorkomt dat de pagina laadt", correct: false },
                { title: "Voorkomt dat de standaardactie van een event wordt uitgevoerd", correct: true },
                { title: "Stopt JavaScript-fouten", correct: false },
                { title: "Reset alle formuliervelden", correct: false }
            ]
        },
        {
            id: 26,
            title: "Welke van deze is een voorbeeld van een semantisch HTML-element?",
            answers: [
                { title: "<div>", correct: false },
                { title: "<span>", correct: false },
                { title: "<article>", correct: true },
                { title: "<br>", correct: false }
            ]
        },
        {
            id: 27,
            title: "Wat is een media query in CSS?",
            answers: [
                { title: "Een manier om animaties te starten", correct: false },
                { title: "Een manier om media (video, audio) te stijlen", correct: false },
                { title: "Een voorwaarde die bepaalt welke stijlen worden toegepast op basis van schermgrootte", correct: true },
                { title: "Een methode om kleuren automatisch aan te passen", correct: false }
            ]
        },
        {
            id: 28,
            title: "Wat betekent 'event bubbling' in JavaScript?",
            answers: [
                { title: "Een event dat op elk element tegelijk wordt geactiveerd", correct: false },
                { title: "Een fout bij het laden van een event", correct: false },
                { title: "Een event dat begint bij het doel-element en omhoog gaat door de DOM", correct: true },
                { title: "Een event dat alleen op het bovenste element gebeurt", correct: false }
            ]
        },
        {
            id: 29,
            title: "Wat doet de `flex` eigenschap in CSS?",
            answers: [
                { title: "Maakt een element onzichtbaar", correct: false },
                { title: "Zet het element in een flexibele container", correct: true },
                { title: "Maakt het element readonly", correct: false },
                { title: "Verwijdert marges en padding", correct: false }
            ]
        },
        {
            id: 30,
            title: "Hoe voeg je een externe CSS-bestand toe aan een HTML-bestand?",
            answers: [
                { title: "<style src='style.css'>", correct: false },
                { title: "<css href='style.css'>", correct: false },
                { title: "<link rel='stylesheet' href='style.css'>", correct: true },
                { title: "<stylesheet>style.css</stylesheet>", correct: false }
            ]
        },
        {
            id: 31,
            title: "Wat is een 'callback' functie in JavaScript?",
            answers: [
                { title: "Een functie die JavaScript afsluit", correct: false },
                { title: "Een functie die wordt doorgegeven als argument en later wordt uitgevoerd", correct: true },
                { title: "Een functie die foutmeldingen afhandelt", correct: false },
                { title: "Een functie die HTML terugstuurt", correct: false }
            ]
        },
        {
            id: 32,
            title: "Wat doet `this` verwijzen naar in JavaScript (in een gewone functie)?",
            answers: [
                { title: "Altijd het globale object", correct: false },
                { title: "Hangt af van hoe de functie wordt aangeroepen", correct: true },
                { title: "De functie zelf", correct: false },
                { title: "Altijd undefined", correct: false }
            ]
        },
        {
            id: 33,
            title: "Wat betekent `NaN` in JavaScript?",
            answers: [
                { title: "Not a Node", correct: false },
                { title: "Null as Number", correct: false },
                { title: "Not a Number", correct: true },
                { title: "New as Null", correct: false }
            ]
        },
        {
            id: 34,
            title: "Wat doet `localStorage` in JavaScript?",
            answers: [
                { title: "Slaat data tijdelijk op in het RAM", correct: false },
                { title: "Slaat data permanent op in de browser", correct: true },
                { title: "Slaat data op in de database", correct: false },
                { title: "Slaat sessies op in cookies", correct: false }
            ]
        },
        {
            id: 35,
            title: "Wat doet `map()` in JavaScript bij een array?",
            answers: [
                { title: "Past een functie toe op elk element en geeft een nieuwe array terug", correct: true },
                { title: "Verwijdert elementen", correct: false },
                { title: "Zoekt een element in de array", correct: false },
                { title: "Maakt een array leeg", correct: false }
            ]
        }
    ],

    advancedQuestions: [
        // Moeilijke vragen 36–45
        {
            id: 36,
            title: "Wat is het verschil tussen null en undefined in JavaScript?",
            answers: [
                { title: "Er is geen verschil", correct: false },
                { title: "undefined betekent dat een variabele niet is gedeclareerd, null is een expliciete lege waarde", correct: true },
                { title: "null betekent fout, undefined betekent nul", correct: false },
                { title: "undefined is een object, null is een string", correct: false }
            ]
        },
        {
            id: 37,
            title: "Wat doet `async/await` in JavaScript?",
            answers: [
                { title: "Maakt code sneller", correct: false },
                { title: "Laat code wachten op een promise voordat hij verdergaat", correct: true },
                { title: "Vertraagt de uitvoering van functies", correct: false },
                { title: "Haalt data op van een API", correct: false }
            ]
        },
        {
            id: 38,
            title: "Wat is hoisting in JavaScript?",
            answers: [
                { title: "Een CSS-effect", correct: false },
                { title: "Het proces waarbij declaraties naar boven worden verplaatst in scope", correct: true },
                { title: "Het laden van scripts na de DOM", correct: false },
                { title: "Het verhogen van de variabelenwaarde", correct: false }
            ]
        },
        {
            id: 39,
            title: "Wat doet een 'closure' in JavaScript?",
            answers: [
                { title: "Een functie die geen parameters accepteert", correct: false },
                { title: "Een functie die toegang heeft tot zijn eigen scope, de buitenste functie en de globale scope", correct: true },
                { title: "Een methode die een variabele sluit", correct: false },
                { title: "Een fout in het geheugenbeheer", correct: false }
            ]
        },
        {
            id: 40,
            title: "Wat is het verschil tussen 'let', 'const' en 'var'?",
            answers: [
                { title: "let is hetzelfde als var, const is voor strings", correct: false },
                { title: "var is function-scoped, let en const zijn block-scoped", correct: true },
                { title: "let en const zijn verouderd", correct: false },
                { title: "const kan later veranderd worden", correct: false }
            ]
        },
        {
            id: 41,
            title: "Wat is een 'virtual DOM'?",
            answers: [
                { title: "Een geanimeerde DOM", correct: false },
                { title: "Een JavaScript-object dat een kopie is van de echte DOM", correct: true },
                { title: "Een DOM die alleen op mobiele apparaten werkt", correct: false },
                { title: "Een CSS-template", correct: false }
            ]
        },
        {
            id: 42,
            title: "Wat is tree shaking in moderne JavaScript-bundling?",
            answers: [
                { title: "Een manier om DOM-elementen te verwijderen", correct: false },
                { title: "Het verwijderen van ongebruikte code uit een bundel", correct: true },
                { title: "Het opnieuw laden van scripts na foutmeldingen", correct: false },
                { title: "Het opschonen van de boomstructuur van HTML", correct: false }
            ]
        },
        {
            id: 43,
            title: "Wat doet 'debouncing' bij events?",
            answers: [
                { title: "Versnelt event-afhandeling", correct: false },
                { title: "Voorkomt dat een functie meerdere keren kort na elkaar wordt aangeroepen", correct: true },
                { title: "Verwijdert events die niet zijn voltooid", correct: false },
                { title: "Maakt een event afhankelijk van een andere", correct: false }
            ]
        },
        {
            id: 44,
            title: "Wat is een 'pure function'?",
            answers: [
                { title: "Een functie zonder return statement", correct: false },
                { title: "Een functie die geen externe effecten heeft en altijd dezelfde output geeft voor dezelfde input", correct: true },
                { title: "Een functie die automatisch async is", correct: false },
                { title: "Een functie die alleen in React werkt", correct: false }
            ]
        },
        {
            id: 45,
            title: "Wat is het nut van het attribuut 'key' in React-lijsten?",
            answers: [
                { title: "Voor het stijlen van componenten", correct: false },
                { title: "Voor animaties", correct: false },
                { title: "Om elementen efficiënt te updaten", correct: true },
                { title: "Om React sneller te maken", correct: false }
            ]
        }
    ]
};

export default frontEndQuestions;