import React, { Component } from 'react';
import './style.css';
import Trip from '../TripSingle/index';

export default class Trips extends Component {
	render() {
		console.log(this.props.trips)
		console.log('suk')
		return (
			<div className="trip-wrapper">
				{this.props.trips.map((trip, i) => {
					return <Trip key={i} activity={trip.activity} city={trip.city} hotelPrice={trip.hotelPrice} flightPrice={trip.flightPrice} activityPrice={trip.activityPrice}/>
				})}
			</div>
		)
	}

}