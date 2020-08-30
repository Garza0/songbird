import React, { Component } from 'react';
import './app.css';

import BirdsList from '../birds-list';
import Header from '../header';
import RandomBird from '../random-bird';
import BirdDetails from '../bird-details';


export default class App extends Component {



  render() {
    return (
      <div className="songbird-app">
        <Header />
        <RandomBird />
        <div className="row mb2">
          <BirdsList />
          <BirdDetails />
        </div>
      </div>
    );
  }
}

