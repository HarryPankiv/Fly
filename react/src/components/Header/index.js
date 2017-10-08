import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

export default class Header extends Component {
	render() {
		return (
			<div>
				<div className="ui inverted clearing segment header-segment inverted">
				  	<div className="choosemytrip-button-wrapper">
				  		<a href="#start" className="ui inverted button choosemytrip-button" onClick={this.startTrip.bind(this)}>Start my trip</a>
				  		<p>Fly - get best trip proposals for your budget and prefered tags</p>
				  	</div>
				</div>
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