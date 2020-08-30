import React, { Component } from 'react';
import './app.css';

import BirdsList from '../birds-list';
import Header from '../header';
import RandomBird from '../random-bird';
import BirdDetails from '../bird-details';
import NextLevelBtn from '../next-level-btn';
import BirdsService from '../../services/birds-service';

const birdsService = new BirdsService();


export default class App extends Component {

  state = {
    randomBird: {},
    selectedBird: null,
    round: 0,
    answerIsRight: false,
    loadNextRound: true,
    nextLevelBtnStatus: false,
    pointsForAnswer: 5,
    score: 0
  }

  getRandomBird = (round) => {
    const birdsData = birdsService.getBirdsForRound(round);
    const randomId = Math.floor(Math.random() * birdsData.length);
    const bird = birdsData[randomId];
    this.setState({
      randomBird: bird,
      loadNextRound: false
    })
    return bird
  }

  handleBirdSelection = (id) => {
    this.setState({
      selectedBird: id
    })
    this.checkAnswer(this.state.randomBird.id, id)
  };

  checkAnswer = (randomBirdId, selectedId) => {
    if (randomBirdId === selectedId) {
      const score = this.state.score + this.state.pointsForAnswer;
      this.setState({
        answerIsRight: true,
        nextLevelBtnStatus: true,
        score: score
      })
    } else {
      const pointsForAnswer = this.state.pointsForAnswer - 1;
      this.setState({
        pointsForAnswer: pointsForAnswer > 0 ? pointsForAnswer : 0
      })
    }
  }

  handleBtnClick = () => {
    const round = this.state.round + 1;
    this.setState({
      round: round,
      nextLevelBtnStatus: false,
      answerIsRight: false,
      pointsForAnswer: 5,
      selectedBird: null
    })
    this.getRandomBird(round)
  }

  render() {
    const { score, selectedBird, round, answerIsRight, loadNextRound, randomBird, nextLevelBtnStatus } = this.state;
    const bird = loadNextRound ? this.getRandomBird(round) : randomBird;
    return (
      <div className="songbird-app">
        <Header score={score} />
        <RandomBird
          bird={bird}
          answered={answerIsRight}
        />
        <div className="row mb2">
          <BirdsList
            onBirdSelected={this.handleBirdSelection}
            round={round} />
          <BirdDetails
            birdId={selectedBird}
            round={round} />
        </div>
        <NextLevelBtn
          active={nextLevelBtnStatus}
          handleClick={this.handleBtnClick} />
      </div>
    );
  }
}

