import React, { Component } from 'react';
import Header from './components/Header';
import Trips from './components/trips';
import InputComponent from './components/InputComponent';

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
