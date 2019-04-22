import React from 'react'
import Modal from '../containers/Modal.js'
import Preloader from '../containers/Preloader.js'
import menu from '../media/images/icos/menu.png'
import { Link } from 'react-router-dom'

class Projects extends React.Component {
	render() {
		//? Function for preloader duration
		function timeout(func) {
			setTimeout(func, 8000)
		}
		/*  function test(){
        var test = document.getElementsByClassName('projectsContainer');
        var newi = document.createElement('div');
        console.log(newi)
        newi.className = 'testClass';
        test[0].appendChild(newi);
        console.log(newi)

    } */

		return (
			//? Adding menu and modal window and preloader

			<div className="projectsContainer">
				<Preloader />
				{timeout(this.props.endPreloader)}
				<Modal color={this.props.styles.backgroundColor} />
				<img
					className="projectsBackgroundImg"
					src={require(`../${this.props.text.image}`)}
					alt=""
				/>

				<div
					className="menu"
					style={{ backgroundColor: this.props.styles.backgroundColor }}
				>
					<img src={menu} onClick={() => this.props.openModal()} alt="Menu" />
					{/* <div className = 'hiddenMenu'>
            <div className="hiddenMenuBackground"></div>
            <div>Home</div>
            <div>Projects</div>
        </div> */}
				</div>

				{
					//? Adding top ABOUT ME
				}

				<div className="projectsTop">
					<Link
						id={this.props.text.id}
						className="topRight topRight_projects"
						to="/"
					>
						{this.props.text.aboutme}
					</Link>

					{
						//? Adding language Container
					}

					<div className="langContainer">
						<div className="lang lang-projects">
							<span
								className={
									this.props.text.active === 'en'
										? 'en ' + `${this.props.text.id}`
										: 'en'
								}
								onClick={() => this.props.changeLangToEn()}
							>
								En
							</span>
							<span
								className={
									this.props.text.active === 'ru'
										? 'ru  ' + `${this.props.text.id}`
										: 'ru'
								}
								onClick={() => this.props.changeLangToRu()}
							>
								Ru
							</span>
						</div>
					</div>
				</div>

				{
					//? Adding projects Container
				}

				<div className="projectsContent">
					<div className="projectHead">
						<h6 className="projectHead__role">{this.props.text.role}</h6>
						<div className="projectHead__projectName">
							<h1 id={this.props.text.id}>{this.props.text.projectName}</h1>
							<p> {this.props.text.credo} </p>
						</div>
						<div className="projectHead__projectInfo">
							{/* <div className="Role">
                    <strong> {this.props.text.info.roleName} </strong>
                    <p>{this.props.text.info.roleDesc}</p>
                </div>
                <div className="Agency">
                    <strong>{this.props.text.info.agencyName}</strong>
                    <p>{this.props.text.info.agencyDesc}</p>
                </div> */}
							<div className="Date">
								{/* <strong>{this.props.text.info.dateName}</strong> */}
								<p>{this.props.text.info.dateDesc}</p>
							</div>
						</div>
					</div>

					{
						//? proj overwiew
					}
					<div className="projectCenter">
						<div className="projectCenter__projectIntroduction">
							<h3
							/* id = {this.props.text.id} */
							>
								{this.props.text.introduction}
							</h3>
							<p> {this.props.text.text}</p>
						</div>
						<div className="projectsLink">
							<a id={this.props.text.id} href={this.props.text.siteLink}>
								{' '}
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

/* 
{require(`../${props.text.image}`)} 
require(`../` + props.text.image)

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

<CSSTransitionGroup
transitionName="example"
transitionAppear={true}
transitionAppearTimeout={1000}
transitionEnter={false}
transitionLeave={false}>
<h1 style = {{color: this.props.styles.color}}>{this.props.text.role}</h1>
</CSSTransitionGroup>  
*/

/* 
var al = function (first,second) {alert( first + second);} 
setTimeout(al, 3000, '1','2') ; 

var al = function (first,second) {alert( first + second);} 
function timeout (func,first,second){
    setTimeout(func, 3000, first, second) ;
} 
timeout(al,'1','2');

*/

/* constructor(){
        super()
        function p () == this.props.openModal()
    } */
