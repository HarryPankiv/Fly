import React, { Component } from 'react';
import axios from 'axios';
import '../css/trip.css';
import Directions from './Directions.js';

export default class Trip extends Component {
	render() {
		let place = 'Vienna';
		let totalPrice = '$10000';
		let tickets;
		let hotels;

		return (
			<div className="ui segment">
				<h2 className="ui header trip-header">{place}</h2>
				<p className="trip-price">{totalPrice}</p>

				<h3 className="ui header">Tickets</h3>
				<h3 className="ui header">Hotels</h3>
				<Directions destination={place}/>
			</div>
		)
	}

}