import React, { Component } from 'react';
import axios from 'axios';

export default class Directions extends Component {
	constructor(props) {
		super();
		this.state = {
			show: false
		};
		
	}

	onToggleMapClick() {
		this.setState({
			show: !this.state.show
		});
	}

	render() {
		if(!this.state.show) {
			return (
				<div>
					<button className="ui olive basic button" onClick={this.onToggleMapClick.bind(this)}>Show Map</button>
				</div>
			)
		} else {
			let cityName = this.props.destination.split(' ').join('_'); 
			console.log(cityName)
			return (
				<div>
					<button className="ui olive basic button" onClick={this.onToggleMapClick.bind(this)}>Hide Map</button>
					<div>
						<iframe
						  width="100%"
						  height="450"
						  frameBorder="0" style={{border:0}}
						  src={'https://www.google.com/maps/embed/v1/directions?key=AIzaSyD9wuwjLuz-Fd3j7IdDjBhJTODg5v79G9Q&origin=Lviv&destination=' + cityName + '&avoid=tolls|highways'} allowFullScreen>
							</iframe>
					</div>
				</div>
			)
		}
	}

}