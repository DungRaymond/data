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
import isInclude from '../../modules/combination.js'


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
  const queryParam = router.query.pairs.split('-');
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
      // axios.get(aData.basepath + '/api/getMode45')
      // .then(res => {
      //   let arr = JSON.parse(res.data)
      //   arr = arr[pivot - 1].modeList;
      //   let sliced = arr.slice(0, pivot - 1);
      //   sliced = sliced.concat(arr.slice(pivot, arr.length))
        
      //   let sorted = sliced.sort((a,b) => {
      //     return b.count - a.count
      //   })
  
      //   setState(sorted.slice(0, 24))
      // })

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

  const findLast40 = (event) => {
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
    <br/>

    <Grid container item justifyContent="space-evenly">
    <Grid item sm={6}>
        <div id='latest_result'>{aData.next.value.map((each) => {
          return <span className='circle' key={each + 'hoho'}>
            {each}
          </span>
        })}
        </div>

      </Grid>
      <Grid item sm={2}>
        <span className='bongterm'>
          {queryParam[2] - 0}
        </span>
      </Grid>
    </Grid>
          <br/>

    <Grid container sx={{height: '46vh', width: '1880px'}}>
      <Bar options={aData.options} data={aData.data} />
    </Grid>

    <hr style={{padding: '1px 0'}}/>

    <br/>
    
    {[['pick1', pick1, setPick1],['pick2', pick2, setPick2],
    ['pick3', pick3, setPick3], ['pick4', pick4, setPick4], 
    ['pick5', pick5, setPick5], ['pick6', pick6, setPick6]].map((each) => {
      return (
        <>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <input className='textInput' type='text' id={each[0]} 
              onKeyDown={(event) => {
                if(event.key === 'Enter') {
                  findMost20(each[0], each[2]);
                }
              }}/>
            </Grid>

            <Grid item container sm={12}>

              {each[1].map((each,i) => {
                return(
                  <Grid item xs={1}>
                    <p className='pairShow' key={i}>
                      {each.number} 
                      <span className='pairCount'>
                        <br/>
                        {each.count}

                      </span>
                    </p>
                  </Grid>
                  )
                })}
            </Grid>

          </Grid>
        <hr />
        </>
          )
        })}
    

    <hr/>

    

    {/** PART 3 */}


    <input className='textInput' type='text' id={"last40Input"} onKeyDown={event => {
              findLast40(event)
      }} />

    <input className='textInput' type='text' id={"last40Indicator"} onKeyDown={event => {
              findLast40(event)
      }} />
      <input className='textInput' type='text' id={"last40Indicator2"} onKeyDown={event => {
              findLast40(event)
      }} />
    <input className='textInput' type='text' id={"last40Indicator3"} onKeyDown={event => {
              findLast40(event)
      }} />

      <br/>
      <br/>
      <hr/>

    <Grid item container sm={12} lg={11}>
      {last40.map((each) => {
          return (
            <Grid item lg={4} xs={4} sm={4} borderRight="2px solid black">
              <>
                <p>
                  <span className="bongterm">{each.term}</span>
                  <span className='bongdate'>{each.date}</span>
                </p>
                <p>
                  {each.jackpot.map((bong) => {
                    const param1 = document.getElementById('last40Indicator').value;
                    const param2 = document.getElementById('last40Indicator2').value;
                    const param3 = document.getElementById('last40Indicator3').value;
                    let psyBong = parseInt(bong)
                    if(psyBong == parseInt(param1) || psyBong == parseInt(param2) || psyBong == parseInt(param3)){
                      return <span className='bongcloud-white'>
                        {bong}
                      </span>
                    }
                    return <span className='bongcloud'>
                      {bong}
                    </span>
                  })}
                </p>

              </>
            </Grid>
          )
        })}
      </Grid>

      <Grid item container>
            <Grid item sm={3}>
              <input className='textInput' type='text' id={"term"} onKeyDown={event => {
                findByTerm(event)
              }} />
            </Grid> 

            <Grid item container sm={12} lg={12}>
              {termplus6.map((each) => {
                  return (
                    <Grid item lg={4} xs={4} sm={4} borderRight="2px solid black">
                      <>
                        <p>
                          <span className="bongterm2">{each.term}</span>
                          <span className='bongdate2'>{each.date}</span>
                        </p>
                        <p>
                          {each.jackpot.map((bong) => {
                            const param1 = document.getElementById('last40Indicator').value;
                            const param2 = document.getElementById('last40Indicator2').value;
                            const param3 = document.getElementById('last40Indicator3').value;
                            let psyBong = parseInt(bong)
                            if(psyBong == parseInt(param1) || psyBong == parseInt(param2) || psyBong == parseInt(param3)){
                              return <span className='bongcloud-white2'>
                                {bong}
                              </span>
                            }
                            return <span className='bongcloud2'>
                              {bong}
                            </span>
                          })}
                        </p>

                      </>
                    </Grid>
                  )
                })}
            </Grid>

{/* SECTION */}
{/* //bar2 */}
            <Grid container sx={{height: '46vh', width: '1880px'}}>
              <Bar options={aData.options} data={aData.data} />
            </Grid>


      </Grid>

      <br/>
      <br/>
    <hr/>
    <hr/>
    <hr/>




    <style jsx>{`
    .pairShow {
      font-weight: 900;
      font-family: 'Roboto', sans-serif;
      background-color: beige;
      color: ;
      margin-right: 4px;
      font-size: 18px;
      padding: auto;
    }
    .pairCount {
      font-weight: 700;
      font-size: 17px;
      color: brown;
      font-family: 'Roboto', sans-serif;
    }
     .bongterm {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        font-family: 'Roboto', sans-serif;
        color: orange;
        background-color: grey;
        border-radius: 5px;
        border: 1px black solid;
        padding: 4px 4px 2px 4px;
        margin-left: 2px;
    }
    .bongdate {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;
      color: white;
      background-color: blue;
      border-radius: 5px;
      border: 1px black solid;
      padding: 4px 4px 2px 4px;
      margin-left: 6px;
    }
    .bongcloud {
      border-left: 1px black solid;
      background-color: orange;
      font-family: 'Roboto', sans-serif;
      border-radius: 5px;
      margin-left: 3px;
      padding: 0 1px;
      padding-right: 2px;
      font-size: 1.2em;
    }
    .bongcloud:last-child {
      margin-right: 0;
    }
    .bongcloud-white {
      border: 1px black solid;
      background-color: black;
      border-radius: 5px;
      margin-left: 3px;
      padding: 0 1px;
      padding-right: 2px;
      color: white;
      font-family: 'Roboto', sans-serif;
      font-size: 1.2em;
    }
    .bongcloud-white:last-child {
      margin-right: 0;
    }
    .bongterm2 {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      font-family: 'Roboto', sans-serif;
      color: orange;
      background-color: grey;
      border-radius: 5px;
      border: 1px black solid;
      padding: 4px 4px 2px 4px;
      margin-left: 2px;
  }
  .bongdate2 {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: white;
    background-color: blue;
    border-radius: 5px;
    border: 1px black solid;
    padding: 4px 4px 2px 4px;
    margin-left: 6px;
  }
  .bongcloud2 {
    border-left: 1px black solid;
    background-color: orange;
    font-family: 'Roboto', sans-serif;
    border-radius: 5px;
    margin-left: 3px;
    padding: 0 1px;
    padding-right: 2px;
    font-size: 1.2em;
  }
  .bongcloud2:last-child {
    margin-right: 0;
  }
  .bongcloud-white2 {
    border: 1px black solid;
    background-color: black;
    border-radius: 5px;
    margin-left: 3px;
    padding: 0 1px;
    padding-right: 2px;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2em;
  }
  .bongcloud-white2:last-child {
    margin-right: 0;
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

      #latest_result > span {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        font-family: 'Helvetica';
        color: orange;
        background-color: grey;
        border-radius: 6px;
        padding: 4px 8px 2px 8px;
        margin-left: 2px;
      }

      #latest_result > span:first-child {
        margin-left: 4px;
        border-left: none;
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
    total: [],
    next: [],
    len: 0,
    
  }

  try {
    const response = await axios.get( process.env.basepath + `/api/getData45`); // get analyzed from result
    let statData = JSON.parse("[" + response.data + "]");

    const reverb = await axios.get( process.env.basepath + '/api/getResult45'); // get results term by term
    finalData.resultData = JSON.parse(reverb.data)

    const modeList = await axios.get(process.env.basepath + '/api/getMode45');
    finalData.modeData = JSON.parse(modeList.data)

    // THE DATA WE NEED
    for(let i = 0; i < 45; i++){
      finalData.obj.push({
        key : i + 1,
        value1 : statData[pam[0]].stat[i],
        value2 : statData[pam[1]].stat[i],
        value3 : statData[pam[2]].stat[i],
        // last100: freqData[freqData.length - 1].stat[i]
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

    console.log(sortedLabels);

    let sortedData1 = sorted.map((each) => {
      return each.value1
    })
    finalData.data1 = sortedData1;

    let sortedData2 = sorted.map((each, index) => {
      return each.value3 - finalData.obj[index].value1
    })
    finalData.data2 = sortedData2;

    let sortedData3 = sorted.map((each, index) => {
      return each.value3 - finalData.obj[index].value2
    })
    finalData.data3 = sortedData3;

    let sortedTotal = sorted.map((each, index) => {
      return each.value3
    })
    finalData.total = sortedTotal;

    // ANCHOR
    finalData.next = finalData.resultData[pam[2] - 1].jackpot||null

    finalData.labels = sortedLabels.map((each) => {
      if(!finalData.next.includes(each)) {
        return each
      } else {
        return '[' + each + ']'
      }
    })
    finalData.len = finalData.resultData.length

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
        max: 400,
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
    data: {
      labels: finalData.labels,
      datasets: [
        {
          label: 'Total',
          data: finalData.data2,
          backgroundColor: 'rgba(47, 94, 249, 0.9)',
        },
        {
          label: 'Last',
          data: finalData.data3,
          backgroundColor: 'rgba(208,9,241,1)',
        },
      ],
    },
    getMode: finalData.modeData,
    getResult: finalData.resultData,
    next: {
      value: finalData.next
      // ANCHOR
    },
    dataLength: finalData.len,
    basepath: process.env.basepath
  
  }
  

  return {
    props: { aData }, // will be passed to the page component as props
    // props: { data: 'hello'}
  }
}

export default Page