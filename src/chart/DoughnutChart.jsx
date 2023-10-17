import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Old", "New", "Existing"],
  datasets: [
    {
      data: [15, 50, 35],
      backgroundColor: ["rgb(255,192,203)", "rgb(128,0,128)", "#fff"],
      borderColor: ["rgb(255,192,203)", "rgb(128,0,128)", "#9e9ea4"],
      borderWidth: 1,
    },
  ],
};

const options ={
  responsive: true,
    maintainAspectRatio: true,
  options: {
    plugins:{
    legend: {
      display: false
    },
  },
    tooltips:{
      callbacks:{
        label: function(tooltipItem){
          return tooltipItem.ylabel;
        }
      }
    }
  }
};

function DefaultDoughnutChart() {
  return (<Doughnut data={data} options={options} />);
}

export default DefaultDoughnutChart;
