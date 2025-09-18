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
        totalRebirthPoints,    
        totalRebirthPointsView,
        onClick,       
        upgrade1,       
        auto1,          
        auto2,
        rebirth,
        rebirthUpg1,
        upgrade1Gives,
        
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
          <span> стоит 50 кликов, дает +1 клик в секунду</span>
        </span>
      </div>
      <div>
        ребиртх поинтов у тебя: {totalRebirthPoints}
      </div>
      <div>
        <span> количество первых апгрейдов: {upgrade1View} </span>
        <span> доп кликов дает {totalUpgrade1Gives} </span>
      </div>
      <div>
        <span> количество первых автоматических фармилок: {auto1View} </span>
        <span> доп кликов в секунду: {totalAuto1Gives}</span>
      </div>
      <div>
        <span> количество вторых автоматических фармилок: {auto2View} </span>
        <span> доп кликов в секунду: {totalAuto2Gives}</span>
      </div>
      <div>
        <button onClick={onClick}>
    кнопочка
        </button>
      </div>
      <div>
        <button onClick={upgrade1}>
    первая прокачка.
        </button>
        <span> стоит 25 кликов, дает +{upgrade1Gives} клик</span>
      </div>
      <div>
        <button onClick={auto1}>
          кнопка автоматического фарма.
        </button>
        <span> стоит 50 кликов, дает +1 клик в секунду</span>
      </div>
      <div>
        <button onClick={auto2}>
          вторая кнопка автоматического фарма.
        </button>
        <span> стоит 250 кликов, дает +3 клика в секунду</span>
      </div>
      <div><button onClick={rebirthUpg1}>ребиртх апгрейд 1</button></div>
      <div><button onClick={rebirth}>сделать ребиртх</button>
      <span> за это ты получишь {totalRebirthPointsView}</span>
      </div>
    </div>
  );
  
}
export default App;
