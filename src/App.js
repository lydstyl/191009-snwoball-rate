import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      originValue: 100,
      rate: 0.05,
      occurrenceNumber: 10
    };
  }

  inputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='App'>
        <h1>Snowball Rate</h1>

        <form className='preferences'>
          <div className='preference'>
            <label>rate?</label>
            <input
              type='number'
              name='rate'
              value={this.state.rate}
              onChange={e => this.inputChange(e)}
            />
          </div>
          <div className='preference'>
            <label>occurrenceNumber?</label>
            <input
              type='number'
              name='occurrenceNumber'
              value={this.state.occurrenceNumber}
              onChange={e => this.inputChange(e)}
            />
          </div>
        </form>
        <div className='chartBox'>chartBox</div>
      </div>
    );
  }
}
