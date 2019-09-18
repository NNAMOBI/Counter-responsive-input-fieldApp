import React, { useState } from 'react'




function HookName() {

    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })

    // The spread operator helps you merger the value you type in the input field jsut like how setState 
    //sets the state to the current value
    return (
        <div>
            <form>
            <input type="text" value={name.firstName} onChange={(e) => setName({ ...name, firstName: e.target.value })} /><br/>
            <input type="text" value={name.lastName} onChange={(e) => setName({ ...name, lastName: e.target.value })} />
            <h1>My firstname is {name.firstName}</h1>
                <h1>My lastname is {name.lastName}</h1>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookName;
