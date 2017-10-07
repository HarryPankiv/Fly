import React, { Component } from 'react';
import axios from 'axios';

export default class Header extends Component {
	render() {
		return (
			<div>
				<div>here will be a photo!</div>
				<button type="button" onClick={this.startTrip}>Start your trip</button>
			</div>
		)
	}

	startTrip(ev) {
	    axios.get('http://127.0.0.1:8000/api/v0/')
	    .then(res => {
            console.log(res);
	    }).then(response => {
	        console.log(JSON.stringify(response));
	    })    
  	}
}