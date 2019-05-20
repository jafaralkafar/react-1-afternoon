import React, { Component } from 'react'

export default class Sum extends Component {
    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange(val) {
        this.setState({ number1: parseInt(val, 10) })
    }

    handleChange1(val) {
        this.setState({ number2: parseInt(val, 10) })
    }

    getSum(num1, num2) {
        let sum = num1 + num2
        this.setState({ sum: sum })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <input className="inputLine" onChange={e => this.handleChange1(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.getSum(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Sum: { this.state.sum }</span>
            </div>
        )
    }
}