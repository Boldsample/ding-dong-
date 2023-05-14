import { useEffect, useState } from 'react';


const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();
   

    const [countDown, setCountDown] = useState(
      new Date().getTime() - countDownDate 
      );
     
  
  
    useEffect(() => {
        if(countDown >0 ){
            const interval = setTimeout(() => {
              setCountDown(new Date() - countDownDate);
            }, 1000);
            
        }
     
      
    }, [countDown]);  


    return countDown;
  };
  
  const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.abs(Math.floor(((countDown % (1000 * 60)) / 1000) - 60))
  
    return [days, hours, minutes, seconds];
  };
  
  export { useCountdown };
