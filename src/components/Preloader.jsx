import React from 'react';
import walpaper from '../media/images/homeWallpaper.svg';

class Preloader extends React.Component {
	render() {
		var preload1 = document.getElementsByClassName('greetings1');
		var preload2 = document.getElementsByClassName('greetings2');
		var i = 1000;
		var k = 0;

		function timeout(func, word) {
			i += 100;

			setTimeout(func, i, word);
		}

		function word(word) {
			k++;
			let text = document.createTextNode(word);
			let paragraph = document.createElement('P');
			paragraph.appendChild(text);
			if (k <= 8) {
				preload1[0].appendChild(paragraph);
			} else preload2[0].appendChild(paragraph);
		}

		function phrase(phrase) {
			let p = phrase;
			for (let j = 0; j < p.length; j++) {
				timeout(word, p[j]);
			}
		}

		return (
			<div>
				<div className={this.props.preloader}>
					<div className="greetings1"> {phrase('Welcome!')} </div>
					<div className="greetings2"> {phrase('Let me introduce myself')} </div>
					<div id="preloader">
						<img src={walpaper} alt="" />
					</div>
				</div>
			</div>
		);
	}
}
export default Preloader;
