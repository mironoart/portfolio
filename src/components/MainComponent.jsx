import React from 'react'
import MainPageGif from '../containers/gifAnimationContainer'

export function MainComponent({ text, gif }) {
   return (
      <div className="homeContent">
         <div className="portrait">
            <MainPageGif />
         </div>
         <div className="homeAboutMe">
            <h1> {text.h1} </h1>
            <h2> {text.h3} </h2>
            <h3> {text.p1} </h3>
            <p> {text.p2} </p> <br />
            <p> {text.p3} </p> <br />
         </div>
      </div>
   )
}
