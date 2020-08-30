import React, { Component } from 'react'
import BirdsService from '../../services/birds-service';
import './birds-list.css';
const birdsService = new BirdsService();


export default class BirdsList extends Component {

	state = {
		itemList: birdsService.getBirdsForRound(0)
	};



	renderItems(arr) {
		return arr.map(({ id, name }) => {
			return (
				<li className="list-group-item"
					key={id}>
					{name}
				</li>
			);
		});
	}



	render() {
		const { itemList } = this.state;

		const items = this.renderItems(itemList);

		return (
			<div className="col-md-6">
				<ul className="item-list list-group">
					{items}
				</ul>
			</div>
		)

	}
}