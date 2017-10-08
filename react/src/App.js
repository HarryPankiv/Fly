import React, { Component } from 'react';
import Header from './components/Header/index';
import Trips from './components/Trips/index';
import InputComponent from './components/InputForm/index';
import Footer from './components/Footer/index';
import './app.css';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			trips: [],
		};
	}
    render() {
        return (
            <div className="background">
                <Header />
                <InputComponent tripsLoaded={this.onTripsLoaded.bind(this)}/>
                <Trips trips={this.state.trips} />
                <Footer />
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
