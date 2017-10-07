import React, { Component } from 'react';
import '../css/style.css';
import Trip from './Trip.js';

export default class Trips extends Component {
	render() {
		let trips = [<Trip key='1'/>, <Trip key='2'/>, <Trip key='3'/>];
		return (
			<div>
				{trips}
			</div>
		)
	}

}