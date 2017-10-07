import React, { Component } from 'react';
import './style.css';
import Trip from '../TripSingle/index';

export default class Trips extends Component {
	render() {
		let trips = [<Trip key='1'/>, <Trip key='2'/>, <Trip key='3'/>];
		return (
			<div className="trip-wrapper">
				{trips}
			</div>
		)
	}

}