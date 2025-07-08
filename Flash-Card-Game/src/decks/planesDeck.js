const planesQuestions = {
    title: 'Vliegtuigen',
    shortDescription: 'Vragen over vliegtuigen!!',
    longDescription: 'Hai Jason!! ♪(^∇^*) Deze quiz test je kennis over de wereld van de luchtvaart: van basis-weetjes over passagiersvliegtuigen tot diepgaandere onderwerpen zoals aerodynamica, regelgeving en cockpit-instrumenten. Alle vragen zijn in het Nederlands en verdeeld in drie niveaus: beginner, medium en gevorderd.',
    primaryColor: '#2E8BC0',
    secondaryColor: '#155A8A',
    tertiaryColor: '#7CC6F8',
    beginnerQuestions: [
        {
            id: 1,
            title: 'Welke fabrikant produceert de 737-serie?',
            answers: [
                { title: 'Airbus', correct: false },
                { title: 'Boeing', correct: true },
                { title: 'Embraer', correct: false },
                { title: 'Bombardier', correct: false }
            ]
        },
        {
            id: 2,
            title: 'Wat is het grootste passagiersvliegtuig ter wereld (2025)?',
            answers: [
                { title: 'Boeing 747-8', correct: false },
                { title: 'Airbus A350-1000', correct: false },
                { title: 'Airbus A380', correct: true },
                { title: 'Boeing 777-9', correct: false }
            ]
        },
        {
            id: 3,
            title: 'Waarvoor staat de afkorting ICAO?',
            answers: [
                { title: 'International Civil Aviation Organization', correct: true },
                { title: 'International Cargo Airline Office', correct: false },
                { title: 'Integrated Cockpit Avionics Order', correct: false },
                { title: 'Inter-Company Aircraft Operations', correct: false }
            ]
        },
        {
            id: 4,
            title: 'Welk onderdeel van een vliegtuig levert het grootste deel van de lift?',
            answers: [
                { title: 'De vleugels', correct: true },
                { title: 'Het landingsgestel', correct: false },
                { title: 'De staart', correct: false },
                { title: 'De motoren', correct: false }
            ]
        },
        {
            id: 5,
            title: 'Op welke luchthaven hoort de IATA-code “AMS”?',
            answers: [
                { title: 'Brussel-Zaventem', correct: false },
                { title: 'Amsterdam Schiphol', correct: true },
                { title: 'Rotterdam-The Hague', correct: false },
                { title: 'Eindhoven Airport', correct: false }
            ]
        },
        {
            id: 6,
            title: 'In welke fase van de vlucht wordt de term “rotatie” (rotate) gebruikt?',
            answers: [
                { title: 'Tijdens taxiën', correct: false },
                { title: 'Tijdens de start wanneer het neuswiel wordt opgetild', correct: true },
                { title: 'Tijdens de cruise', correct: false },
                { title: 'Tijdens de landing', correct: false }
            ]
        },
        {
            id: 7,
            title: 'Welk instrument toont de hoogte boven zeeniveau in de cockpit?',
            answers: [
                { title: 'Snelheidsmeter', correct: false },
                { title: 'Hoogtemeter (altimeter)', correct: true },
                { title: 'Kunstmatige horizon', correct: false },
                { title: 'Variometer', correct: false }
            ]
        },
        {
            id: 8,
            title: 'Welke brandstof gebruiken de meeste straalpassagiersvliegtuigen?',
            answers: [
                { title: 'Benzine', correct: false },
                { title: 'Jet A-1 (kerosine)', correct: true },
                { title: 'Diesel', correct: false },
                { title: 'LPG', correct: false }
            ]
        },
        {
            id: 9,
            title: 'Hoe heet de verticale staartvin die zorgt voor koers-stabiliteit?',
            answers: [
                { title: 'Vleugellet', correct: false },
                { title: 'Verticale stabilisator', correct: true },
                { title: 'Aileron', correct: false },
                { title: 'Slat', correct: false }
            ]
        },
        {
            id: 10,
            title: 'Welke Boeing widebody staat bekend onder de bijnaam “Dreamliner”?',
            answers: [
                { title: 'Boeing 777', correct: false },
                { title: 'Boeing 787', correct: true },
                { title: 'Boeing 767', correct: false },
                { title: 'Boeing 747', correct: false }
            ]
        },
        {
            id: 11,
            title: 'Wat is de radio-callsign van KLM-vluchten?',
            answers: [
                { title: 'Speedbird', correct: false },
                { title: 'Lufthansa', correct: false },
                { title: 'KLM', correct: true },
                { title: 'Dutch Wings', correct: false }
            ]
        },
        {
            id: 12,
            title: 'Wat is een typische kruishoogte voor langeafstandsvluchten?',
            answers: [
                { title: '3 000 voet', correct: false },
                { title: '35 000 voet (ongeveer 10–12 km)', correct: true },
                { title: '500 voet', correct: false },
                { title: '50 000 voet', correct: false }
            ]
        },
        {
            id: 13,
            title: 'Wie maakten in 1903 de eerste gemotoriseerde vlucht?',
            answers: [
                { title: 'Gebroeders Wright', correct: true },
                { title: 'Santos-Dumont', correct: false },
                { title: 'Charles Lindbergh', correct: false },
                { title: 'Amelia Earhart', correct: false }
            ]
        },
        {
            id: 14,
            title: 'Waar staat de afkorting VFR voor?',
            answers: [
                { title: 'Visual Flight Rules', correct: true },
                { title: 'Variable Flap Ratio', correct: false },
                { title: 'Vertical Flight Range', correct: false },
                { title: 'Visual Fuel Reserve', correct: false }
            ]
        },
        {
            id: 15,
            title: 'Welke Airbus-familie concurreert rechtstreeks met de Boeing 737?',
            answers: [
                { title: 'A220', correct: false },
                { title: 'A320-familie', correct: true },
                { title: 'A330', correct: false },
                { title: 'A350', correct: false }
            ]
        },
        {
            id: 16,
            title: 'Waarvoor staat de afkorting APU aan boord van een vliegtuig?',
            answers: [
                { title: 'Auxiliary Power Unit', correct: true },
                { title: 'Aviation Pilot Unit', correct: false },
                { title: 'Air Pressure Utility', correct: false },
                { title: 'Automatic Parking Unit', correct: false }
            ]
        },
        {
            id: 17,
            title: 'Welk navigatiesysteem gebruikt satellieten om positie te bepalen?',
            answers: [
                { title: 'ADF', correct: false },
                { title: 'VOR', correct: false },
                { title: 'GPS', correct: true },
                { title: 'DME', correct: false }
            ]
        },
        {
            id: 18,
            title: 'Welke kleur heeft het navigatielicht op de linkervleugeltip?',
            answers: [
                { title: 'Groen', correct: false },
                { title: 'Rood', correct: true },
                { title: 'Wit', correct: false },
                { title: 'Blauw', correct: false }
            ]
        },
        {
            id: 19,
            title: 'Hoeveel motoren heeft een Cessna 172?',
            answers: [
                { title: 'Geen (zwever)', correct: false },
                { title: 'Eén', correct: true },
                { title: 'Twee', correct: false },
                { title: 'Vier', correct: false }
            ]
        },
        {
            id: 20,
            title: 'In welk frequentiebereik (band) vindt standaard VHF-luchtvaartcommunicatie plaats?',
            answers: [
                { title: '30-88 MHz (VHF militair)', correct: false },
                { title: '118-137 MHz (VHF burgerluchtvaart)', correct: true },
                { title: '960-1215 MHz (DME)', correct: false },
                { title: '2,4 GHz (Wi-Fi)', correct: false }
            ]
        }
    ],

    mediumQuestions: [
        {
            id: 21,
            title: 'Waarvoor staat de afkorting ETOPS in tweemotorige langeafstandsvluchten?',
            answers: [
                { title: 'Extended-range Twin-engine Operational Performance Standards', correct: true },
                { title: 'Emergency Take-Off Procedure System', correct: false },
                { title: 'Enhanced Turbine Over-Pressure Safety', correct: false },
                { title: 'Engine Time On Performance Scale', correct: false }
            ]
        },
        {
            id: 22,
            title: 'Welk toestel doorbrak in 1947 als eerste de geluidsbarrière?',
            answers: [
                { title: 'North American X-15', correct: false },
                { title: 'Bell X-1', correct: true },
                { title: 'Concorde', correct: false },
                { title: 'Lockheed SR-71', correct: false }
            ]
        },
        {
            id: 23,
            title: 'Wat is de ICAO-code voor London Heathrow Airport?',
            answers: [
                { title: 'EGKK', correct: false },
                { title: 'EGLL', correct: true },
                { title: 'EGSS', correct: false },
                { title: 'EGLC', correct: false }
            ]
        },
        {
            id: 24,
            title: 'Welke airline gebruikt de radio-callsign “Speedbird”?',
            answers: [
                { title: 'British Airways', correct: true },
                { title: 'Virgin Atlantic', correct: false },
                { title: 'Qantas', correct: false },
                { title: 'Lufthansa', correct: false }
            ]
        },
        {
            id: 25,
            title: 'Wat is het doel van “slats” aan de voorrand van een vleugel?',
            answers: [
                { title: 'Brandstof besparen tijdens cruise', correct: false },
                { title: 'Lift verhogen bij lage snelheid', correct: true },
                { title: 'Motoren koelen', correct: false },
                { title: 'Cabinedruk regelen', correct: false }
            ]
        },
        {
            id: 26,
            title: 'Welke passagiersjet was in 1987 het eerste met volledig fly-by-wire besturing?',
            answers: [
                { title: 'Airbus A320', correct: true },
                { title: 'Boeing 767', correct: false },
                { title: 'Concorde', correct: false },
                { title: 'Airbus A300', correct: false }
            ]
        },
        {
            id: 27,
            title: 'Wat betekent Mach 1?',
            answers: [
                { title: 'Dubbele snelheid van het geluid', correct: false },
                { title: 'Snelheid van het geluid', correct: true },
                { title: 'Halve snelheid van het geluid', correct: false },
                { title: 'Geen relatie met geluid', correct: false }
            ]
        },
        {
            id: 28,
            title: 'Uit welk hoofdmateriaal bestaat de romp van de Boeing 787 Dreamliner?',
            answers: [
                { title: 'Aluminiumlegering', correct: false },
                { title: 'Koolstofvezelcomposiet', correct: true },
                { title: 'Titanium', correct: false },
                { title: 'Staal', correct: false }
            ]
        },
        {
            id: 29,
            title: 'Wat is de hoofdtaak van TCAS aan boord?',
            answers: [
                { title: 'Detecteren van vulkanische as', correct: false },
                { title: 'Voorkomen van botsingen in de lucht', correct: true },
                { title: 'Automatisch landen', correct: false },
                { title: 'Brandstofverbruik meten', correct: false }
            ]
        },
        {
            id: 30,
            title: 'Welke Airbus met vier motoren heeft twee volledige passagiersdekken?',
            answers: [
                { title: 'A340-600', correct: false },
                { title: 'A380', correct: true },
                { title: 'A350-1000', correct: false },
                { title: 'A330-900', correct: false }
            ]
        },
        {
            id: 31,
            title: 'Wat is volgens regelgeving de maximale cabinedrukhoogte voor passagiersvluchten?',
            answers: [
                { title: '5 000 voet', correct: false },
                { title: '8 000 voet', correct: true },
                { title: '12 000 voet', correct: false },
                { title: '15 000 voet', correct: false }
            ]
        },
        {
            id: 32,
            title: 'Welk instrument toont pitch en rol en heet ook wel kunstmatige horizon?',
            answers: [
                { title: 'Gyrokompas', correct: false },
                { title: 'Attitude-indicator', correct: true },
                { title: 'Variometer', correct: false },
                { title: 'Chronometer', correct: false }
            ]
        },
        {
            id: 33,
            title: 'Hoe heet de hoek tussen de vleugelkoorde en de inkomende luchtstroom?',
            answers: [
                { title: 'Drift-hoek', correct: false },
                { title: 'Aanvalshoek', correct: true },
                { title: 'Neuspeil', correct: false },
                { title: 'Glijpad', correct: false }
            ]
        },
        {
            id: 34,
            title: 'Hoe heet het internationale spellingsalfabet dat in de luchtvaart wordt gebruikt?',
            answers: [
                { title: 'Morse-alfabet', correct: false },
                { title: 'NATO/ICAO-alfabet', correct: true },
                { title: 'ASCII-code', correct: false },
                { title: 'Braille-schrift', correct: false }
            ]
        },
        {
            id: 35,
            title: 'Welke supersonische passagiersjet vloog tussen 1969 en 2003?',
            answers: [
                { title: 'Tupolev TU-144', correct: false },
                { title: 'Concorde', correct: true },
                { title: 'Lockheed L-2000', correct: false },
                { title: 'Boom Overture', correct: false }
            ]
        }
    ],
    advancedQuestions: [
        {
            id: 36,
            title: 'Welke nieuwe Boeing-widebody heeft opvouwbare vleugeltips en heet officieel 777-9?',
            answers: [
                { title: 'Boeing 767-400', correct: false },
                { title: 'Boeing 777-9 (777X)', correct: true },
                { title: 'Boeing 787-10', correct: false },
                { title: 'Boeing 747-8', correct: false }
            ]
        },
        {
            id: 37,
            title: 'Wat betekent de snelheid “V1” tijdens de startaanloop?',
            answers: [
                { title: 'Snelheid voor flaps intrekken', correct: false },
                { title: 'Beslissingssnelheid: na deze snelheid moet het toestel doorstarten bij een motorstoring', correct: true },
                { title: 'Rotatiesnelheid waarbij de neus wordt opgetild', correct: false },
                { title: 'Maximale taxiërsnelheid', correct: false }
            ]
        },
        {
            id: 38,
            title: 'Welk fysisch principe verklaart gedeeltelijk de lift door drukverlaging bij hogere stroomsnelheden?',
            answers: [
                { title: 'Wet van Pascal', correct: false },
                { title: 'Bernoulli-principe', correct: true },
                { title: 'Wet van Hooke', correct: false },
                { title: 'Doppler-effect', correct: false }
            ]
        },
        {
            id: 39,
            title: 'Wat is de primaire functie van een yaw-damper?',
            answers: [
                { title: 'Houdt de hoogte constant', correct: false },
                { title: 'Corrigeert Dutch-roll-neigingen door zijwaartse bewegingen te dempen', correct: true },
                { title: 'Verkleint landingssnelheid', correct: false },
                { title: 'Vermindert motortrillingen', correct: false }
            ]
        },
        {
            id: 40,
            title: 'Wat houdt een “ETOPS-180” goedkeuring in?',
            answers: [
                { title: 'Het toestel mag 180 minuten zonder enige navigatiehulpmiddelen vliegen', correct: false },
                { title: 'Een tweemotorig vliegtuig mag maximaal 180 minuten vliegtijd verwijderd zijn van een uitwijkluchthaven', correct: true },
                { title: 'De kruishoogte is beperkt tot 18 000 voet', correct: false },
                { title: 'Het toestel mag niet boven 180 knopen klimmen', correct: false }
            ]
        },
        {
            id: 41,
            title: 'Welke motor werd speciaal ontwikkeld voor de Airbus A350 XWB-serie?',
            answers: [
                { title: 'GE90', correct: false },
                { title: 'Rolls-Royce Trent XWB', correct: true },
                { title: 'Pratt & Whitney PW1000G', correct: false },
                { title: 'CFM LEAP-1A', correct: false }
            ]
        },
        {
            id: 42,
            title: 'Welke ICAO-bijlage (Annex) behandelt de luchtwaardigheid van vliegtuigen?',
            answers: [
                { title: 'Annex 6 – Operation of Aircraft', correct: false },
                { title: 'Annex 8 – Airworthiness', correct: true },
                { title: 'Annex 10 – Aeronautical Telecommunications', correct: false },
                { title: 'Annex 14 – Aerodromes', correct: false }
            ]
        },
        {
            id: 43,
            title: 'Wat is “bleed air” en waarvoor wordt het hoofdzakelijk gebruikt in een modern verkeersvliegtuig?',
            answers: [
                { title: 'Buitenlucht via vleugeltips voor drag-reductie', correct: false },
                { title: 'Afgetapte gecomprimeerde motorgas voor cabine-perslucht en anti-icing', correct: true },
                { title: 'Brandstofdamp die uit de tanks wordt geleid', correct: false },
                { title: 'Lucht uit de bagageruimte voor koeling', correct: false }
            ]
        },
        {
            id: 44,
            title: 'Wat beschrijft de term “Dutch roll”?',
            answers: [
                { title: 'Een plotselinge daling door windschering', correct: false },
                { title: 'Een gekoppelde vlieg-oscillatie in yaw en rol', correct: true },
                { title: 'Een manoeuvre om snel hoogte te verliezen', correct: false },
                { title: 'Een autobrake-instelling voor natte baan', correct: false }
            ]
        },
        {
            id: 45,
            title: 'Welke druk meet een pitotbuis direct?',
            answers: [
                { title: 'Statische druk', correct: false },
                { title: 'Totale druk (statisch + dynamisch)', correct: true },
                { title: 'Cabinedruk', correct: false },
                { title: 'Olie-druk in de motor', correct: false }
            ]
        }
    ]
};

export default planesQuestions;
