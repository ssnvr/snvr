import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/home.css'
import Logo from '../logo1_orig.jpg'
 

const Home = () =>{

    return(
    <CSSTransitionGroup
        transitionName="homeTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="homecontent">
          idk
        </div>
    </CSSTransitionGroup>
    )
  }
   
  export default Home