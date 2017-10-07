import React, { Component } from 'react';
import axios from 'axios';
import '../css/style.css';

export default class Header extends Component {
	render() {
		return (
			<div>
				<div className="ui clearing segment header-segment">
				  <div className="choosemytrip-button-wrapper">
				  		<button className="ui center green basic button choosemytrip-button black">Choose my trip</button>
				  </div>
				  
				</div>
				<button type="button" onClick={this.startTrip}>Start your trip</button>
			</div>
		)
	}

	startTrip(ev) {
	    axios.get('http://127.0.0.1:8000/')
	    .then(res => {
            console.log(res);
	    }).then(response => {
	        console.log(JSON.stringify(response));
	    })    
  	}
}