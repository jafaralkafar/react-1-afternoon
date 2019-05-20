import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredString: ['Hello', 'I', 'am', 'alive'],
            userInput: '',
            filteredString: [],
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }
    
    filterString(userInput) {
        let unFilteredString = this.state.unFilteredString
        let filteredString = unFilteredString.filter((elem) => elem.toLowerCase().includes(userInput))

        this.setState({ filteredString: filteredString})
    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">unFilteredString: { JSON.stringify(this.state.unFilteredString, null, 10)}</span>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterString(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">filteredString: { JSON.stringify(this.state.filteredString, null, 10)}</span>
            </div>
        )
    }
}