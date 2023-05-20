import './App.css'
import React from 'react';
import {Link}  from "react-router-dom";
import {Route, Switch } from "react-router-dom";
import Header  from "./components/Header/Header";
import Home from './components/Home';
import Instagram from './components/Instagram';
import Facebook from './components/Facebook';
import Content from './components/Content/Content';

const App=()=>{
  return (
    <div className="App">
      <Header>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/Instagram' component={Instagram}></Route>
        <Route exact path='/Facebook' component={Facebook}></Route>
      </Switch>
      </Header>
      <Content/>
    </div>
  );
}

export default App;
