import { useAllInfo } from './hooks/useStates';

function App() {
const {
        score,
        totalUpgrade1Gives,       
        clickPerOne,   
        upgrade1View, 
        auto1View,      
        auto2View,      
        onClick,       
        upgrade1,       
        auto1,          
        auto2,
        
  } = useAllInfo()
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
        <span> количество первых апгрейдов: {upgrade1View} доп кликов дает {totalUpgrade1Gives}</span>
      </div>
      <div>
        <span> количество первых автоматических фармилок: {auto1View}</span>
      </div>
      <div>
        <span> количество вторых автоматических фармилок: {auto2View}</span>
      </div>
      <div>
        <button onClick={onClick}>
    кнопочка
        </button>
      </div>
      <div>
        <button onClick={upgrade1}>
    первая прокачка. стоит 25 кликов, дает +1 клик
        </button>
      </div>
      <div>
        <button onClick={auto1}>
          кнопка автоматического фарма. стоит 50 кликов, дает +1 клик в секунду
        </button>
      </div>
      <div>
        <button onClick={auto2}>
          вторая кнопка автоматического фарма.
          стоит 250 кликов, дает +3 клика в секунду
        </button>
      </div>
    </div>
  );
  
}
export default App;
