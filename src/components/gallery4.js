
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../styles/galleries.css'
import { Link } from 'react-router-dom'

const Gallery4 = () =>{
    return(
      <CSSTransitionGroup
      transitionName="galleryTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div className="sticky"><Link to="/" style={{ textDecoration: 'none' , color:'black'}}className="link1">Back to galleries</Link></div>
      <div className="gallerycontent">
        photos
      </div>
      </CSSTransitionGroup>
    )
  }
  export default Gallery4