   import { useEffect, useState } from "react";
   export const useAllInfo = () => {
    const [upgrade1Gives, setUpgrade1Gives] = useState(1);
    const [totalRebirthPoints, setTotalRebirthPoints] = useState(0);
    const [totalRebirthPointsView, setTotalRebirthPointsView] = useState(0);
    const [totalAuto1Gives, setTotalAuto1Gives] = useState(0);
    const [totalAuto2Gives, setTotalAuto2Gives] = useState(0);
    const [totalUpgrade1Gives, setTotalUpgrade1Gives] = useState(0);
    const [score, setScore] = useState(1);
    const [clickPerOne, setClickPerOne] = useState(1);
    const [upgrade1View, setUpgrade1View] = useState(0);
    const [auto1View, setAuto1View] =useState(0);
    const [auto2View, setAuto2View] =useState(0);
    
      function rebirthMayView(){
         if (score <=1000){
            setTotalRebirthPointsView(totalRebirthPointsView => totalRebirthPointsView = 0)
         } else {
            setTotalRebirthPointsView(totalRebirthPointsView => score/1000)
         }  
      }
    function upgrade1() {
      if (score >= 25) {
        setScore(score => score - 25)
        setTotalUpgrade1Gives (totalUpgrade1Gives => totalUpgrade1Gives + upgrade1Gives)
        setClickPerOne (clickPerOne => clickPerOne + upgrade1Gives)
        setUpgrade1View (updgrade1View => updgrade1View + 1)
      }
    }

    function onClick() {
      setScore(score => score + clickPerOne)
    }

    function auto1(){
      if (score >=50) {
        setScore(score => score - 50)
        setInterval(function(){
          setScore(score => score + 1)
        },1000)
        setAuto1View(auto1View => auto1View + 1)
        setTotalAuto1Gives(totalAuto1Gives => totalAuto1Gives + 1)
      }
    }
    function auto2(){
      if (score >=250) {
        setScore(score => score - 250)
        setInterval(function(){
          setScore(score => score + 3)
        },1000)
        setAuto2View(auto2View => auto2View + 1)
        setTotalAuto2Gives(totalAuto2Gives => totalAuto2Gives + 3)
      }
    }
    function rebirth() {
      setTotalRebirthPoints(totalRebirthPoints => score/1000)
      setScore(score => score * 0)
        setTotalUpgrade1Gives (totalUpgrade1Gives => totalUpgrade1Gives * 0)
        setClickPerOne (clickPerOne => clickPerOne =1)
        setUpgrade1View (updgrade1View => updgrade1View * 0)
        setAuto1View(auto1View => auto1View * 0)
        setTotalAuto1Gives(totalAuto1Gives => totalAuto1Gives * 0)
        setAuto2View(auto2View => auto2View * 0)
        setTotalAuto2Gives(totalAuto2Gives => totalAuto2Gives * 0)
      clearInterval(auto1)
      clearInterval(auto2)
    }
    function rebirthUpg1(){
      if (totalRebirthPoints >=5)
         setTotalRebirthPoints(totalRebirthPoints => totalRebirthPoints - 5)
      setUpgrade1Gives(upgrade1Gives => upgrade1Gives * 2)
    }
    useEffect (() => {
         const intervalId = setInterval(rebirthMayView, 0)

         return () => clearInterval(intervalId) // eslint-disable-next-line
      }, [score])
    return {
        upgrade1,
        auto1,
        auto2,
        onClick,
        rebirth,
        rebirthUpg1,
        
        score,
        clickPerOne,
        totalUpgrade1Gives,
        upgrade1View,
        auto1View,
        auto2View,
        totalAuto1Gives,
        totalAuto2Gives,
        totalRebirthPoints,
        totalRebirthPointsView,
        upgrade1Gives,
        setUpgrade1Gives,
    }
   }