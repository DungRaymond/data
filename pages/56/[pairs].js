import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Grid } from '@mui/material'
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import {useState} from 'react';
// import useSWR from 'swr';
import { useRouter } from 'next/router'
import Head from 'next/head'


import isInclude from '../../modules/combination.js'

// PAGE COMPONENT

ChartJS.defaults.font.size = 17;
ChartJS.defaults.font.weight = '700';

export function Page({aData}) {

  const plainArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]

  const [pick1, setPick1] = useState([])
  const [pick2, setPick2] = useState([])
  const [pick3, setPick3] = useState([])
  const [pick4, setPick4] = useState([])
  const [pick5, setPick5] = useState([])
  const [pick6, setPick6] = useState([])
  const [termplus6, setTermplus6] = useState([])
  const [last40, setLast40] = useState([])
  const [next1, setNext1] = useState([])
  const [next2, setNext2] = useState([])
  const [next3, setNext3] = useState([])
  const [next4, setNext4] = useState([])
  const [next5, setNext5] = useState([])
  const [next6, setNext6] = useState([])

  const router = useRouter();
  const queryParam = router.query.pairs.split('-');

  const findMost20 = (pick, setState) => {
    const pivot = document.getElementById(pick).value;
    if(!pivot) {
      setState([]);
    } else
    if(pivot <= 55) {
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

  const findAllNext = (pick, setState) => {
    const pivot = document.getElementById(pick).value;
    let arr = aData.getResult;
    if(!pivot) {
      setState([]);
    } else
    if(pivot <= 55) {
      let temp = [];
      for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i].ketqua.includes(pivot < 10 ? '0' + pivot : pivot)) {
          temp.push(...arr[i+1].ketqua)
        }
      }
      let items = {};
      temp.forEach(function(x) { 
        items[x] = (items[x] || 0)+1;
      });

      
      let itemsArr = Object.keys(items).map((key) => [key, items[key]]);
      let sorted = itemsArr.sort((a,b) => {
        return b[1] - a[1];
      })
      let sliced = sorted.filter(item => {
        return (item[0] - pivot != 0)
      })

      setState(sliced.slice(0,24))

    }
  }


  //
  const findByTerm = (event)  => {
    if(event.key === 'Enter') {
      event.preventDefault();
      const count = document.getElementById('term').value;
      let slicedArr = aData.getResult.slice(count - 4, count - 0 + 2);
      setTermplus6(slicedArr)
    }
  }
  

  const setTerm = () => {
    const param1 = document.getElementById('first').value || queryParam[0];
    const param2 = document.getElementById('second').value || queryParam[1];
    const param3 = document.getElementById('third').value || queryParam[2];
    router.push('/56/' + param1 + '-' + param2 + '-' + param3);
  }

  const findLast40 = (event) => {
    if(event.key === 'Enter') {
      const count = document.getElementById('last40Input').value;
      let arr = aData.getResult
      let slicedArr = arr.slice(arr.length - count, arr.length);
      setLast40(slicedArr)
    }
  }
  
  return(
  <>
      <Head>
        <title>Power</title>
      </Head>
    <Grid container spacing={1} justifyContent="space-between">
      <Grid item lg={1} sm={1}>
        <button type='button' className='pure-material-button-contained' onClick={() => {
            router.push('/')
          }}>
            /
        </button>
      </Grid>

      <Grid item sm={4}>
        <div className='arrowInput'>
        <button type='button' className='pure-material-button-contained' onClick={() => {
            router.push('/56/' + queryParam[0] + '-' + (queryParam[1] - 1) + '-' + (queryParam[2] - 0) )
          }}>
            &lt;
          </button>
          <button type='button' className='pure-material-button-contained' onClick={() => {
            if(queryParam[2] <= aData.dataLength) {
              router.push('/56/' + queryParam[0] + '-' + (queryParam[1] - 0 + 1) + '-' + (queryParam[2] - 0))
            }
          }}>
            &gt;
          </button>
          <button type='button' className='pure-material-button-contained' onClick={() => {
            router.push('/56/' + queryParam[0] + '-' + (queryParam[1] - 0 ) + '-' + (queryParam[2] - 1) )
          }}>
            &lt;&lt;
          </button>
          <button type='button' className='pure-material-button-contained' onClick={() => {
            if(queryParam[2] < aData.dataLength) {
              router.push('/56/' + queryParam[0] + '-' + (queryParam[1] - 0) + '-' + (queryParam[2] - 0 + 1))
            }
          }}>
            &gt;&gt;
          </button>
          <button type='button' className='pure-material-button-contained' onClick={() => {
            if(queryParam[2] < aData.dataLength) {
              router.push('/56/0-' + (aData.dataLength - 118) + '-' + (aData.dataLength))
            }
          }}>
            Last
          </button>

        </div>
      </Grid>

      <Grid item sm={4}>
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
    
    <Grid container justifyContent="space-evenly">
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
    <Grid container sx={{width: '2040px', height: '46vh'}}>
      <Bar options={aData.options} data={aData.data} />
    </Grid>
    <br/>


    <Grid container>
      
    </Grid>

{/* //SECTION single number review */}

    {[['pick1', pick1, setPick1, next1, setNext1],['pick2', pick2, setPick2, next2, setNext2],
    ['pick3', pick3, setPick3, next3, setNext3], ['pick4', pick4, setPick4, next4, setNext4], 
    ['pick5', pick5, setPick5, next5, setNext5], ['pick6', pick6, setPick6, next6, setNext6]].map((each) => {
      return (
        <>
          <Grid container spacing={0}>
            <Grid item xs={0}>
              <input className='textInput' type='text' id={each[0]} 
              onKeyDown={(event) => {
                if(event.key === 'Enter') {
                  findMost20(each[0], each[2]);
                  findAllNext(each[0], each[4])
                }
              }}/>
            </Grid>

            <Grid item container sm={12}>

              {each[3].map((each, i) => {
                return(
                  <>
                      <Grid item xs={1} sm={0.5} textAlign={'center'}>
                        <p className='pairShow2' key={i}>
                          {each[0]}
                          <span className='pairCount2'>
                          <br/>
                          {each[1]}

                        </span>
                        </p>
                      </Grid>  
                    </>
                )
              })}                



            </Grid>

          </Grid>
        <hr />
        </>
          )
        })}


    <input className='textInput' type='text' id={"last40Input"} onKeyDown={event => {
              findLast40(event)
      }} />
        <input className='textInput box1' type='text' id={"last40Indicator"} onKeyDown={event => {
                  findLast40(event,'box1')
          }} />
          <input className='textInput box2' type='text' id={"last40Indicator2"} onKeyDown={event => {
                  findLast40(event, 'box2')
          }} />
        <input className='textInput box3' type='text' id={"last40Indicator3"} onKeyDown={event => {
                  findLast40(event, 'box3')
          }} />
          <input className='textInput box4' type='text' id={"last40Indicator4"} onKeyDown={event => {
                  findLast40(event, 'box4')
          }} />
        <input className='textInput box5' type='text' id={"last40Indicator5"} onKeyDown={event => {
                  findLast40(event, 'box5')
          }} />

      <br/>

    <Grid item container sm={12} lg={11}>
      {last40.map((each) => {
          return (
            <Grid item lg={4} xs={4} sm={4} borderRight="2px solid black">
              <span>
                <p>
                  <span className="bongterm">{each.term}</span>
                  <span className='bongdate'>{each.date}</span>
                </p>
                <p>
                  {each.ketqua.map((bong) => {
                    const param1 = document.getElementById('last40Indicator').value;
                    const param2 = document.getElementById('last40Indicator2').value;
                    const param3 = document.getElementById('last40Indicator3').value;
                    const param4 = document.getElementById('last40Indicator4').value;
                    const param5 = document.getElementById('last40Indicator5').value;
                    let psyBong = parseInt(bong)
                    switch(psyBong) {
                      case parseInt(param1):
                        return <span className='bongcloud-green'>
                          {bong}
                        </span>;
                        break;
                      case parseInt(param2):
                        return <span className='bongcloud-purple'>
                          {bong}
                        </span>;
                        break;
                      case parseInt(param3):
                        return <span className='bongcloud-red'>
                          {bong}
                        </span>;
                        break;
                      case parseInt(param4):
                        return <span className='bongcloud-orange'>
                          {bong}
                        </span>;
                        break;
                      case parseInt(param5):
                        return <span className='bongcloud-pink'>
                          {bong}
                        </span>;
                        break;
                      default:
                        return <span className='bongcloud'>
                          {bong}
                        </span>

                    }
                  })}
                </p>

              </span>
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
                          {each.ketqua.map((bong) => {
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


      </Grid>
            <Grid container sx={{width: '2040px', height: '46vh'}}>
              <Bar options={aData.options} data={aData.data} />
            </Grid>
            <br/>

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
    }
    .pairCount {
      font-weight: 700;
      font-size: 17px;
      color: brown;
      font-family: 'Roboto', sans-serif;
    }
    .pairShow2 {
      font-weight: 900;
      font-family: 'Roboto', sans-serif;
      background-color: rgb(139, 224, 222, 0.6);
      color: ;
      margin-right: 4px;
      font-size: 18px;
    }
    .pairCount2 {
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
    background-color: black;
    color: white;
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
  .bongcloud-green {
    border: 2px black solid;
    background-color: RGB(37,160,9,0.7);
    border-radius: 5px;
    margin-left: 3px;
    padding: 0 1px;
    padding-right: 2px;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3em;
  }
  .bongcloud-purple {
    border: 2px black solid;
    background-color: RGB(168,5,252,0.8);
    border-radius: 5px;
    margin-left: 3px;
    padding: 0 1px;
    padding-right: 2px;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3em;
  }
  .bongcloud-red {
    border: 2px black solid;
    background-color: RGB(255,15,15,0.7);
    border-radius: 5px;
    margin-left: 3px;
    padding: 0 1px;
    padding-right: 2px;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3em;
  }
  .bongcloud-orange {
    border: 2px black solid;
    background-color: orange;
    border-radius: 5px;
    margin-left: 3px;
    padding: 0 1px;
    padding-right: 2px;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3em;
  }
  .bongcloud-pink {
    border: 2px black solid;
    background-color: RGB(206,114,203,0.7);
    border-radius: 5px;
    margin-left: 3px;
    padding: 0 1px;
    padding-right: 2px;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3em;
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
  font-size: 0.9em;
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
  font-size: 0.9em;
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
      #latest_result > span:last-child {
        border-left: none;
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
        background-color: rgb(24, 61, 61, 0.8);
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
        .box1 {
          border: 1px solid black;
          border-radius: 3px;
          background-color: RGB(37,160,9,0.7);
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
        .box4 {
          border: 1px solid black;
          border-radius: 3px;
          background-color: orange;
          text-align: center;
        }
        .box5 {
          border: 1px solid black;
          border-radius: 3px;
          background-color: RGB(206,114,203,0.7);
          text-align: center;
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
    modeData: [],
    resultData: []
  }

  try {
    const response = await axios.get(process.env.basepath + `/api/getData56`); // get analyzed from result
    let statData = JSON.parse("[" + response.data + "]");

    const reverb = await axios.get(process.env.basepath + '/api/getResult55'); // get results term by term
    finalData.resultData = JSON.parse(reverb.data);

    const modeList = await axios.get(process.env.basepath + '/api/getMode56');
    finalData.modeData = JSON.parse(modeList.data)

    // THE DATA WE NEED
    for(let i = 0; i < 55; i++){
      finalData.obj.push({
        key : i + 1,
        value1 : statData[pam[0]].stat[i],
        value2 : statData[pam[1]].stat[i],
        value3 : statData[pam[2]].stat[i],
      })
    }

    let sorted = finalData.obj.sort((a,b) => {
      return b.value3 - a.value3
    })
    
    // sorted result ball number
    let sortedLabels = sorted.map((each) => {
      if(each.key < 10) {
        return '0' + each.key
      } else {
        return each.key + ''
      }
    })

    // DEPRECATED

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

    // DEPRECATED-END

    let sortedTotal = sorted.map((each, index) => {
      return each.value3
    })
    finalData.total = sortedTotal;

    // ANCHOR
    finalData.next = finalData.resultData[pam[2] - 1].ketqua
    
    finalData.labels = sortedLabels.map((each) => {
      if(!finalData.next.includes(each)) {
        return each
      } else {
        return '[' + each + ']'
      }
    })
    finalData.len = finalData.resultData.length

    // let sortedLast100Data = sorted.map((each) => {
    //   return each.last100
    // })
    // finalData.last100Data = sortedLast100Data;
    
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
          display: true
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
          backgroundColor: 'rgb(24, 61, 61, 0.8)',
        },
        {
          label: 'Last',
          data: finalData.data3,
          backgroundColor: 'rgb(154, 59, 59, 0.9)',
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
