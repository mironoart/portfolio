import { connect } from 'react-redux';
import {changeLangToRu, changeLangToEn } from '../actions/HomeActions.js';
import {nextProject, prevProject } from '../actions/projectActions.js';
import {openModal} from '../actions/modalAction';
import {startPreloader, endPreloader} from '../actions/preloaderActions.js';
import Projects from '../components/Projects.jsx';


const mapStateToProjectsProps =(state) => {
    const text = state.projects;
    const styles = state.projects.styles;
    return {
        text,
        styles,
    };
 };

const mapDispatchToProjectsProps = (dispatch) =>(
    {
        changeLangToEn: () => (
            dispatch(changeLangToEn())
        ),
        changeLangToRu: () => (
            dispatch(changeLangToRu())
        ),
        openModal: () => (
            dispatch(openModal())
        ),
        nextProject: () => (
            dispatch(nextProject())
        ),
        prevProject: () => (
            dispatch(prevProject())
        ),
        startPreloader: () => (
            dispatch(startPreloader())
        ),
        endPreloader: () => (
            dispatch(endPreloader())
        ),
    }
)

const ProjectsConnected = connect(
    mapStateToProjectsProps,
    mapDispatchToProjectsProps
  )(Projects);

export default ProjectsConnected;