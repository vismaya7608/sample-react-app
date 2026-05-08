import React,{useState} from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(0)

  const increment = () => {if(count< 10){
    setCount(count + 1);
  }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
    <h1>{count}</h1>
    <button onClick={increment}>Count</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={() => setCount(0)}>Reset</button>
    </>
  );

};

export default Counter