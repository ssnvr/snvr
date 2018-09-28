import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/home.css'
import { Link } from 'react-router-dom'


const socialMediaIcons = [
  {
    url: 'https://www.instagram.com/sjebeng/',
    className: 'ig',
  }]

const Home = () =>{

    return(
    <CSSTransitionGroup
        transitionName="homeTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="homecontent">
        
        </div>
   
    </CSSTransitionGroup>
    )
  }
   
  export default Home