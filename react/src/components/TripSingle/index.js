import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import Directions from '../Directions/index';

export default class TripSingle extends Component {
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