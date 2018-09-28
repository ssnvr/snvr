import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Works from './works'
import About from './about'
import React from 'react'
import Gallery1 from './gallery1';
import Gallery2 from './gallery2';
import Gallery3 from './gallery3';
import Gallery4 from './gallery4';
import Gallery5 from './gallery5';
import Gallery6 from './gallery6';

const Content = () =>{
    return(
      <Switch>
        <Route exact path="/" component={Works}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/gallery1" component={Gallery1}/>
        <Route path="/gallery2" component={Gallery2}/>
        <Route path="/gallery3" component={Gallery3}/>
        <Route path="/gallery4" component={Gallery4}/>
        <Route path="/gallery5" component={Gallery5}/>
        <Route path="/gallery6" component={Gallery6}/>
      </Switch>
    )
  }
   
  export default Content