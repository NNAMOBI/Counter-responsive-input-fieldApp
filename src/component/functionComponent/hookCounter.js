import React, { useState } from 'react'


function HookCounter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>function Component with useState</h1><button onClick={()=>setCount(count + 1)}>Click and increment</button>
            <h1>{count}</h1>
        </div>
    )
}

export default HookCounter
