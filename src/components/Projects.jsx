import React from 'react'
import { Link } from 'react-router-dom'

class Projects extends React.Component {
	render() {
		return (
			<div className="projectsContainer">
				<img className="projectsBackgroundImg" src={require(`../${this.props.text.image}`)} alt="" />



				<div className="projectsTop">
					<Link id={this.props.text.id} className="topRight topRight_projects" to="/">
						{this.props.text.aboutme}
					</Link>

					<div className="langContainer">
						<div className="lang lang-projects">
							<span
								className={this.props.text.active === 'en' ? 'en ' + `${this.props.text.id}` : 'en'}
								onClick={() => this.props.changeLangToEn()}
							>
								En
							</span>
							<span
								className={this.props.text.active === 'ru' ? 'ru  ' + `${this.props.text.id}` : 'ru'}
								onClick={() => this.props.changeLangToRu()}
							>
								Ru
							</span>
						</div>
					</div>
				</div>

				<div className="projectsContent">
					<div className="projectHead">
						<h6 className="projectHead__role">{this.props.text.role}</h6>
						<div className="projectHead__projectName">
							<h1 id={this.props.text.id}>{this.props.text.projectName}</h1>
							<p> {this.props.text.credo} </p>
						</div>
						<div className="projectHead__projectInfo">
							<div className="Date">
								<p>{this.props.text.info.dateDesc}</p>
							</div>
						</div>
					</div>

					<div className="projectCenter">
						<div className="projectCenter__projectIntroduction">
							<h3>{this.props.text.introduction}</h3>
							<p> {this.props.text.text}</p>
						</div>
						<div className="projectsLink">
							<a id={this.props.text.id} href={this.props.text.siteLink}>
								{this.props.text.site}
							</a>
						</div>
					</div>
					<div className="projectCenter__projectNext">
						<p onClick={() => this.props.nextProject()}>{this.props.text.right}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Projects
