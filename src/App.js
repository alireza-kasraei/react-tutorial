import React,{Component} from 'react';
import Ninjas from './Ninjas';
import AddNewNinja from './AddNewNinja';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  state = {
    ninjas: [
      { name: 'ninja1', age: 10, belt: 'black', id: 1 },
      { name: 'ninja2', age: 11, belt: 'blue', id: 2 },
      { name: 'ninja3', age: 12, belt: 'bb', id: 3 },
      { name: 'ninja3', age: 12, belt: 'bb', id: 4 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas,ninja];
    this.setState({ninjas:ninjas});
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id!== id
    });
    console.log(ninjas);
    this.setState({ninjas:ninjas});
    
  }

  render() {
    return (
      <div className="App">
        <Ninjas ninjas={this.state.ninjas} handleDelete={this.deleteNinja}/>
        <AddNewNinja addNinja={this.addNinja} />
      </div>
    );
  }
}



export default App;
