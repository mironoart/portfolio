import  {combineReducers} from 'redux';
import changeLanguage from './home.js';
import modalMenu from './modal.js';
import projects from './projects.js';
import preloader from './preloader.js';


const rootReducer = combineReducers({
    changeLanguage,
    modalMenu,
    projects,
    preloader,
})

export default rootReducer;