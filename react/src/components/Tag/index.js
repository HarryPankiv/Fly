import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

export default class Tag extends Component {
	render() {
		return (
			<div className="ui olive label tag-label">
  				{this.props.name}
 				<i className="delete icon" onClick={this.props.deleteTag}></i>
			</div>
		)
	}

}