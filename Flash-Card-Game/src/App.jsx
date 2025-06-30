import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Deckselect from '../pages/DeckSelect';
import Gamescreen from '../pages/GameScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/DeckSelect" element={<Deckselect />} />
        <Route path="/GameScreen" element={<Gamescreen />} />
      </Routes>
    </Router>
  );
}

export default App;
