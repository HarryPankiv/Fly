import React, { Component } from 'react';
import './style.css';
import Directions from '../Directions/index';

export default class TripSingle extends Component {
	render() {
		let activity = this.props.activity.charAt(0).toUpperCase() + this.props.activity.slice(1);
		let city = this.props.city;
		let activityPrice = parseInt(this.props.activityPrice);
		let personCount = parseInt(this.props.personCount);
		let days = parseInt(this.props.days);

		let hotelPrice = parseInt(this.props.hotelPrice);
		let flightPrice = parseInt(this.props.flightPrice);

		let totalPrice = hotelPrice + activityPrice + flightPrice;

		return (
			<div className="ui segment">
				<h2 className="ui header trip-header">{city} -  {activity}</h2>
				<p className="trip-price"><b>${totalPrice}</b></p>


				<p className="ui">{activity} price: <b>${activityPrice}</b> </p>
				<p className="ui">Tickets: <b>${flightPrice}</b> </p>
				<p className="ui">Hotel price: <b>${hotelPrice}</b> </p>
				<Directions destination={city}/>
			</div>
		)
	}

}