import React, { Component } from 'react';
import axios from 'axios';
import '../css/trips.css';
import Trip from './Trip.js';

export default class Trips extends Component {
	render() {
		let trips = [<Trip/>, <Trip/>, <Trip/>];
		return (
			<div className="trip-wrapper">
				{trips}
			</div>
		)
	}

}