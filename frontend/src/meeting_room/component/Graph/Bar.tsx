import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const GraphBar: React.FC = () => {
    const labels = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40, 70, 66, 75, 90, 85], // Data for 12 months
      backgroundColor: [
        '#007bff',
        '#007bff',
        '#007bff',
        '#007bff',
        '#007bff',
        '#007bff',
        '#007bff',
        '#007bff',
        '#007bff',
        '#007bff',
        '#007bff',
        '#007bff',
      ],
      // ปรับให้เส้นขอบหนาขึ้นเพื่อให้ดูเด่นชัด
    }]
  }
  
  const options = {
    plugins: {
      
    },
    
  };
  return (
    <div style={{width:'100%'}}>
      <Bar data={data} options={options}/>
    </div>
  );
};

export default GraphBar;
