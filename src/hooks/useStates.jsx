   import { useState } from "react";
   export const useAllInfo = () => {
    const [totalAuto1Gives, setTotalAuto1Gives] = useState(0);
    const [totalAuto2Gives, setTotalAuto2Gives] = useState(0);
    const [totalUpgrade1Gives, setTotalUpgrade1Gives] = useState(0);
    const [score, setScore] = useState(1);
    const [clickPerOne, setClickPerOne] = useState(1);
    const [upgrade1View, setUpgrade1View] = useState(0);
    const [auto1View, setAuto1View] =useState(0);
    const [auto2View, setAuto2View] =useState(0);
        
    function upgrade1() {
      if (score >= 25) {
        setScore(score => score - 25)
        setTotalUpgrade1Gives (totalUpgrade1Gives => totalUpgrade1Gives + 1)
        setClickPerOne (clickPerOne => clickPerOne + 1)
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
    return {
        upgrade1,
        auto1,
        auto2,
        onClick,
        
        
        score,
        clickPerOne,
        totalUpgrade1Gives,
        upgrade1View,
        auto1View,
        auto2View,
        totalAuto1Gives,
        totalAuto2Gives,
    }
   }