import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  render() {
      return (
        <div>
          <button type="button" onClick={this.onClick}>Get articles</button>
        </div>
      );
  }

  onClick(ev) {
    console.log("Sending a GET API Call !!!");
    axios.get('http://127.0.0.1:8000/')
    .then(res => {
            console.log(res);
    }).then(response => {
        console.log(JSON.stringify(response));
    })    
  }

}
