import React, { Component } from 'react'

export default class Palindrome extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    chkPally(userInput) {
        let isPally = userInput
        isPally = isPally.split('').reverse().join('')
        // console.log(isPally)
        if (isPally === userInput) {
            this.setState({ palindrome: 'true'})
        } else {
            this.setState({ palindrome: 'false'})
        }
    }



    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.chkPally(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
            </div>
        )
    }
}