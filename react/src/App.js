import React, { Component } from 'react';
import Header from './components/Header/index';
import Trips from './components/Trips/index';
import InputComponent from './components/InputForm/index';
import ResultItem from './components/ResultItem/index';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <InputComponent />
                <Trips />
                <ResultItem />
            </div>
        );
    }
}
