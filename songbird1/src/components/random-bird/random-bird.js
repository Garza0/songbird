import React, { Component } from 'react';
import './random-bird.css';

export default class RandomBird extends Component {
	constructor(props) {
		super(props)
	}


	render() {
		const { bird, answered } = this.props;
		return (
			<div className="random-bird jumbotron rounded">
				<BirdView bird={bird} answered={answered} />
			</div>
		);
	}



}

const BirdView = (props) => {

	const { name, image, audio } = props.bird;
	const answered = props.answered;
	const birdImage = answered ? image : '/bird-default.jpg';
	const birdName = answered ? name : '******'

	return (
		<React.Fragment>
			<img className="bird-image"
				src={birdImage}
				alt="bird" />
			<div className="random-bird-info">
				<h4>{birdName}</h4>
				<Player audio={audio} />
			</div>
		</React.Fragment>
	)
}


const Player = (props) => (
	<audio className="audio-player" id="player" controls src={props.audio}></audio>
);


