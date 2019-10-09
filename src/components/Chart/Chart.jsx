import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ state: { originValue, rate, occurrenceNumber } }) => {
  const data = {
    labels: [],
    datasets: [
      {
        label: 'Value variation after each occurence',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        lineTension: 0.1
      }
    ]
  };

  let val = originValue;
  for (let i = 1; i <= occurrenceNumber; i++) {
    data.labels.push(i);

    data.datasets[0].data.push(val);
    val = Math.round(val * rate);
  }

  return (
    <div className='chartBox'>
      <Line data={data} />
    </div>
  );
};

export default Chart;
