import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import Tag from '../Tag/index.js'

export default class InputForm extends Component {
	constructor() {
		super();
		this.state = {
			tags: [],
			data: [{}]
		}
	}
	render() {
		return (
			<div id={'start'}>
				<div className="center input-component">
					<br/><br/>
					<h1 className="ui header input-header">Experience all your desires</h1>
					<form>
						<div className="ui right labeled input moneyInput">
							<label htmlFor="amount" className="ui label">$</label>
							<input onChange={this.fieldsChanged.bind(this)} className="" type="number" name="money" ref="money" placeholder="how rich are you?" />
						</div>
						<div className="tagInput ui right labeled left icon input">
							<i className="tags icon"></i>
							<input onChange={this.fieldsChanged.bind(this)} id="tag-input" type="text" name="tags" ref="tags" placeholder="enter tags"/>
							<a className="ui tag label" onClick={this.addTag.bind(this)} value="add tag">add tag</a>
						</div>
						<div className="peopleInput ui labeled input">
						    <div className="ui label">
    							People
  						    </div>
							<input onChange={this.fieldsChanged.bind(this)} defaultValue="1" type="number" ref="visitorCount" placeholder="number of visitors"/>
						</div>
						<div className="nightsInput ui labeled input">
							<div className="ui label">
    							Nights
  						    </div>
							<input onChange={this.fieldsChanged.bind(this)} defaultValue="1" type="number" ref="nightsCount" placeholder="how many nights you can spent?"/>
						</div>
					</form>
					<div>
						{this.state.tags.map( (tag, i) => {
							return <Tag key={i} name={tag} deleteTag={this.deleteTag.bind(this, i)} />
						})}
					</div>
					<div id="error-output" className="ui"></div>
					<br/>
					<br/><br/><br/>
				</div>

			</div>
		)
	}

	deleteTag(i) {
		this.state.tags.splice(i, 1);
		this.setState({tags: this.state.tags});
		this.sendRequest();
	}

	addTag() {
		if (this.refs.tags.value !== '' && this.state.tags.indexOf(this.refs.tags.value) === -1)  {
			let t = this.state.tags.concat([this.refs.tags.value]);
			this.state.tags = t;
			this.setState({tags: t});
			document.getElementById('tag-input').value = '';
			this.sendRequest();
			if(this.refs.money.value&& this.refs.visitorCount.value && this.refs.nightsCount.value) {
				//this.sendRequest();
			}
		}
	}

	sendRequest(tags) {
		axios({
			method: 'post',
			url: 'http://127.0.0.1:8000/api/v0/',
			data: {
				money: parseInt(this.refs.money.value) / parseInt(this.refs.visitorCount.value) / parseInt(this.refs.nightsCount.value),
				tags: this.state.tags,
				visitorCount: this.refs.visitorCount.value,
				nightsCount: this.refs.nightsCount.value
			}
		})
		.then( (res) => {
			let data = JSON.parse(res["data"]["data"])
			if (data === []) {
				document.getElementById('error-output').value = 'The search didn\'t find anything, try different tags or increase your wallet :)';
			} else {
				this.props.tripsLoaded(data);
				this.setState({data: data});
			}
		})
	}

	fieldsChanged() {
		if(this.refs.money.value&& this.refs.visitorCount.value && this.refs.nightsCount.value && this.state.tags.length)
			this.sendRequest();
	}
}