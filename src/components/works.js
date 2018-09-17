import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/works.css'
import Gallery1 from './gallery1';
import Gallery2 from './gallery2';
import Logo from '../logo1_orig.jpg'
 
const Works = () =>{
  return(
    <CSSTransitionGroup
    transitionName="worksTransition"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}>
    <div className="workscontent">
      Galleries
      </div>
      
      <div className="galleriesdiv" style={{padding:25, paddingLeft:70, display: 'inline-block'}}>
      <div className="polaroid" style={{margin:10}}>
      <img src={Logo} style={{height:200, width:250}}/>
      <div className="container">
Gallery1
</div>
</div>

<div className="polaroid"style={{margin:10}}>
      <img src={Logo} style={{height:200, width:250}}/>
      <div className="container">
Gallery2
</div>
</div>
<div className="polaroid"style={{margin:10}}>
      <img src={Logo} style={{height:200, width:250}}/>
      <div className="container">
Gallery3
</div>
</div>
<div className="polaroidd" style={{margin:10}}>
      <img src={Logo} style={{height:200, width:250}}/>
      <div className="container">
Gallery4
</div>
</div>

<div className="polaroidd"style={{margin:10}}>
      <img src={Logo} style={{height:200, width:250}}/>
      <div className="container">
Gallery5
</div>
</div>
<div className="polaroidd"style={{margin:20}}>
      <img src={Logo} style={{height:200, width:250}}/>
      <div className="container">
Gallery6
</div>
</div>
</div>

    
    </CSSTransitionGroup>
  )
}
 
export default Works