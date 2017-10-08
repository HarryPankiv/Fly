import React, { Component } from 'react';
import Header from './components/Header/index';
import Trips from './components/Trips/index';
import InputForm from './components/InputForm/index';
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
                <InputForm tripsLoaded={this.onTripsLoaded.bind(this)}/>
                <Trips trips={this.state.trips} />
                <Footer />
            </div>
        );
    }

    onTripsLoaded(data) {
        console.log(data);
		let trips = data.map( (item) => {
            return item.fields;
        });
        console.log(trips);
		this.setState({
			trips: trips
		});
		console.log(trips);
        console.log(this.state);
    }
}
