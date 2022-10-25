import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/Store';
import { Bar, Pie} from 'react-chartjs-2';
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
        data: Object.values(test),
        backgroundColor: ['#34d21f', '#d02929', '#dfe320'],
        hoverOffset: 4,
      },
    ],
  });


  return (
  
  <div className='pie' style={{width: '700px'}}>
    <Pie className='pie_chart' data={userData} options={options} />
    <div >
    <h2 className='final_result'>{finalResult}</h2>
    <button className='button' onClick={createNewCard}> create new </button>
    <button className='button' onClick={repeatTheTest}> repeat the test</button>
    <button className='button'onClick={refreshAndBackToHome}> done </button>
    </div>
    </div>);
}

export default ResultChart;
