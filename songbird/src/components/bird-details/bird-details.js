import React, { Component } from 'react';
import './bird-details.css';

export default class BirdDetails extends Component {

	state = {
		bird: null
	};

	render() {
		const { bird } = this.state;
		if (!bird) {
			return <span>Послушате плеер. Выберите птицу из списка.</span>
		}

		const { name, species, description, image, audio } = bird;

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



