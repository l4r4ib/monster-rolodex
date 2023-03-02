import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state= {
        monsters: [
          {
            name:'nasrin',
            id:'abc1'
          },
          {
            name:'rini',
            id:'abc2'
          },
          {
            name:'nasrin',
            id:'abc3'
          },
          {
            name:'rini',
            id:'abc4'
          },
        ]
    }
  }

  render(){
    return (
      <div className="App">
      {this.state.monsters.map((monster)=> {
          return <div key= {monster.id}> <h1> {monster.name} </h1>  {console.log(monster.id)} </div>
      })}
      </div>
     
    );
  }
 
}

export default App;
