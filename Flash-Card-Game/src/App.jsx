import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import DeckSelect from './pages/DeckSelect';
import GameScreen from './pages/GameScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/deckselect" element={<DeckSelect />} />
        <Route path="/gamescreen/:deckKey" element={<GameScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
