import React, { Component } from 'react'

export default class Multiply extends Component {
    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            total: null,
        }
    }

    handleChange(val) {
        this.setState({ number1: parseInt(val, 10)})
    }
    handleChange1(val) {
        this.setState({ number2: parseInt(val, 10)})
    }

    getTotal(num1, num2) {
        let total = num1 * num2
        this.setState({ total: total })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Multiply</h4>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <input className="inputLine" onChange={e => this.handleChange1 (e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.getTotal(this.state.number1, this.state.number2)}>Multiply</button>
                <span className="resultsBox">Total: {this.state.total }</span>
            </div>
        )
    }
}