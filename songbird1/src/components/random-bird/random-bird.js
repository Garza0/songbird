import React, { Component } from 'react';
import './random-bird.css';
import BirdsService from '../../services/birds-service';

const birdsService = new BirdsService();

export default class RandomBird extends Component {
	constructor(props) {
		super(props)
	}

	state = {
		answered: false,
		id: null
	}

	getRandomBird = (round) => {
		const birdsData = birdsService.getBirdsForRound(round);
		const randomId = Math.floor(Math.random() * birdsData.length);
		console.log(birdsData, randomId);
		const bird = birdsData[randomId];
		// this.setState({ id: bird.id });
		return bird
	}





	render() {
		const { answered } = this.state;
		const { round, answerIsRight } = this.props;

		const bird = this.getRandomBird(round)



		return (
			<div className="random-planet jumbotron rounded">
				<BirdView bird={bird} answered={answered} />
			</div>
		);
	}



}

const BirdView = (props) => {

	const { name, image, audio } = props.bird;
	const answered = props.answered;
	console.log(audio);
	const birdImage = answered ? image : '/bird-default.jpg';
	const birdName = answered ? name : '******'

	return (
		<React.Fragment>
			<img className="bird-image"
				src={birdImage}
				alt="bird" />
			<div>
				<h4>{birdName}</h4>
				<Player audio={audio} />
			</div>
		</React.Fragment>
	)
}


const Player = (props) => (
	<audio id="player" controls src={props.audio}></audio>
);


