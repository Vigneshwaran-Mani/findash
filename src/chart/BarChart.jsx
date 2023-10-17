import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 7,
            borderSkipped: false,
            backgroundColor: "#5a32ea",
            data: [50, 20, 10, 22, 50, 10, 40, 20, 30, 40, 55, 60],
            maxBarThickness: 30,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    interaction: {
        intersect: false,
        mode: "index",
    },
    scales: {
        y: {
            grid: {
                drawBorder: false,
                display: false,
                drawOnChartArea: false,
                drawTicks: false,
                borderDash: [5, 5],
                color: "#fff",
            },
            ticks: {
                display: false,
                suggestedMin: 0,
                suggestedMax: 500,
                beginAtZero: true,
                padding: 10,
                font: {
                    size: 14,
                    weight: 300,
                    family: "Roboto",
                    style: "normal",
                    lineHeight: 2,
                },
                color: "#fff",
            },
        },
        x: {
            grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: false,
                drawTicks: false,
                borderDash: [5, 5],
                color: "rgba(255, 255, 255, .2)",
            },
            ticks: {
                display: true,
                color: "#1a0000",
                padding: 10,
                font: {
                    size: 14,
                    weight: 300,
                    family: "Roboto",
                    style: "normal",
                    lineHeight: 2,
                },
            },
        },
    },
}

    export default function DefaultBarChart(){
        return(<Bar data={data} options={options} redraw />);
}