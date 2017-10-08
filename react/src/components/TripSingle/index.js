import React, { Component } from 'react';
import './style.css';
import Directions from '../Directions/index';

export default class TripSingle extends Component {
	render() {
		console.log(this.props);
		let activity_name = this.props.activity_name.charAt(0).toUpperCase() + this.props.activity_name.slice(1);
		let city = this.props.city.charAt(0).toUpperCase() + this.props.city.slice(1);
		let activity_price = parseInt(this.props.activity_price);

		let hotel_name = this.props.hotel_name.charAt(0).toUpperCase() + this.props.hotel_name.slice(1);;
		let hotel_price = parseInt(this.props.hotel_price);
		let flight_price = parseInt(this.props.flight_price);
		let flight_duration = parseInt(this.props.flight_duration);

		let totalPrice = hotel_price + activity_price + flight_price;

		console.log(this);
		return (
			<div className="ui segment">
				<h2 className="ui header trip-header">{city} -  {activity_name}</h2>
				<p className="trip-price"><b>${totalPrice}</b></p>

				<p className="ui">{activity_name} price: <b>${activity_price}</b> </p>
				<p className="ui">Tickets: <b>${flight_price}</b> </p>
				<p className="ui">Flight duration: <b>{flight_duration} hours</b> </p>
				<p className="ui">Hotel name: <b>{hotel_name}</b> </p>
				<p className="ui">Hotel price: <b>${hotel_price}</b> </p>
				
				<Directions destination={city}/>
			</div>
		)
	}

}