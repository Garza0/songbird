import React, { Component } from 'react';

import './score.css';

export default class Score extends Component {

	state = {
		score: 0
	}

	render() {
		return (
			<div className="score">
				{`Score: ${this.state.score}`}
			</div>
		);

	}
};
