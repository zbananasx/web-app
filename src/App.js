import { useEffect } from 'react';
import './App.css';
import { useTelegram } from 'src/hooks/useTelegram';
function App() {
    const { onToggleButton} = useTelegram();

    useEffect(() => {
      tg.ready()
    }, [])


  return (
    <div className="App">
      work
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
