import React, { Component } from 'react'
import './next-level-btn.css';

export default class NextLevelBtn extends Component {
	constructor(props) {
		super(props)
	}

	clickHandler = () => {
		this.props.handleClick();
	}

	render() {
		const active = !this.props.active;



		return (
			<button
				className='btn btn-success next-level-btn'
				disabled={active}
				onClick={this.clickHandler}>
				Next Level
			</button>
		)
	}
}