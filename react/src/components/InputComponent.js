import React, { Component } from 'react';
import axios from 'axios';
import './InputComponent.css';

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
				<form className="">
					<div className="ui right labeled input moneyInput">
						<label for="amount" className="ui label">$</label>
						<input className="" type="text" name="money" ref="money" placeholder="how rich are you?" />
					</div>
					<div className="tagInput ui right labeled left icon input">
						<i className="tags icon"></i>
						<input className="" type="text" name="tags" ref="tags" placeholder="enter tags"/>
						<a className="ui tag label" onClick={this.addTag.bind(this)} value="add tag">add tag</a>
					</div>
				</form>
				<ul>
					{this.state.tags.map( (tag, i) => {
						return <li key={i}>
							{tag}
							<input type="button" value="X" onClick={ () => this.deleteTag(i)} />
						</li>
					})}
				</ul>
				<input className="ui button" type="submit" onClick={this.sendRequest.bind(this)} value="Submit" />
			</div>
		)
	}

	deleteTag(i) {
		this.state.tags.splice(i, 1);
		this.setState({tags: this.state.tags});
	}

	addTag() {
		this.setState({tags: this.state.tags.concat([this.refs.tags.value])})
	}

	sendRequest() {
		console.log(this.state.tags);
		axios({
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