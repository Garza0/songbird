import React, { Component } from 'react';
import './app.css';

import BirdsList from '../birds-list';
import Header from '../header';
import RandomBird from '../random-bird';
import BirdDetails from '../bird-details';
import NextLevelBtn from '../next-level-btn';


export default class App extends Component {

  state = {
    randomBird: {},
    selectedBird: null,
    round: 0,
    answerIsRight: false,
    loadNextRound: true
  }

  handleBirdSelection = (id) => {
    this.setState({
      selectedBird: id
    })
    this.checkAnswer(this.state.randomBird.id, id)
  };

  checkAnswer = (randomBirdId, selectedId) => {
    if (randomBirdId === selectedId) {
      console.log('right answer');
      this.setState({
        answerIsRight: true
      })
    } else {
      console.log('wrong answer');
    }
  }

  render() {
    const { selectedBird, round, answerIsRight, loadNextRound } = this.state;
    return (
      <div className="songbird-app">
        <Header />
        <RandomBird
          round={round}
          answerIsRight={answerIsRight}
          loadNextRound={loadNextRound}
        />
        <div className="row mb2">
          <BirdsList
            onBirdSelected={this.handleBirdSelection}
            round={round} />
          <BirdDetails
            birdId={selectedBird}
            round={round} />
        </div>
        <NextLevelBtn />
      </div>
    );
  }
}

