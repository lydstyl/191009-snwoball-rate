import React, { Component } from 'react';

import PreferenceInput from '../PreferenceInput/PreferenceInput';
import Chart from '../Chart/Chart';

export default class PreferenceAndChartWrapper extends Component {
  constructor() {
    super();

    this.state = {
      originValue: 100,
      rate: 1.13,
      addEveryOccurence: 100,
      occurrenceNumber: 20
    };
  }

  inputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: parseFloat(value) });
  };

  render() {
    const {
      originValue,
      rate,
      addEveryOccurence,
      occurrenceNumber
    } = this.state;
    return (
      <div className='PreferenceAndChartWrapper'>
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
            name='addEveryOccurence'
            value={addEveryOccurence}
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
