import { connect } from 'react-redux'
import { changeLangToRu, changeLangToEn } from '../actions/HomeActions.js'
import { nextProject, prevProject } from '../actions/projectActions.js'
import Projects from '../components/Projects.jsx'

const mapStateToProjectsProps = state => {
   const text = state.projects
   const styles = state.projects.styles
   return {
      text,
      styles
   }
}

const mapDispatchToProjectsProps = dispatch => ({
   changeLangToEn: () => dispatch(changeLangToEn()),
   changeLangToRu: () => dispatch(changeLangToRu()),
   nextProject: () => dispatch(nextProject()),
   prevProject: () => dispatch(prevProject())
})

const ProjectsConnected = connect(
   mapStateToProjectsProps,
   mapDispatchToProjectsProps
)(Projects)

export default ProjectsConnected
