import React, { Component } from 'react';
import axios from 'axios';

export default class InputComponent extends Component {
	constructor() {
		super();
		this.state = {
			tags: []
		}
	}
	render() {
		return (
			<div>
				<form>
					<input type="text" name="money" ref="money" />
					<input type="text" name="tags" ref="tags" />
					<input type="button" onClick={this.addTag.bind(this)} value="add tag"/>
				</form>
				<input type="submit" onClick={this.sendRequest.bind(this)} value="Submit" />
				<ul>
					{this.state.tags.map( (tag, i) => {
						return <li key={i}>{tag}</li>
					})}
				</ul>
			</div>
		)
	}

	addTag() {
		this.setState({tags: this.state.tags.concat([this.refs.tags.value])})
	}

	sendRequest() {
		console.log(this.state.tags);
		axios.post({
			method: 'post',
			url: 'http://127.0.0.1:8000/api/v0/',
			data: {
				money: this.refs.money.value,
				tags: this.state.tags
			}
		})
		.then(res => {
			console.log(res);
		}).then(response => {
			console.log(JSON.stringify(response));
		})
	}
}