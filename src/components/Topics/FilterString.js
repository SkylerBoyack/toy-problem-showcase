import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor(){
        super()
        this.state ={
           name: ['sky','kyle','jordan','ty','bill','sam','kaleb'],
           userInput: '',
           filteredName: []
        }
    }

    HandleChange(val){
        this.setState({ userInput: val })
    }
    
    filterName(userInput){
    let name = this.state.name
    let filteredName = [];

    for(let i = 0; i < name.length; i++){
        if(name[i].includes(userInput) ){
            filteredName.push(name[i])
        }
    }
   this.setState({filteredName:filteredName}) 
}
    
    render(){
        return(
            <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"> Names: { JSON.stringify(this.state.name)}</span>
            <input className="inputLine" onChange={(e)=> this.HandleChange(e.target.value)}/>
            <button className="confirmationButton" onClick={()=> this.filterName(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterStringRB"> Filtered Names:{JSON.stringify(this.state.filteredName)} </span>
          </div>  
        )
    }

}