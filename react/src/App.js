import React, { Component } from 'react';
import Header from './components/Header/index';
import Trips from './components/Trips/index';
import InputComponent from './components/InputForm/index';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			trips: [],
		};
	}
    render() {
        return (
            <div>
                <Header />
                <InputComponent tripsLoaded={this.onTripsLoaded.bind(this)}/>
                <Trips trips={this.state.trips} />
            </div>
        );
    }

    onTripsLoaded(data) {
		let trips = data.data.data.slice(0);
		this.setState({
			trips: trips
		});
		console.log(trips[0]);
    }
}
