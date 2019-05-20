import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredArray: [
                {
                    name: 'Bob',
                    title: 'Smellor',
                    age: 18,
                },
                {
                    name: 'Jim-Bob',
                    title: 'Sewer Cleaner',
                    age: 25,
                },
                {
                    name: 'Whoopi',
                    title: 'Actress',
                    age: 69,
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    assignFilter(prop) {
        let filtered = this.state.unFilteredArray;
        let filteredArray = []
        
        for ( let i = 0; i < filtered.length; i++ ) {
            if ( filtered[i].hasOwnProperty(prop) ) {
              filteredArray.push(filtered[i]);
            }
          }

        this.setState({ filteredArray: filteredArray })
    }

    

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">unFilteredArray { JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.assignFilter(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">filteredArray { JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}