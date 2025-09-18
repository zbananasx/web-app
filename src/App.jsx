import { useAllInfo } from './hooks/useStates';
import './App.css';

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
  } = useAllInfo();

  // Проверяем, можем ли купить улучшения
  const canBuyUpgrade1 = score >= 25;
  const canBuyAuto1 = score >= 50;
  const canBuyAuto2 = score >= 250;
  const canRebirth = score >= 1000;
  const canBuyRebirthUpg = totalRebirthPoints >= 5;

  return (
    <div className="App">
      {/* Основная статистика */}
      <div className="section">
        <h2 className="section-title"> Статистика</h2>
        <div className="stat-container">
          <div className="stat-row">
            <span className="stat-label">Кликов:</span>
            <span className="stat-value">{score}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Сила клика:</span>
            <span className="stat-value">{clickPerOne}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Ребирт поинтов:</span>
            <span className="stat-value">{totalRebirthPoints}</span>
          </div>
        </div>
      </div>

      {/* Основная кнопка */}
      <button className="click-button" onClick={onClick}>
         ТЫКНУТЬ (+{clickPerOne})
      </button>

      {/* Улучшения клика */}
      <div className="section">
        <h2 className="section-title"> Улучшения</h2>
        <button 
          className={`upgrade-button ${canBuyUpgrade1 ? '' : 'disabled'}`}
          onClick={upgrade1}
          disabled={!canBuyUpgrade1}
        >
           Улучшить клик
          <span className="upgrade-cost">Стоит: 25 кликов</span>
          <span className="upgrade-benefit">Даёт: +{upgrade1Gives} к клику</span>
        </button>

        <button 
          className={`upgrade-button ${canBuyAuto1 ? '' : 'disabled'}`}
          onClick={auto1}
          disabled={!canBuyAuto1}
        >
           Авто-фарм 1
          <span className="upgrade-cost">Стоит: 50 кликов</span>
          <span className="upgrade-benefit">Даёт: +1 клик/сек</span>
        </button>

        <button 
          className={`upgrade-button ${canBuyAuto2 ? '' : 'disabled'}`}
          onClick={auto2}
          disabled={!canBuyAuto2}
        >
           Авто-фарм 2
          <span className="upgrade-cost">Стоит: 250 кликов</span>
          <span className="upgrade-benefit">Даёт: +3 клика/сек</span>
        </button>
      </div>

      {/* Прогресс */}
      <div className="section">
        <h2 className="section-title"> Прогресс</h2>
        <div className="stat-container">
          <div className="stat-row">
            <span className="stat-label">Улучшений клика:</span>
            <span className="stat-value">{upgrade1View}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Авто-фарм 1:</span>
            <span className="stat-value">{auto1View}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Авто-фарм 2:</span>
            <span className="stat-value">{auto2View}</span>
          </div>
        </div>
      </div>

      {/* Ребирт */}
      <div className="rebirth-section">
        <h2 className="section-title">♻️ Ребирт</h2>
        <div className="stat-container" style={{background: 'rgba(255,255,255,0.1)'}}>
          <div className="stat-row">
            <span className="stat-label" style={{color: 'rgba(255,255,255,0.8)'}}>Доступно за ребирт:</span>
            <span className="stat-value" style={{color: 'white'}}>{totalRebirthPointsView}</span>
          </div>
        </div>

        <button 
          className="rebirth-button"
          onClick={rebirth}
          disabled={!canRebirth}
        >
          🔄 Сделать ребирт
        </button>

        <button 
          className="rebirth-button"
          onClick={rebirthUpg1}
          disabled={!canBuyRebirthUpg}
        >
          ✨ Улучшить улучшения (5 поинтов)
        </button>
      </div>
    </div>
  );
}

export default App;