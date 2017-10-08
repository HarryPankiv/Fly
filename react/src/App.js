import React, { Component } from 'react';
import Header from './components/Header/index';
import Trips from './components/Trips/index';
import InputComponent from './components/InputForm/index';
import './app.css';

export default class App extends Component {
    render() {
        return (
            <div className="background">
                <Header />
                <InputComponent />
                <Trips />
            </div>
        );
    }
}
