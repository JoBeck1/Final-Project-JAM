import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/Store';
import { Bar} from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';
import '../styles/resultChart.css';

import {useNavigate} from "react-router-dom"
function ResultChart() {
  const navigate= useNavigate()
  // const [cardInfo, setCardInfo] = useLocalStorage('cardInfo', []);
  const { test, finalResult,  repeatTheTest, createNewCard} = useContext(Context);

const refreshAndBackToHome= async()=> {
  navigate("/")
  await window.location.reload()
}


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
    <button onClick={createNewCard}> create new </button>
    <button onClick={repeatTheTest}> repeat the test</button>
    <button onClick={refreshAndBackToHome}> done </button>
    </div>
    </div>);
}

export default ResultChart;
