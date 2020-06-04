import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Route,Switch} from 'react-router-dom';
import Form from './components/Form';
import Tables from './components/Tables';
function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/form" component={Form}/>
        <Route exact path="/table" component={Tables}/>
    </div>
  );
}

export default App;
