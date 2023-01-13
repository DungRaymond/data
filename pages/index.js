import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Mega 6-45 - Stacked',
    },
  },
};

const labels = ['19','24','30','37','44','06','35','05','04','01','07','25','10','11','40','13','18','27','16','21','22','41','20','26','28','32','17','45','31','33','12','23','34','39','08','36','02','09','29','03','43','14','42','15','38'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [149,143,143,139,144,145,137,140,136,137,134,135,136,133,133,131,134,129,126,127,126,127,124,126,128,124,123,127,125,122,123,125,126,120,122,121,116,118,120,117,115,115,113,110,110],
      backgroundColor: 'rgba(255, 99, 132, 0.7)',
    },
    {
      label: '',
      data: [2,6,4,8,2,1,8,3,6,3,5,4,2,3,5,4,2,5,6,4,6,4,6,5,1,6,5,1,3,6,4,2,1,5,3,3,7,5,3,5,7,4,5,6,6],
      backgroundColor: 'rgba(53, 162, 235, 0.7)',
    },
  ],
};

export function HomePage() {
  return(
  <Bar options={options} data={data} />
  )
}



export default HomePage

