import React, { Component } from 'react';
import './style.css';
import TripSingle from '../TripSingle/index';

export default class Trips extends Component {
	render() {
		console.log(this.props.trips);
		if (this.props.trips !== []) {
			return (
				<div className="trip-wrapper">
					{this.props.trips.map((trip, i) => {
						return <TripSingle key={i} activity_name={trip.activity_name} 
						city={trip.city} 
						hotel_name={trip.hotel_name} 
						hotel_price={trip.hotel_price} 
						flight_price={trip.flight_price} 
						flight_duration={trip.flight_duration} 
						activity_price={trip.activity_price}/>
					})}
				</div>
			)
		} else {
			return (
				<div>
					<p className="ui"></p>
				</div>
			)
		}

	}

}