import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/Store";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import "../styles/resultChart.css";

import { useNavigate } from "react-router-dom";
function ResultChart() {
  const navigate = useNavigate();
  // const [cardInfo, setCardInfo] = useLocalStorage('cardInfo', []);
  const { test, finalResult, repeatTheTest, createNewCard } =
    useContext(Context);

  const refreshAndBackToHome = async () => {
    navigate("/");
    await window.location.reload();
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "chart for your result ",
        color: "black",
        fullSize: true,
        font: {
          size: 20,
          weight: "bold",
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          lineHeight: 1.2,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const [userData, setUserData] = useState({
    labels: ["Yes", "No", "Not Sure"],

    datasets: [
      {
        label: "Your Final Result",

        // This data must be an array:
        data: Object.values(test),

        backgroundColor: ["#34d21f", "#d02929", "#dfe320"],
        hoverOffset: 4,
        borderWidth: 2,
        hoverBorderColor: "black",
        hoverBorderRadius: 10,
        borderSkipped: "bottom",
        minBarLength: 6,
        barThickness: 50,
        hoverBackgroundColor: "black",
      },
    ],
  });

  return (
    <div className="pie">
      <Bar className="pie_chart" data={userData} options={options} />
      <div>
        <h2 className="final_result">{finalResult}</h2>
        <button className="button" onClick={createNewCard}>
          {" "}
          create new{" "}
        </button>
        <button className="button" onClick={repeatTheTest}>
          {" "}
          repeat the test
        </button>
        <button className="button" onClick={refreshAndBackToHome}>
          {" "}
          done{" "}
        </button>
      </div>
    </div>
  );
}

export default ResultChart;
