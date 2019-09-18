import React, {useState} from 'react'

const HookCounter3 = () => {
     
    const [items, setItems] = useState([])

    // the addItem is an onclick function that when clicked, it listens to the event
    //and pushes an item to the array variable called items
    const addItem = () => {
        setItems([...items, {
            id: items.length,
        value: Math.floor(Math.random() * 10 ) + 1
        }

        ])
    }
    return (
        <div>
            
            <button onClick={addItem}>add a number</button>
            <ul>
                {
                    items.map(item => (<li key={item.id}>{item.value}</li>))
                }
            </ul>
        </div>
    )
}

export default HookCounter3;
