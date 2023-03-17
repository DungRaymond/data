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
import { useRouter } from 'next/router'

// PAGE COMPONENT

ChartJS.defaults.font.size = 15;
ChartJS.defaults.font.weight = '900';
export function Page({aData}) {
  const router = useRouter();
  const queryParam = router.query.pairs.split('-');
  // console.log(aData.data.datasets);
  return(
  <>
    <button type='button' className='pure-material-button-contained' onClick={() => {
        router.push('/')
      }}>
        Home
    </button>
    <Bar options={aData.options} data={aData.data} />
    <h1>{aData.next.value.map((each) => {
      return <span className='circle' key={each + 'hoho'}>
        {each}
      </span>
    })}</h1>
    <div className='numberInput'>
      <input className='textInput' type='text' id='first' />
      <input className='textInput' type='text' id='second' />
      <input className='textInput' type='text' id='third' />
      <button type='button' className='pure-material-button-contained' onClick={() => {
        const param1 = document.getElementById('first').value || 969;
        const param2 = document.getElementById('second').value || 999;
        const param3 = document.getElementById('third').value || param2 - 0 + 10;
        router.push('/45/' + param1 + '-' + param2 + '-' + param3);
        }
      }>
      Click here
      </button>
    </div>

      <br/>

    <div className='arrowInput'>
      <button type='button' className='pure-material-button-contained' onClick={() => {
        router.push('/45/' + queryParam[0] + '-' + queryParam[1] + '-' + (queryParam[2] - 1) )
      }}>
        prev
      </button>
      <button type='button' className='pure-material-button-contained' onClick={() => {
        if(queryParam[2] < aData.dataLength - 1) {
          router.push('/45/' + queryParam[0] + '-' + queryParam[1] + '-' + (queryParam[2] - 0 + 1))
        }
      }}>
        next
      </button>

    </div>


    <style jsx>{`
      input {
        outline: none;
        font-height: 0.6em;
        font-size: 21px;
        width: 70px;
        margin: auto 2px;
      }
      .circle {
        color: orange;
        background-color: grey;
        border-radius: 49%;
        padding: 4px 8px;
        margin: 0 0 0 5px;
      }
      .pure-material-button-contained {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        border: none;
        border-radius: 4px;
        padding: 0 16px;
        min-width: 64px;
        height: 36px;
        vertical-align: middle;
        text-align: center;
        text-overflow: ellipsis;
        text-transform: uppercase;
        color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
        background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);
        font-size: 14px;
        font-weight: 500;
        line-height: 36px;
        overflow: hidden;
        outline: none;
        cursor: pointer;
        transition: box-shadow 0.2s;
        margin-right: 3px;
      }
      .pure-material-button-contained:last-child {
        margin-right: 0;
      }
      
      .pure-material-button-contained::-moz-focus-inner {
        border: none;
      }
      
      /* Overlay */
      .pure-material-button-contained::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
        opacity: 0;
        transition: opacity 0.2s;
      }
      
      /* Ripple */
      .pure-material-button-contained::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        border-radius: 50%;
        padding: 50%;
        width: 32px; /* Safari */
        height: 32px; /* Safari */
        background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
        opacity: 0;
        transform: translate(-50%, -50%) scale(1);
        transition: opacity 1s, transform 0.5s;
      }
      
      /* Hover, Focus */
      .pure-material-button-contained:hover,
      .pure-material-button-contained:focus {
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
      }
      
      .pure-material-button-contained:hover::before {
        opacity: 0.08;
      }
      
      .pure-material-button-contained:focus::before {
        opacity: 0.24;
      }
      
      .pure-material-button-contained:hover:focus::before {
        opacity: 0.3;
      }
      
      /* Active */
      .pure-material-button-contained:active {
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
      }
      
      .pure-material-button-contained:active::after {
        opacity: 0.32;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0s;
      }
      
      /* Disabled */
      .pure-material-button-contained:disabled {
        color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
        background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.12);
        box-shadow: none;
        cursor: initial;
      }
      
      .pure-material-button-contained:disabled::before {
        opacity: 0;
      }
      
      .pure-material-button-contained:disabled::after {
        opacity: 0;
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
    data3: [],
    next: [],
    len: 0,
  }

  try {
    const response = await axios.get(`http://localhost:3000/api/getData45`); // get analyzed from result
    const reverb = await axios.get('http://localhost:3000/api/getResult45'); // get results term by term
    let statData = JSON.parse("[" + response.data + "]");
    let resultData = JSON.parse(reverb.data)

    // THE DATA WE NEED
    for(let i = 0; i < 45; i++){
      finalData.obj.push({
        key : i + 1,
        value1 : statData[pam[0]].stat[i],
        value2 : statData[pam[1]].stat[i],
        value3 : statData[pam[2]].stat[i]
      })
    }

    let sorted = finalData.obj.sort((a,b) => {
      return b.value3 - a.value3
    })
    
    let sortedLabels = sorted.map((each) => {
      if(each.key < 10) {
        return '0' + each.key
      } else {
        return each.key + ''
      }
    })
    // finalData.labels = sortedLabels;

    let sortedData1 = sorted.map((each) => {
      return each.value1
    })
    finalData.data1 = sortedData1;

    let sortedData2 = sorted.map((each, index) => {
      return each.value2 - finalData.obj[index].value1
    })
    finalData.data2 = sortedData2;

    let sortedData3 = sorted.map((each, index) => {
      return each.value3 - finalData.obj[index].value2
    })
    finalData.data3 = sortedData3;

    // ANCHOR
    finalData.next = resultData[pam[2]].ketqua||null

    finalData.labels = sortedLabels.map((each) => {
      if(!finalData.next.includes(each)) {
        return each
      } else {
        return '[' + each + ']'
      }
    })
    finalData.len = resultData.length
    
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
          display: false
        },
      },
      responsive: true,
      plugins: {
        title: {
          display: false,
          text: 'Statistical table',
        },
        legend: {
          display: false
        }
      },
    },
    data: {
      labels: finalData.labels,
      datasets: [
        {
          label: 'first pivot',
          data: finalData.data1,
          backgroundColor: 'rgba(248, 7, 188, 0.7)',
        },
        {
          label: 'second pivot',
          data: finalData.data2,
          backgroundColor: 'rgba(47, 94, 249, 0.7)',
        },
        {
          label: 'last diff',
          data: finalData.data3,
          backgroundColor: 'rgba(253, 153, 3, 0.7)',
        },
      ],
    },
    next: {
      value: finalData.next
      // ANCHOR
    },
    dataLength: finalData.len
  
  }
  

  return {
    props: { aData }, // will be passed to the page component as props
    // props: { data: 'hello'}
  }
}

export default Page

