import React from 'react'
import gif from '../media/images/animatedGif.gif'
export function MainComponent({ text }) {
   return (
      <div className="homeContent">
         <div className="portrait">
            <img className="projectsBackgroundImg" src={gif} alt="" />
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
