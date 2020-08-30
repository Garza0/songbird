import React, { Component } from 'react';
import './random-bird.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default class RandomBird extends Component {

	state = {
		bird: {},
		answered: false
	}

	render() {
		const { bird, answered } = this.state;


		return (
			<div className="random-planet jumbotron rounded">
				<BirdView bird={bird} answered={answered} />
			</div>
		);
	}



}

const BirdView = (bird, answered) => {
	const { name, image, audio } = bird;

	const birdImage = answered ? '/bird-default.jpg' : image;
	const birdName = answered ? '******' : name

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


const Player = (audio) => (
	<AudioPlayer
		src={audio}
		onPlay={e => console.log("onPlay")}

	/>
);

// id: 1,
// 			name: 'Ворон',
// 			species: 'Corvus corax',
// 			description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
// 			image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
// 			audio:

