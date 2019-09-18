import React, { Component } from 'react'


class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    handleChange = () => {
        this.setState(((prevState) => {
            return {count: prevState.count + 1}
        }))
    }
    
    render() {
        return (
            <div>
                <h1>Class Component with this.state</h1><button onClick={this.handleChange}>Click to increment</button>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default ClassCounter
