
import './App.css';
import React from "react";
import Login from './view/login/login';
// import { click } from "@testing-library/user-event/dist/click";

class App extends React.Component {
  render(){
    return(<div className='App'>
      <Login/>
    </div>)
  }
}

export default App;
