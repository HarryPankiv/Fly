import React, { Component } from 'react';
import axios from 'axios';
import '../css/style.css';

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
						  src={'https://www.google.com/maps/embed/v1/place?key=AIzaSyBhtTiQKHiFbd-1xHIkHYc1lNaQo6-gtXY&q=' + cityName} allowFullScreen>
							</iframe>
					</div>
				</div>
			)
		}
	}

}