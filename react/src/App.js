import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Trips from './components/Trips';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Trips/>
            </div>
        );
    }
}
