import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/about.css'
 
const About = () =>{
  return(
    <CSSTransitionGroup
    transitionName="aboutTransition"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}>
    <div className="aboutcontent">
    <p>A home of amateur photography</p>
        <p>Find me on <a href="http://www.instagram.com/sjebeng/" target="_blank" style={{color:'pink'}}>Instagram</a></p>
        <p>Email me @ sara.snvr@gmail.com</p>
    </div>
    </CSSTransitionGroup>
  )
}
 
export default About