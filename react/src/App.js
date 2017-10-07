import React, { Component } from 'react';
import Header from './components/Header/index';
import Trips from './components/Trips/index';
import InputComponent from './components/InputForm/index';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <InputComponent />
                <Trips />
            </div>
        );
    }
}
