import React from 'react'
import { HomeButton, LangButtons } from '../NavigationComponents'
import ParallaxEffect from '../../common/parallaxEffect'
import VelaMainPageImage from '../../media/images/vela_main.png'
import VelaSerialsPageImage from '../../media/images/vela_serials.jpg'
import VelaSerialPageImage from '../../media/images/vela_serial.png'
import HTML5 from '../../media/images/icos/HTML5.svg'
import CSS3 from '../../media/images/icos/CSS3.svg'
import JS from '../../media/images/icos/JS.svg'
import jQuery from '../../media/images/icos/jQuery.svg'
import mySQL from '../../media/images/icos/mySQL.svg'
import PHP from '../../media/images/icos/PHP.svg'
const backImage = require('../../media/images/velaBackground.svg')

function ProjectHeader({ text }) {
   return (
      <div className="projectsHeader">
         <div className="projectsHeader__projectName">
            <h1 id={text.id}>{text.projectName}</h1>
            <p> {text.credo} </p>
         </div>

         <div className="projectsHeader__projectIntroduction">
            <p> {text.text}</p>
         </div>
         <ProjectInfo text={text} />
      </div>
   )
}

function ProjectInfo({ text }) {
   return (
      <div className="projectsHeader__projectInfo">
         <ul>
            <li>
               {text.info.roleName} {text.role}
            </li>
            <li>
               {text.info.dateName} {text.info.dateDesc}
            </li>
            <li>
               Site: <a href={text.siteLink}> {text.site} </a>
            </li>
         </ul>
      </div>
   )
}

class Projects extends React.Component {
   render() {
      const text = this.props.text
      const headerParallaxImg = require(`../../${text.image}`)

      return (
         <div
            className="projectsContainer"
            style={{
               backgroundImage: `url(../${backImage})`
            }}
         >
            <div className="navigationPanel">
               <HomeButton id={text.id} text={text.aboutme} />
               <LangButtons text={text} props={this.props} />
            </div>

            <ParallaxEffect image={headerParallaxImg}>
               <ProjectHeader text={text} />
            </ParallaxEffect>

            <div className="projectContent">
               <p className="mainProblem">
                  Spanish is gaining increasing popularity in the world. But,
                  unfortunately, there are not so many resources for studying it
                  in the entertainment format. Accordingly, was decided to
                  create a learning platform based on watching TV shows and
                  movies using markish subtitles.
               </p>
               <section className="projectObjective">
                  <h2>Objective</h2>
                  <i>
                     Create markish language educational site based on watching
                     TV shows with subtitles, also implement
                     <mark>custom videoplayer</mark>
                     with handle <mark>subtitle manipulation</mark>,
                     <mark>authorisation system</mark> and <mark>database</mark>
                     .
                  </i>
               </section>
               <section className="projectExplanation">
                  <h2>Main Page</h2>
                  <div className="projectExplanation__problem">
                     <h3>Problem </h3>
                     <p>
                        Needed according web-design, which implement smooth
                        colors.
                     </p>
                  </div>
                  <div className="projectExplanation__solution">
                     <h3>Solution</h3>
                     <p>
                        Was created design of the site in dark tones. Which was
                        inspired by:
                        <br /> <mark>Ororo.tv</mark> <br />
                        <mark>Netflix.com</mark> <br />
                        <mark>Europixhd.net</mark>
                     </p>
                  </div>
                  <figure>
                     <img src={VelaMainPageImage} />
                  </figure>
                  <p className="projectExplanation__imageText">
                     Main page included <mark>live walpaper</mark> wich
                     instantly attached attention. Also was implemented
                     <mark> live search</mark> and <mark>live scroll</mark>.
                  </p>
               </section>
               <section className="projectExplanation">
                  <h2>Second Page</h2>
                  <div className="projectExplanation__problem">
                     <h3>Problem </h3>
                     <p>
                        Page with serials had to include everything required for
                        chosing serials with comfort.
                     </p>
                  </div>
                  <div className="projectExplanation__solution">
                     <h3>Solution</h3>
                     <p>
                        Desided to create database with registered users and add
                        to page common functionality and information without
                        redandancy.
                     </p>
                  </div>
                  <figure>
                     <img src={VelaSerialsPageImage} />
                  </figure>
                  <p className="projectExplanation__imageText">
                     Second page included easy way to switch TV shows, ability
                     to <mark>add favorite series </mark>and
                     <mark>post comments</mark>.
                  </p>
               </section>
               <section className="projectExplanation">
                  <h2>Third Page</h2>
                  <div className="projectExplanation__problem">
                     <h3>Problem </h3>
                     <p>Common player werent suitable for needed objectives.</p>
                  </div>
                  <div className="projectExplanation__solution">
                     <h3>Solution</h3>
                     <p>
                        Created custom video player with the ability to control
                        subtitles.
                     </p>
                  </div>
                  <figure>
                     <img src={VelaSerialPageImage} />
                  </figure>
                  <p className="projectExplanation__imageText">
                     Now user can easyly manipulate subtitles: <br />
                     <mark>moving</mark>, <mark>swithing</mark>,<mark>etc</mark>
                     .
                  </p>
               </section>
               <section className="projectStack">
                  <h3> Stack of technologies</h3>
                  <figure>
                     <img src={HTML5} />
                     <img src={CSS3} />
                     <img src={JS} />
                     <img src={jQuery} />
                     <img src={PHP} />
                     <img src={mySQL} />
                  </figure>
               </section>
               <footer className="footer">
                  <h3>Contanct Me</h3>
                  <h3>Look into next project</h3>
               </footer>
            </div>
         </div>
      )
   }
}

export default Projects

/* 

function ProjectProblem({ text }) {
   return (
      <div className="projectProblem">
         <p>{text.problem}</p>
      </div>
   )
}

function ProjectObjectives({ text }) {
   return (
      <div className="projectObjectives">
         <h3> {text.objectiveTitle} </h3>
         <ul>
            {text.objectives.map(objective => {
               return <li> {objective} </li>
            })}
         </ul>
      </div>
   )
}

function ProjectResult({ text }) {
   return (
      <div className="projectResults">
         <h3> {text.resultTitle} </h3>
         <ul>
            {text.result.map(result => {
               return <li> {result} </li>
            })}
         </ul>
      </div>
   )
}

function ProjectStack({ text }) {
   return (
      <div className="projectStack">
         <h3> {text.technologyStackTitle} </h3>
         {text.technologyStack.map(technology => {
            return <li> {technology} </li>
         })}
      </div>
   )
}

*/
