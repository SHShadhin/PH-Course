'use client'
import { useState } from "react";

const Counter = () => {
const [count, setCount] = useState(0);

  console.log('counter count', count)
  return (
    <div>
      <h2 className="text-2xl">Counter: {count} </h2>
      <button
        onClick={()=> setCount(count + 1)}
        className="bg-red-400 py-1 rounded-2xl text-2xl px-5 ">Increment</button>
    </div>
  );
};

export default Counter;