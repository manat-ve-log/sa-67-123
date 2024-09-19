import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  // Define the data for the Line chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
          label: 'Food Revenue',
          data: [12000, 13500, 15000, 14500, 16000, 17000, 17500, 18000, 16500, 15500, 15000, 14000],
          fill: false, 
          borderColor: 'rgb(75, 19, 192)', 
          tension: 0.5, 
        },
        {
          label: 'Room Revenue',
          data: [20000, 22000, 21000, 23000, 24000, 25000, 24500, 26000, 25500, 25000, 24000, 23500],
          fill: false, 
          borderColor: 'rgb(75, 192, 19)', 
          tension: 0.5, 
        },
        {
          label: 'Seminar Room Revenue',
          data: [8000, 8500, 9000, 9500, 9200, 8800, 8700, 8900, 8600, 8400, 8300, 8200],
          fill: false, 
          borderColor: 'rgb(233, 192, 192)', 
          tension: 0.5, 
        },
      ],
  };
  

  // Define the options for the Line chart
  const options = {
    plugins: {
      legend: {
        position: 'bottom', // Position of the legend (e.g., 'top', 'bottom', 'left', 'right')
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Ensures the y-axis starts at zero
      },
    },
  };

  return (
    <div style={{width:'100%',height:'98%',display:'flex',justifyContent:'end'}}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
