import React, {Component} from 'react';

export default class FilterObject extends Component {
   
    constructor(){
        super();
      
      
        this.state = {
            people:[
            {
                name:"sky",
                age: 21,
                weight: 120,
            },
            {
                name:'kyle',
                age: 23,
                height: 6,
            },
            {
                name:'jordan',
                eyeColor: "blue",
                weight: 170
            }
        ],

        userInput: '',
        filteredPeople: []
     }
    }

    handleChange(val) {
        this.setState({ userInput: val });
      }

    filterPeople(prop){
    let people = this.state.people
    let filteredPeople = [];

    for(let i = 0; i < people.length; i++) {
        if( people[i].hasOwnProperty(prop) ){
         filteredPeople.push(people[i]);
        }
      }

    this.setState({  filteredPeople: filteredPeople })
   }



    render() {
        return (
        <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: {JSON.stringify(this.state.people, null , 10)}</span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
            <button className="confirmationButton" onClick={ () => this.filterPeople(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredPeople, null, 10) }  </span>
        </div>
        )
    }
}