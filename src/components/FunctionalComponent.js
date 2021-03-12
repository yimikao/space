import { useRef } from 'react';
import { useEffect } from 'react';

const FunctionalComponent = () => {
    

useEffect(() => {
  const timer = setInterval(()=>{
    console.log('I am here again');
  }, 8000);

  return () => {
    // Stop the interval timer
    clearInterval(timer)
  };
});



    const refElement = useRef(null);

    const changeColor = () => {
        refElement.current.style.color = 'red';
    }

  return (
    <div>
        <h1 ref={refElement}>i hack stuff</h1>
        <button onClick={changeColor}> change h1</button>
      
    </div>
  );
};


export default FunctionalComponent;