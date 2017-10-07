import React, { Component } from 'react';
import './style.css';
import Trip from '../TripSingle/index';

export default class Trips extends Component {
	render() {
		let trips = [<Trip key='1' activity="skydiving" city="Vienna" hotelPricePP="550" flightPricePP="450" activityPrice="33" personCount="3" days="4"/>];
		return (
			<div className="trip-wrapper">
				{trips}
			</div>
		)
	}

}