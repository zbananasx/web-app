import { useAllInfo } from './hooks/useStates';

function App() {
const {
        score,
        totalUpgrade1Gives,       
        clickPerOne,   
        upgrade1View, 
        auto1View,      
        auto2View,  
        totalAuto1Gives,
        totalAuto2Gives,    
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
        <span> количество первых апгрейдов: {upgrade1View}</span>
        <span>доп кликов дает {totalUpgrade1Gives}</span>
      </div>
      <div>
        <span> количество первых автоматических фармилок: {auto1View}</span>
        <span>доп кликов в секунду: {totalAuto1Gives}</span>
      </div>
      <div>
        <span> количество вторых автоматических фармилок: {auto2View}</span>
        <span>доп кликов в секунду: {totalAuto2Gives}</span>
      </div>
      <div>
        <button onClick={onClick}>
    кнопочка
        </button>
      </div>
      <div>
        <span>стоит 25 кликов, дает +1 клик</span>
        <button onClick={upgrade1}>
    первая прокачка.
        </button>
      </div>
      <div>
        <span>стоит 50 кликов, дает +1 клик в секунду</span>
        <button onClick={auto1}>
          кнопка автоматического фарма.
        </button>
      </div>
      <div>
        <span>стоит 250 кликов, дает +3 клика в секунду</span>
        <button onClick={auto2}>
          вторая кнопка автоматического фарма.
        </button>
      </div>
    </div>
  );
  
}
export default App;
