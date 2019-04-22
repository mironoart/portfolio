import React from 'react';
import { Link } from 'react-router-dom';
import portrait from '../media/images/me.jpg';
import menu from '../media/images/icos/menu.png';
import Modal from '../containers/Modal.js';
import Preloader from '../containers/Preloader.js';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			preloader: true
		};
	}
	timeout(func) {
		if (this.state.preloader) {
			setTimeout(func, 8000);
			this.setState({
				preloader: false
			});
		}
	}

	render() {
		return (
			<div className="homeContainer">
				{this.timeout(this.props.endPreloader)}
				<Preloader />
				<Modal color={this.props.styles.backgroundColor} />
				<Link className="topRight topRight_home" to="/Projects">
					{this.props.text.projects}
				</Link>
				<div className="menu">
					<img src={menu} onClick={() => this.props.openModal()} alt="Menu" />
				</div>
				<div className="langContainer">
					<div className="lang">
						<span
							className={this.props.text.active === 'en' ? 'en active' : 'en'}
							onClick={() => this.props.changeLangToEn()}
						>
							En
						</span>
						<span
							className={this.props.text.active === 'ru' ? 'ru active' : 'ru'}
							onClick={() => this.props.changeLangToRu()}
						>
							Ru
						</span>
					</div>
				</div>

				<div className="homeContent">
					<div className="portrait" />
					<div className="homeAboutMe">
						<h1> {this.props.text.h1} </h1>
						<h2> {this.props.text.h3} </h2>
						<h3> {this.props.text.p1} </h3>
						<p> {this.props.text.p2} </p> <br />
						<p> {this.props.text.p3} </p> <br />
						<p className="menu_intext_p">
							{this.props.text.contactMe}
							<div className="menu_intext">
								<img src={menu} onClick={() => this.props.openModal()} alt="Menu" />
							</div>
							{/* <strong onClick = {() => this.props.openModal()}> {this.props.text.menu} </strong>  */}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
