import { combineReducers } from 'redux'
import changeLanguage from './home.js'
import projects from './projects.js'

const rootReducer = combineReducers({
   changeLanguage,
   projects
})

export default rootReducer
