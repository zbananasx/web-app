import React, { useState } from 'react';
function App() {
    const [score, setScore] = useState(1)
    const [clickPerOne, setClickPerOne] = useState(1)
    function onClick() {
      setScore(score => score + clickPerOne)
    }
    function updgrade1() {
      if (score >= 25) {
        setScore(score => score - 25)
        setClickPerOne (clickPerOne => clickPerOne + 1)
      }
    }
  return (
    <div className="App">
      <div>
        <span>
          сила клика: {clickPerOne}
        </span>
      </div>
      <div>
        <span>
          кликов у тебя: {score}
        </span>
      </div>
      <div>
        <button onClick={onClick}>
    кнопочка
        </button>
      </div>
      <div>
        <button onClick={updgrade1}>
    апгрейд на +1
        </button>
      </div>
    </div>
  );
}

export default App;
