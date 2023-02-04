import React from 'react'
import { useState } from 'react';

const State = () => {
  // let inputVlaue = 0;
  // const changeHandelar = (e) => {
  //   inputVlaue = e.target.value;
  //   console.log(inputVlaue);
  // };

  const [count, setCount] = useState(0);
  function increment(){
    const se = count + 1;
    setCount(se);

  }
  function decrement(){
    const se = count - 1;
    if(se < 0){
      alert('Sorry, Zero limit crossed');
      
    }
    else{
      setCount(se);
    }
  }

  return (
    <div>
      this is the first state
      <input type="number" placeholder='Enter Your Number' 
        value={count} readOnly
      />
      <br />
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default State
