import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/works.css'
import Gallery1 from './gallery1';
import Gallery2 from './gallery2';
import Logo from '../logo1_orig.jpg'
import { Link } from 'react-router-dom'

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
      <Link to="/gallery1"><img src={Logo} style={{height:200, width:250}} onClick/></Link>
      <div className="container">
      Gallery 1
      </div>
</div>

<div className="polaroid"style={{margin:10}}>
<Link to="/gallery2">
      <img src={Logo} style={{height:200, width:250}}/></Link>
      <div className="container">
      Gallery 2
</div>
</div>
<div className="polaroid"style={{margin:10}}>
<Link to="/gallery3"><img src={Logo} style={{height:200, width:250}} onClick/></Link>
      <div className="container">
      Gallery 3
</div>
</div>
<p></p>
<div className="polaroidd" style={{margin:10}}>
<Link to="/gallery4"><img src={Logo} style={{height:200, width:250}} onClick/></Link>
      <div className="container">
      Gallery 4
      </div>
</div>

<div className="polaroidd"style={{margin:10}}>
<Link to="/gallery5"><img src={Logo} style={{height:200, width:250}} onClick/></Link>
      <div className="container">
      Gallery 5
      </div>
</div>
<div className="polaroidd"style={{margin:10}}>
<Link to="/gallery6"><img src={Logo} style={{height:200, width:250}} onClick/></Link>
      <div className="container">
      Gallery 6
      </div>
</div>
</div>

    
    </CSSTransitionGroup>
  )
}
 
export default Works