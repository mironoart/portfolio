import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/Home.js'
import Projects from '../containers/Projects.js'

const Main = () => (
	<div className="wrapper">
		<div className="container">
			<Switch>
				<Route exact path="/" render={props => <Home {...props} />} />
				<Route path="/projects" render={props => <Projects {...props} />} />
			</Switch>
		</div>
	</div>
)

export default Main
