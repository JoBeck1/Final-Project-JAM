import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/Store';
import { Bar} from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';

function ResultChart() {
  const { test, finalResult } = useContext(Context);

  Object.values(test)


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'chart for your result ',
      },
    },
  };
  console.log(parseInt(test.yes), 'YES');
  const [userData, setUserData] = useState({
    labels: ['Yes', 'No', 'Not Sure'],
   
    datasets: [
      {
        label: 'your Final result',

        // This data must be an array:
        data: Object.values(test),
        
        backgroundColor: ['#34d21f', '#d02929', '#dfe320'],
      },
    ],
  });
  return (
  <div style={{width: '700px'}}>
    <Bar data={userData} options={options} />
    <div >
    <h2>{finalResult}</h2>
    </div>
    </div>);
}

export default ResultChart;
