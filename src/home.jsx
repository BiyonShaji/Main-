import React, { useState } from 'react';

function Home() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      
      <button onClick={alert("Hello")}>
        Home
      </button>
    </div>
  );
}