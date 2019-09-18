import React, { useState } from 'react'


function HookCounter2() {
    let initialCount = 0;
    const [count, setCount] = useState(initialCount)

    const increment5 = (prevCount) => {
        for (let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>click to increment</button>
            <button onClick={() => setCount(count - 1)}>click to Decrement</button>
            <h1>count:- {count}</h1>
            <button onClick={increment5}>Click to increment5</button>{count}
            
        </div>
    )
}

export default HookCounter2;
