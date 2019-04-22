import React from 'react'
import { Link } from 'react-router-dom'
import close from '../media/images/icos/Close.png'
import codepan from '../media/images/icos/Codepan.png'
import facebook from '../media/images/icos/Facebook.png'
import github from '../media/images/icos/GitHub.png'
import instagram from '../media/images/icos/Instagram.png'
import linkedin from '../media/images/icos/LinkedIn.png'
import projects from '../media/images/icos/Projects.png'
import twitter from '../media/images/icos/Twitter.png'
import home from '../media/images/icos/Home.png'

const Modal = props => (
	<div className={props.modal}>
		<div className="modalMenu" onClick={() => props.closeModal()}>
			<img
				className="closeModal"
				style={{ backgroundColor: props.color }}
				src={close}
				alt="Close"
			/>

			<Link className="modalItem" to="/">
				<img src={home} alt="Home" /> <span> Home </span>
			</Link>

			<Link className="modalItem" to="/projects">
				<img src={projects} alt="Projects" /> <span> Projects </span>
			</Link>

			<a className="modalItem" href="https://github.com/mironoart">
				<img src={github} alt="GitHub" /> <span> GitHub </span>
			</a>

			<a
				className="modalItem"
				href="https://www.linkedin.com/in/andry-mironov-266062167/"
			>
				<img src={linkedin} alt="LinkedIn" /> <span> LinkedIn </span>
			</a>

			<a className="modalItem" href="https://www.facebook.com/AndryMirov/">
				<img src={facebook} alt="Facebook" /> <span> Facebook </span>
			</a>

			<a className="modalItem" href="https://twitter.com/Andry64340910/">
				<img src={twitter} alt="Twitter" /> <span> Twitter </span>
			</a>

			<a className="modalItem" href="https://www.instagram.com/mirono94/">
				<img src={instagram} alt="Instagram" /> <span> Instagram </span>
			</a>
		</div>
	</div>
)

export default Modal
