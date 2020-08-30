import React, { Component } from 'react'
import BirdsService from '../../services/birds-service';
import './birds-list.css';
const birdsService = new BirdsService();


export default class BirdsList extends Component {

	constructor(props) {
		super(props);
	}




	onItemSelected = (selectedId) => {
		this.props.onBirdSelected(selectedId);

	}


	renderItems(arr) {
		return arr.map(({ id, name }) => {
			return (
				<li className="list-group-item"
					key={id}
					onClick={() => this.onItemSelected(id)}>
					{name}
				</li>
			);
		});
	}



	render() {

		const birdsList = birdsService.getBirdsForRound(this.props.round)

		const items = this.renderItems(birdsList);

		return (
			<div className="col-md-6">
				<ul className="item-list list-group">
					{items}
				</ul>
			</div>
		)

	}
}