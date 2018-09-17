import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Works from './works'
import About from './about'
import React from 'react'

const Content = () =>{
    return(
      <Switch>
        <Route exact path="/" component={Works}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    )
  }
   
  export default Content