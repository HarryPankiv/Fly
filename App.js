import React, { Component } from 'react';
import Header from './components/Header';
import InputComponent from './components/InputComponent'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <InputComponent />
            </div>
        );
    }
}
