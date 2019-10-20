import React, { Component } from 'react';

import PreferenceInput from '../PreferenceInput/PreferenceInput';
import Chart from '../Chart/Chart';

export default class PreferenceAndChartWrapper extends Component {
  constructor() {
    super();

    this.state = {
      occurrenceNumber: 20,

      originValue: 100,
      rate: 1.13,
      addEveryOccurence: 100,

      originValue2: 50,
      rate2: 1.26,
      addEveryOccurence2: 50
    };
  }

  inputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: parseFloat(value) });
  };

  render() {
    const {
      occurrenceNumber,
      originValue,
      rate,
      addEveryOccurence,
      originValue2,
      rate2,
      addEveryOccurence2
    } = this.state;
    return (
      <div className='PreferenceAndChartWrapper'>
        <div className='form-box'>
          <form className='preferences'>
            <PreferenceInput
              name='occurrenceNumber'
              value={occurrenceNumber}
              onChange={this.inputChange}
            />
          </form>

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
          </form>

          <form className='preferences'>
            <PreferenceInput
              name='originValue2'
              value={originValue2}
              onChange={this.inputChange}
            />

            <PreferenceInput
              name='rate2'
              value={rate2}
              onChange={this.inputChange}
            />

            <PreferenceInput
              name='addEveryOccurence2'
              value={addEveryOccurence2}
              onChange={this.inputChange}
            />
          </form>
        </div>

        <Chart state={this.state} />
      </div>
    );
  }
}
