import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
class App extends Component {
  state={
    Users:[
      {UserName:'Argit'},
      {UserName:'Rohit'},
      {UserName:'Mandeep'}
    ]
  }
  stateManipulateHandler = (event) => {
    this.setState({
      Users:[
        {UserName:'Nipun'},
        {UserName:event.target.value},
        {UserName:'Mandeep'}
      ]
    })
  }
  render() {
    const cssState={
      backgroundColor:'lightgreen',
      border:'2px solid darkgreen',
      borderRadius:'20px',
      color:'white',
      padding:'8px',
      marginTop:'2%',
      fontSize:'15px'
    }
    return (
      <div className="App">
        <ol>
          <UserInput userName={this.state.Users[1].UserName} changed={this.stateManipulateHandler}/>
          <UserOutput userName={this.state.Users[0].UserName}/>
          <UserOutput userName={this.state.Users[1].UserName}/>
          <UserOutput userName={this.state.Users[2].UserName}/>
          <button style={cssState} value="click to manipulate" onClick={this.stateManipulateHandler}>click here to manipulate</button>
        </ol>
      </div>
    );
  }
}

export default App;
