import React, { Component } from 'react';
import './bird-details.css';
import BirdsService from '../../services/birds-service';

const birdsService = new BirdsService();


export default class BirdDetails extends Component {



	render() {
		const { birdId, round } = this.props;
		console.log(round);

		if (!birdId) {
			return <span>Послушате плеер. Выберите птицу из списка.</span>
		}

		const bird = birdsService.getBirdsForRound(round);
		console.log(bird);
		const { name, species, description, image, audio } = bird[birdId - 1];

		return (
			<div className="col-md-6">
				<div className="bird-details card">
					<div className="card-body">
						<img className="bird-image"
							src={image}
							alt={name} />
						<ul lcassName="list-group list-group-flush">
							<li className="list-group-item">
								<h4>{name}</h4>
							</li>
							<li className="list-group-item">
								<span>{species}</span>
							</li>
							<li className="list-group-item">
								<div>audio player</div>
							</li>
						</ul>
					</div>
					<div className="bird-description">
						{description}
					</div>
				</div>
			</div>
		)

	}


}



