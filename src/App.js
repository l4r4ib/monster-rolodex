import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state= {
        monsters: [ ],
        searchField: ''
    }
    //console.log('state');
  }
   componentDidMount(){
     //console.log('componentdidmount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=>
     this.setState(
      ()=> {
      return { monsters: users};
    },
    )
    )
   }
   onSearchChange = (event)=> {
    console.log(event.target.value)
    const searchField = event.target.value.toLocaleLowerCase();
    
  this.setState(()=> {
    return { searchField }
  })
  }

  render(){
    const {monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster)=> {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search here'
        onChange={onSearchChange }
         />
      {filteredMonsters.map((monster)=> {
          return <div key= {monster.id}> <h1> {monster.name} </h1>  </div>
      })}
      </div>
    );
  }
 
}

export default App;
