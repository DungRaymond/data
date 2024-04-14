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
import { Button, Grid, useMediaQuery } from '@mui/material';

`use client`

import {useState} from 'react';
import Head from 'next/head'
import isInclude from '../modules/combination.js'


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

ChartJS.defaults.font.weight = '700';
ChartJS.defaults.font.size = 18;

export function Page({aData}) {
  const [pick1, setPick1] = useState([])
  const [pick2, setPick2] = useState([])
  const [pick3, setPick3] = useState([])
  const [pick4, setPick4] = useState([])
  const [pick5, setPick5] = useState([])
  const [pick6, setPick6] = useState([])
  const [last40, setLast40] = useState([])
  const [termplus6, setTermplus6] = useState([])
  const [data, setData] = useState([])

  const plainArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]

  const router = useRouter();
  // const queryParam = router.query.pairs.split('-');
  // console.log(aData.data.datasets);

  const matches = useMediaQuery('(max-width: 896px)', {defaultMatches: true})

  const setTerm = () => {
    const param1 = document.getElementById('first').value || queryParam[0];
    const param2 = document.getElementById('second').value || queryParam[1];
    const param3 = document.getElementById('third').value || queryParam[2];
    router.push('/45/' + param1 + '-' + param2 + '-' + param3);
  }

  const findMost20 = (pick, setState) => {
    const pivot = document.getElementById(pick).value;
    if(!pivot) {
      setState([]);
    } else
    if(pivot <= 45) {

      let arr = aData.getMode
      arr = arr[pivot - 1].modeList;
      let sliced = arr.slice(0, pivot - 1);
      sliced = sliced.concat(arr.slice(pivot, arr.length))
      
      let sorted = sliced.sort((a,b) => {
        return b.count - a.count
      })

      setState(sorted.slice(0, 24))
    }
  }

  
  const findByTerm = (event)  => {
    if(event.key === 'Enter') {
      event.preventDefault();
      const count = document.getElementById('term').value;
      axios.get(aData.basepath + '/api/getResult45')
      .then(res => {
        let arr = (JSON.parse(res.data))
        let slicedArr = arr.slice(count - 4, count - 0 + 2);
        setTermplus6(slicedArr)
      })
    }
  }

  const findLast40 = (event, box) => {
    if(event.key === 'Enter') {
      const count = document.getElementById('last40Input').value;
      axios.get(aData.basepath + '/api/getResult45')
      .then(res => {
        let arr = (JSON.parse(res.data))
        let slicedArr = arr.slice(arr.length - count, arr.length);
        setLast40(slicedArr)
      })
    }
  }



//SECTION - VIEW CONTENT START HERE

  return(
  <>
    <Head>
      <title>Mega</title>
    </Head>

    <Grid container spacing={1} justifyContent="space-between">
      <Grid item lg={1} sm={1}>
        <button type='button' className='pure-material-button-contained' onClick={() => {
            router.push('/')
          }}>
            /
        </button>
      </Grid>

      <Grid item sm={5}>
        <div className='arrowInput'>
          <button type='button' className='pure-material-button-contained' onClick={() => {
            router.push('/45/' + queryParam[0] + '-' + (queryParam[1] - 1) + '-' + (queryParam[2] - 0) )
          }}>
            &lt;
          </button>
          <button type='button' className='pure-material-button-contained' onClick={() => {
            if(queryParam[2] <= aData.dataLength) {
              router.push('/45/' + queryParam[0] + '-' + (queryParam[1] - 0 + 1) + '-' + (queryParam[2] - 0))
            }
          }}>
            &gt;
          </button>
          <button type='button' className='pure-material-button-contained' onClick={() => {
            router.push('/45/' + queryParam[0] + '-' + (queryParam[1] - 0 ) + '-' + (queryParam[2] - 1) )
          }}>
            &lt;&lt;
          </button>
          <button type='button' className='pure-material-button-contained' onClick={() => {
            if(queryParam[2] < aData.dataLength) {
              router.push('/45/' + queryParam[0] + '-' + (queryParam[1] - 0) + '-' + (queryParam[2] - 0 + 1))
            }
          }}>
            &gt;&gt;
          </button>
          <button type='button' className='pure-material-button-contained' onClick={() => {
            if(queryParam[2] < aData.dataLength) {
              router.push('/45/0-' + (aData.dataLength - 90) + '-' + (aData.dataLength))
            }
          }}>
            Last
          </button>

        </div>
      </Grid>

      <Grid item sm={3}>
        <div className='numberInput'>
          <input className='textInput' type='text' id='first' onKeyDown={(event) => {
            if(event.key === 'Enter') {
              setTerm()
            }
          }}/>
          <input className='textInput' type='text' id='second' onKeyDown={(event) => {
            if(event.key === 'Enter') {
              setTerm()
            }
          }}/>
          <input className='textInput' type='text' id='third' onKeyDown={(event) => {
            if(event.key === 'Enter') {
              setTerm()
            }
          }}/>
        </div>
      </Grid>


    </Grid>


    <style>
      {`
        .box1 {
          border: 1px solid black;
          border-radius: 3px;
          background-color: RGB(255,235,17,0.7);
          text-align: center;
        }
        .box2 {
          border: 1px solid black;
          border-radius: 3px;
          background-color: RGB(117,6,229,0.7);
          text-align: center;
        }
        .box3 {
          border: 1px solid black;
          border-radius: 3px;
          background-color: rgb(211,6,6,0.7);
          text-align: center;
        }
        input {
          position: relative;
          display: inline-block;
          outline: none;
          font-height: 0.6em;
          font-size: 20px;
          width: 2.5em;
          height: 1.3em;
          margin: 2px 1px;
          vertical-align: middle;
        }
  
        .pure-material-button-contained {
          position: relative;
          display: inline-block;
          box-sizing: border-box;
          border: none;
          border-radius: 4px;
          padding: 0 6px;
          min-width: 52px;
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
      `}
    </style>

  </>
  )

}











import axios from 'axios';

// GET THE DATAS HERE

export async function getServerSideProps(context) {
  let propsData = {
    obj: [],
    labels: [],
    chartData: [],
    resultData: [],
    modeData: [],
    len: 0,
    
  }

  try {
    const response = await axios.get( process.env.basepath + `/api/getData45`); // get analyzed from result
    propsData.chartData = JSON.parse("[" + response.data + "]");
    
    const reverb = await axios.get( process.env.basepath + '/api/getResult45'); // get results term by term
    propsData.resultData = JSON.parse(reverb.data)
    
    const modeList = await axios.get(process.env.basepath + '/api/getMode45');
    propsData.modeData = JSON.parse(modeList.data)
    
    // THE DATA WE NEED
    propsData.len = propsData.resultData.length

  } catch (error) {
    console.error(error);
  }
  
  //  CHART CONFIG


  let aData = {
    options: {
      indexAxis: 'x',
      barThickness: '20',
      maintainAspectRatio: false,
      aspectRatio: 1,
      scales: {
        x: {
          stacked: true,
          display: true,
        },
        y: {
          stacked: true,
          display: true,
        },
        min: 0,
        max: 200,
      },
      responsive: true,
      plugins: {
        title: {
          display: false,
          text: 'Statistical table',
        },
        legend: {
          display: true
        }
      },
    },
    preSortedData: propsData.chartData,
    getMode: propsData.modeData,
    getResult: propsData.resultData,
    // ANCHOR
    dataLength: propsData.len,
    basepath: process.env.basepath
  
  }
  

  return {
    props: { aData }, // will be passed to the page component as props
    // props: { data: 'hello'}
  }
}

export default Page