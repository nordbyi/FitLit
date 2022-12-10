import { Chart } from "chart.js/auto";

const createChart = function (hydration, sleepQuality, sleepHours) {
  new Chart(document.getElementById("weeklyChart"), {
    type: "bar",
    data: {
      labels: hydration.dates,
      datasets: [
        {
          label: hydration.label,
          yAxisID: "hydration",
          data: hydration.count,
        },
        {
          label: sleepQuality.label,
          yAxisID: "sleep",
          data: sleepQuality.count,
        },
        {
          label: sleepHours.label,
          yAxisID: "sleep",
          data: sleepHours.count,
        },
      ],
    },
    options: {
      scales: {
        hydration: {
          type: "linear",
          title: {
            display: true,
            text: "Water Intake",
          },
          position: "left",
        },
        sleep: {
          type: "linear",
          title: {
            display: true,
            text: "Sleep Info",
          },
          position: "right",
          ticks: {
            max: 15,
            min: 0,
          },
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    },
  });
};

export { createChart };
