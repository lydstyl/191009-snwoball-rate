import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({
  state: {
    occurrenceNumber,
    originValue,
    rate,
    addEveryOccurence,
    originValue2,
    rate2,
    addEveryOccurence2
  }
}) => {
  const data = {
    labels: [],
    datasets: [
      {
        label: 'Value variation after each occurence',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        lineTension: 0.1
      },
      {
        label: 'Value variation 2 after each occurence',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 75, 75)',
        lineTension: 0.1
      }
    ]
  };

  let val = originValue;
  let val2 = originValue2;
  for (let i = 1; i <= occurrenceNumber; i++) {
    data.labels.push(i);

    data.datasets[0].data.push(val);
    data.datasets[1].data.push(val2);

    val = val * rate;
    val2 = val2 * rate2;

    val = Math.round(val + addEveryOccurence);
    val2 = Math.round(val2 + addEveryOccurence2);
  }

  return (
    <div className='chartBox'>
      <Line data={data} />
    </div>
  );
};

export default Chart;
