import React, { Component } from 'react';

import PreferenceInput from './components/PreferenceInput/PreferenceInput';
import Chart from './components/Chart/Chart';

import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      originValue: 100,
      rate: 1.13,
      occurrenceNumber: 20
    };
  }

  inputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { originValue, rate, occurrenceNumber } = this.state;
    return (
      <div className='App'>
        <h1>Snowball Rate</h1>

        <form className='preferences'>
          <PreferenceInput
            name='originValue'
            value={originValue}
            onChange={this.inputChange}
          />

          <PreferenceInput
            name='rate'
            value={rate}
            onChange={this.inputChange}
          />

          <PreferenceInput
            name='occurrenceNumber'
            value={occurrenceNumber}
            onChange={this.inputChange}
          />
        </form>

        <Chart state={this.state} />
      </div>
    );
  }
}
