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

export function Find45({aData}) {
  return(
  <>
    <Link href="/">Home</Link>
    <Bar options={aData.options} data={aData.data} />
    <h1>{aData.next.value.map((each) => {
      return <span className='bongtron'>
        {each}
      </span>
    })}</h1>
    

    <style jsx>{`
        .bongtron {
          color: orange;
          background-color: grey;
          border-radius: 49%;
          padding: 4px 8px;
          margin: 0 0 0 5px;
        }
    `}</style>
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
    data2: [],
    next: []
  }
  try {
    const response = await axios.get(`http://localhost:3000/api/getData45`);
    const reverb = await axios.get('http://localhost:3000/api/getResult45');
    let statData = JSON.parse("[" + response.data + "]");
    let resultData = JSON.parse(reverb.data)

    // THE DATA WE NEED
    for(let i = 0; i < 45; i++){
      finalData.obj.push({
        key : i + 1,
        value1 : statData[pam[0]].stat[i],
        value2 : statData[pam[1]].stat[i]
      })
    }

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

    // ANCHOR
    finalData.next = resultData[pam[1]].ketqua||'not yet'
    // console.log(resultData[pam[1]]);
    
  } catch (error) {
    console.error(error);
  }
  
  //  CHART CONFIG


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
          text: 'Mega 6-45 - Stacked',
        },
      },
    },
    data: {
      labels: finalData.labels,
      datasets: [
        {
          label: '',
          data: finalData.data1,
          backgroundColor: 'rgba(255, 99, 132, 0.7)',
        },
        {
          label: '',
          data: finalData.data2,
          backgroundColor: 'rgba(53, 162, 235, 0.7)',
        },
      ],
    },
    next: {
      value: finalData.next
      // ANCHOR
    }
  
  }
  

  return {
    props: { aData }, // will be passed to the page component as props
    // props: { data: 'hello'}
  }
}

export default Find45

