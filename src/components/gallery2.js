
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../styles/galleries.css'

const Gallery2 = () =>{
    return(
      <CSSTransitionGroup
      transitionName="GalleryTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div className="gallerycontent">
        photos
      </div>
      </CSSTransitionGroup>
    )
  }
  export default Gallery2