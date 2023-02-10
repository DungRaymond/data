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

const labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]
// const labels = ['19','24','30','37','44','06','35','05','04','01','07','25','10','11','40','13','18','27','16','21','22','41','20','26','28','32','17','45','31','33','12','23','34','39','08','36','02','09','29','03','43','14','42','15','38'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [140,123,122,142,143,146,139,125,123,138,136,127,135,119,116,132,128,136,151,130,131,132,127,149,139,131,134,129,123,147,128,130,128,127,145,124,147,116,125,138,131,118,122,146,128],
      backgroundColor: 'rgba(255, 99, 132, 0.7)',
    },
    {
      label: '',
      // data: [2,6,4,8,2,1,8,3,6,3,5,4,2,3,5,4,2,5,6,4,6,4,6,5,1,6,5,1,3,6,4,2,1,5,3,3,7,5,3,5,7,4,5,6,6],
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

