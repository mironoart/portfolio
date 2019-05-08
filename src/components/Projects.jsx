import React from 'react'
import $ from 'jquery'
import { HomeButton, LangButtons } from './NavigationComponents'

class Parallax {
   constructor(object) {
      this.object = object
      this.offset = this.object.offset().top
      this.object.css(
         'background-position-y',
         `-${this.offset + $(window).scrollTop() / 4}px`
      )
   }
   parallax() {
      this.object.css(
         'background-position-y',
         `-${this.offset + $(window).scrollTop() / 4}px`
      )
   }
}

class ParallaxEffect extends React.Component {
   componentDidMount() {
      var el = $(this.el)

      var parallax = new Parallax(el)
      $(window).scroll(function() {
         parallax.parallax()
      })
   }

   render() {
      const { image, children } = this.props
      return (
         <div
            className="parallax"
            ref={el => (this.el = el)}
            style={{
               backgroundImage: `url(../${image})`
            }}
         >
            {children}
         </div>
      )
   }
}

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
      </div>
   )
}

function ProjectInfo({ text }) {
   return (
      <div className="projectInfo">
         <ul>
            <li>
               {text.info.roleName} {text.role}
            </li>
            <li>
               {text.info.dateName} {text.info.dateDesc}
            </li>
            <li>
               <a href={text.siteLink}> {text.site} </a>
            </li>
         </ul>
      </div>
   )
}

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
class Projects extends React.Component {
   render() {
      const text = this.props.text
      const headerParallaxImg = require(`../${text.image}`)

      return (
         <div className="projectsContainer">
            <div className="navigationPanel">
               <HomeButton id={text.id} text={text.aboutme} />
               <LangButtons text={text} props={this.props} />
            </div>

            <ParallaxEffect image={headerParallaxImg}>
               <ProjectHeader text={text} />
            </ParallaxEffect>

            <ProjectInfo text={text} />
            <ProjectProblem text={text} />
            <ProjectObjectives text={text} />
            <ProjectResult text={text} />
            <ProjectStack text={text} />
            <div className="projectNext">Look Next divroject...</div>
         </div>
      )
   }
}

export default Projects
