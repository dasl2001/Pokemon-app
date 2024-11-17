import React, { useState } from 'react';
import PokemonApplication from './components/PokemonApplication';
import './App.css';
function App() {
  const [showApp, setShowApp] = useState(false);
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {!showApp ? (
        <button onClick={() => setShowApp(true)} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Start Pokemon App
        </button>
      ) : (
        <PokemonApplication />
      )}
    </div>
  );
}
export default App;

