import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
function App() {
    const {tg,onClose, onToggleButton} = useTelegram();

    useEffect(() => {
      tg.ready();
      tg.expand();
    }, [tg])


  return (
    <div className="App">
      work
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
