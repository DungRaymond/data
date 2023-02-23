import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Link from 'next/link';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import useSWR from 'swr';

// const labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]

function dataCons(labels, data1, data2) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: '',
        data: data1,
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
      },
      {
        label: '',
        data: data2,
        backgroundColor: 'rgba(53, 162, 235, 0.7)',
      }
    ]
  }

  return data;
}

// PAGE COMPONENT

export function Find55({aData}) {
  return(
  <>
    <Link href="/">Home</Link>
    <Bar options={aData.options} data={aData.data} />
    
  </>
  )
}

import axios from 'axios';

// GET THE DATAS HERE

export async function getServerSideProps(context) {
  const pam = (context.params.pairs).split('-');
  let finalData = {
    obj: [],
    labels: [],
    data1: [],
    data2: []
  }
  try {
    const response = await axios.get(`http://localhost:3000/api/getData55`);
    let statData = JSON.parse("[" + response.data + "]")
    // THE DATA WE NEED
    for(let i = 0; i < 55; i++){
      finalData.obj.push({
        key : i + 1,
        value1 : statData[pam[0]].stat[i],
        value2 : statData[pam[1]].stat[i]
      })
    }

    // finalData.data1 = (statData[pam[0]].stat)
    // finalData.data2 = (statData[pam[1]].stat)

    let sorted = finalData.obj.sort((a,b) => {
      return b.value2 - a.value2
    })
    
    let sortedLabels = sorted.map((each) => {
      return each.key
    })
    finalData.labels = sortedLabels;

    let sortedData1 = sorted.map((each) => {
      return each.value1
    })
    finalData.data1 = sortedData1;

    let sortedData2 = sorted.map((each, index) => {
      return each.value2 - finalData.obj[index].value1
    })
    finalData.data2 = sortedData2;

    // console.log(finalData.data2);
    
  } catch (error) {
    console.error(error);
  }
  
  //  CHART CONFIG


  // const aar = [{"key":1,"value":137},{"key":2,"value":117},{"key":3,"value":117},{"key":4,"value":136},{"key":5,"value":140},{"key":6,"value":145},{"key":7,"value":134},{"key":8,"value":122},{"key":9,"value":119},{"key":10,"value":136},{"key":11,"value":133},{"key":12,"value":123},{"key":13,"value":132},{"key":14,"value":115},{"key":15,"value":111},{"key":16,"value":127},{"key":17,"value":124},{"key":18,"value":134},{"key":19,"value":149},{"key":20,"value":124},{"key":21,"value":127},{"key":22,"value":126},{"key":23,"value":126},{"key":24,"value":144},{"key":25,"value":135},{"key":26,"value":126},{"key":27,"value":131},{"key":28,"value":128},{"key":29,"value":120},{"key":30,"value":143},{"key":31,"value":126},{"key":32,"value":124},{"key":33,"value":123},{"key":34,"value":126},{"key":35,"value":137},{"key":36,"value":122},{"key":37,"value":140},{"key":38,"value":111},{"key":39,"value":120},{"key":40,"value":133},{"key":41,"value":128},{"key":42,"value":114},{"key":43,"value":115},{"key":44,"value":144},{"key":45,"value":128}]
  // const labels = [19,6,24,44,30,5,37,1,35,4,10,25,7,18,11,40,13,27,28,41,45,16,21,22,23,26,31,34,17,20,32,12,33,8,36,29,39,9,2,3,14,43,42,15,38];
  // const valueArr = [149,145,144,144,143,140,140,137,137,136,136,135,134,134,133,133,132,131,128,128,128,127,127,126,126,126,126,126,124,124,124,123,123,122,122,120,120,119,117,117,115,115,114,111,111];

  let aData = {
    options: {
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
          text: 'Mega 6-55 - Stacked',
        },
      },
    },
    data: {
      labels: finalData.labels,
      datasets: [
        {
          label: '',
          // data: [149,145,144,144,143,140,140,137,137,136,136,135,134,134,133,133,132,131,128,128,128,127,127,126,126,126,126,126,124,124,124,123,123,122,122,120,120,119,117,117,115,115,114,111,111],
          data: finalData.data1,
          backgroundColor: 'rgba(255, 99, 132, 0.7)',
        },
        {
          label: '',
          // data: [2,6,4,8,2,1,8,3,6,3,5,4,2,3,5,4,2,5,6,4,6,4,6,5,1,6,5,1,3,6,4,2,1,5,3,3,7,5,3,5,7,4,5,6,6],
          data: finalData.data2,
          backgroundColor: 'rgba(53, 162, 235, 0.7)',
        },
      ],
    }
  
  }
  

  return {
    props: { aData }, // will be passed to the page component as props
    // props: { data: 'hello'}
  }
}

export default Find55

