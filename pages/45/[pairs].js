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

import { Grid } from '@mui/material';

`use client`

import {useState} from 'react';
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

ChartJS.defaults.font.size = 14;
ChartJS.defaults.font.weight = '900';
export function Page({aData}) {
  const [pick1, setPick1] = useState([])
  const [pick2, setPick2] = useState([])
  const [pick3, setPick3] = useState([])
  const [pick4, setPick4] = useState([])
  const [pick5, setPick5] = useState([])
  const [pick6, setPick6] = useState([])
  const [pair, setPair] = useState([])
  const [checked, setChecked] = useState([])

  const router = useRouter();
  const queryParam = router.query.pairs.split('-');
  // console.log(aData.data.datasets);
  return(
  <>
    <Grid container spacing={1}>
      <Grid item xs={1}>
        <button type='button' className='pure-material-button-contained' onClick={() => {
            router.push('/')
          }}>
            Home
        </button>
      </Grid>

      <Grid item xs={3}>
        <div id='latest_result'>{aData.next.value.map((each) => {
          return <span className='circle' key={each + 'hoho'}>
            {each}
          </span>
        })}
          {/* <span>
            {queryParam[2] - 0 + 1}
          </span> */}
        </div>
      </Grid>

      <Grid item xs={3}>
        <div className='arrowInput'>
          <button type='button' className='pure-material-button-contained' onClick={() => {
            router.push('/45/' + queryParam[0] + '-' + queryParam[1] + '-' + (queryParam[2] - 1) )
          }}>
            prev
          </button>
          <button type='button' className='pure-material-button-contained' onClick={() => {
            if(queryParam[2] < aData.dataLength) {
              router.push('/45/' + queryParam[0] + '-' + queryParam[1] + '-' + (queryParam[2] - 0 + 1))
            }
          }}>
            next
          </button>
          <button type='button' className='pure-material-button-contained' onClick={() => {
            if(queryParam[2] < aData.dataLength) {
              router.push('/45/0-' + (aData.dataLength - 18) + '-' + (aData.dataLength))
            }
          }}>
            last
          </button>

        </div>
      </Grid>

      <Grid item xs={5}>
        <div className='numberInput'>
          <input className='textInput' type='text' id='first' />
          <input className='textInput' type='text' id='second' />
          <input className='textInput' type='text' id='third' />
          <button type='button' className='pure-material-button-contained' onClick={() => {
            const param1 = document.getElementById('first').value || 0;
            const param2 = document.getElementById('second').value || 1043;
            const param3 = document.getElementById('third').value || 1061;
            router.push('/45/0' + '-' + (param2||param3 - 18) + '-' + param3);
            }
          }>
          Click here
          </button>
        </div>
      </Grid>
    </Grid>

          <br/>

    <Bar options={aData.options} data={aData.data} />

    <br/>

    <Grid container spacing={2}>
      <Grid item xs={2}>
        <input className='textInput' type='text' id='pick1' 
        onKeyDown={(event) => {
          if(event.code === 'Enter') {
            const pivot = document.getElementById('pick1').value;
            axios.get('http://localhost:3000/api/getMode45')
            .then(res => {
              let arr = JSON.parse(res.data)
              arr = arr[pivot - 1].modeList;
              let sliced = arr.slice(0, pivot - 1);
              sliced = sliced.concat(arr.slice(pivot, arr.length))
             
              let sorted = sliced.sort((a,b) => {
                return b.count - a.count
              })

              setPick1(sorted.slice(0, 9))
            })
          }
        }}/>
      </Grid>
      {pick1.map((each,i) => {
        return(
          <Grid item xs={1}>
            <h3 key={i}>
              {each.number} ({each.count})
            </h3>
          </Grid>
        )
      })}
    </Grid>

    <hr/>
    
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <input className='textInput' type='text' id='pick2' onKeyDown={(event) => {
          if(event.code === 'Enter') {
            const pivot = document.getElementById('pick2').value;
            axios.get('http://localhost:3000/api/getMode45')
            .then(res => {
              let arr = JSON.parse(res.data)
              arr = arr[pivot - 1].modeList;
              let sliced = arr.slice(0, pivot - 1);
              sliced = sliced.concat(arr.slice(pivot, arr.length))
              
              let sorted = sliced.sort((a,b) => {
                return b.count - a.count
              })

              setPick2(sorted.slice(0, 9))
            })
          }
        }}/>
      </Grid>
      {pick2.map((each,i) => {
        return(
          <Grid item xs={1}>
            <h3 key={i}>
              {each.number} ({each.count})
            </h3>
          </Grid>
        )
      })}
    </Grid>

    <hr/>

    <Grid container spacing={2}>
      <Grid item xs={2}>
        <input className='textInput' type='text' id='pick3' onKeyDown={(event) => {
          if(event.code === 'Enter') {
            const pivot = document.getElementById('pick3').value;
            axios.get('http://localhost:3000/api/getMode45')
            .then(res => {
              let arr = JSON.parse(res.data)
              arr = arr[pivot - 1].modeList;
              let sliced = arr.slice(0, pivot - 1);
              sliced = sliced.concat(arr.slice(pivot, arr.length))
              
              let sorted = sliced.sort((a,b) => {
                return b.count - a.count
              })

              setPick3(sorted.slice(0, 9))
            })
          }
        }}/>
      </Grid>
      {pick3.map((each,i) => {
        return(
          <Grid item xs={1}>
            <h3 key={i}>
              {each.number} ({each.count})
            </h3>
          </Grid>
        )
      })}
    </Grid>

    <hr/>

    <Grid container spacing={2}>
      <Grid item xs={2}>
        <input className='textInput' type='text' id='pick4' onKeyDown={(event) => {
          if(event.code === 'Enter') {
            const pivot = document.getElementById('pick4').value;
            axios.get('http://localhost:3000/api/getMode45')
            .then(res => {
              let arr = JSON.parse(res.data)
              arr = arr[pivot - 1].modeList;
              let sliced = arr.slice(0, pivot - 1);
              sliced = sliced.concat(arr.slice(pivot, arr.length))
              
              let sorted = sliced.sort((a,b) => {
                return b.count - a.count
              })

              setPick4(sorted.slice(0, 9))
            })
          }
        }}/>
      </Grid>
      {pick4.map((each,i) => {
        return(
          <Grid item xs={1}>
            <h3 key={i}>
              {each.number} ({each.count})
            </h3>
          </Grid>
        )
      })}
    </Grid>

    <hr/>

    <Grid container spacing={2}>
      <Grid item xs={2}>
        <input className='textInput' type='text' id='pick5' onKeyDown={(event) => {
          if(event.code === 'Enter') {
            const pivot = document.getElementById('pick5').value;
            axios.get('http://localhost:3000/api/getMode45')
            .then(res => {
              let arr = JSON.parse(res.data)
              arr = arr[pivot - 1].modeList;
              let sliced = arr.slice(0, pivot - 1);
              sliced = sliced.concat(arr.slice(pivot, arr.length))
              
              let sorted = sliced.sort((a,b) => {
                return b.count - a.count
              })

              setPick5(sorted.slice(0, 9))
            })
          }
        }}/>
      </Grid>
      {pick5.map((each,i) => {
        return(
          <Grid item xs={1}>
            <h3 key={i}>
              {each.number} ({each.count})
            </h3>
          </Grid>
        )
      })}
    </Grid>

    <hr/>

    <Grid container spacing={2}>
      <Grid item xs={2}>
        <input className='textInput' type='text' id='pick6' onKeyDown={(event) => {
          if(event.code === 'Enter') {
            const pivot = document.getElementById('pick6').value;
            axios.get('http://localhost:3000/api/getMode45')
            .then(res => {
              let arr = JSON.parse(res.data)
              arr = arr[pivot - 1].modeList;
              let sliced = arr.slice(0, pivot - 1);
              sliced = sliced.concat(arr.slice(pivot, arr.length))
              console.log(sliced);
              let sorted = sliced.sort((a,b) => {
                return b.count - a.count
              })

              setPick6(sorted.slice(0, 9))
            })
          }
        }}/>
      </Grid>
      {pick6.map((each,i) => {
        return(
          <Grid item xs={1}>
            <h3 key={i}>
              {each.number} ({each.count})
            </h3>
          </Grid>
          )
        })}
    </Grid>

    <hr/>

    <Grid container>
      <Grid item xs={2}>
        <input className='textInput' type='text' id="has1" onKeyDown={event => {
          if(event.code === 'Enter') {
            const param1 = document.getElementById('has1').value;
            const param2 = document.getElementById('has2').value;
            const param3 = document.getElementById('has3').value;
            const param4 = document.getElementById('has4').value;
            
            axios.get('http://localhost:3000/api/getResult45')
            .then(res => {
              let arr = (JSON.parse(res.data));
              let includeArr = arr;
              if(param1) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param1)
                })
              }
              if(param2) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param2)
                })
              }
              if(param3) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param3)
                })
              }
              if(param4) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param4)
                })
              }
              
              setPair(includeArr)
            })
          }
        }} />
        <input className='textInput' type='text' id="has2" onKeyDown={event => {
          if(event.code === 'Enter') {
            const param1 = document.getElementById('has1').value;
            const param2 = document.getElementById('has2').value;
            const param3 = document.getElementById('has3').value;
            const param4 = document.getElementById('has4').value;
            
            axios.get('http://localhost:3000/api/getResult45')
            .then(res => {
              let arr = (JSON.parse(res.data));
              let includeArr = arr;
              if(param1) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param1)
                })
              }
              if(param2) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param2)
                })
              }
              if(param3) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param3)
                })
              }
              if(param4) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param4)
                })
              }
              
              setPair(includeArr)
            })
          }
        }}/>
        <input className='textInput' type='text' id="has3" onKeyDown={event => {
          if(event.code === 'Enter') {
            const param1 = document.getElementById('has1').value;
            const param2 = document.getElementById('has2').value;
            const param3 = document.getElementById('has3').value;
            const param4 = document.getElementById('has4').value;
            
            axios.get('http://localhost:3000/api/getResult45')
            .then(res => {
              let arr = (JSON.parse(res.data));
              let includeArr = arr;
              if(param1) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param1)
                })
              }
              if(param2) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param2)
                })
              }
              if(param3) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param3)
                })
              }
              if(param4) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param4)
                })
              }
              setPair(includeArr)
            })
          }
        }}/>
        <input className='textInput' type='text' id="has4" onKeyDown={event => {
          if(event.code === 'Enter') {
            const param1 = document.getElementById('has1').value;
            const param2 = document.getElementById('has2').value;
            const param3 = document.getElementById('has3').value;
            const param4 = document.getElementById('has4').value;
            
            axios.get('http://localhost:3000/api/getResult45')
            .then(res => {
              let arr = (JSON.parse(res.data));
              let includeArr = arr;
              if(param1) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param1)
                })
              }
              if(param2) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param2)
                })
              }
              if(param3) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param3)
                })
              }
              if(param4) {
                includeArr = includeArr.filter((item) => {
                  return item.jackpot.includes(param4)
                })
              }
              
              setPair(includeArr)
            })
          }
        }}/>
      </Grid>

      <Grid item container xs={11}>
        {pair.map((each) => {
          return (
            <Grid item xs={3}>
              <span>
                <h2>
                  <span className="bongterm">{each.term}</span>
                  <span className='bongdate'>{each.date}</span>
                </h2>
                <h2>
                  {each.jackpot.map((bong) => {
                    const param1 = document.getElementById('has1').value;
                    const param2 = document.getElementById('has2').value;
                    const param3 = document.getElementById('has3').value;
                    const param4 = document.getElementById('has4').value;
                    
                    if(bong == param1 || bong == param2 || bong == param3 || bong == param4){
                      return <span className='bongcloud-white'>
                        {bong}
                      </span>
                    }
                    return <span className='bongcloud'>
                      {bong}
                    </span>
                  })}
                </h2>

              </span>
            </Grid>
          )
        })}
      </Grid>

    </Grid>

    {/** PART 3 */}

    <hr/>

    <Grid container>
      <Grid item container xs={7}>
        <Grid item xs={2} spacing={2}>
          <input className='textInput' type='text' id="check1"/>
        </Grid>
        <Grid item xs={2} spacing={2}>
          <input className='textInput' type='text' id="check2"/>
        </Grid>
        <Grid item xs={2} spacing={2}>
          <input className='textInput' type='text' id="check3"/>
        </Grid>
        <Grid item xs={2} spacing={2}>
          <input className='textInput' type='text' id="check4"/>
        </Grid>
        <Grid item xs={2} spacing={2}>
          <input className='textInput' type='text' id="check5"/>
        </Grid>
        <Grid item xs={2} spacing={2}>
          <input className='textInput' type='text' id="check6"/>
        </Grid>
      </Grid>

        <Grid item xs={1} spacing={2}>
          <button type="button" className='pure-material-button-contained' onClick={() => {
              const param1 = document.getElementById('check1').value;
              const param2 = document.getElementById('check2').value;
              const param3 = document.getElementById('check3').value;
              const param4 = document.getElementById('check4').value;
              const param5 = document.getElementById('check5').value;
              const param6 = document.getElementById('check6').value;
              const jackpot = [param1, param2, param3, param4, param5, param6]
              
              axios.get('http://localhost:3000/api/getResult45')
              .then(res => {
                let arr = (JSON.parse(res.data));
                const test = isInclude(arr, jackpot);
                setChecked(test)
              })
          }}>
            Click
          </button>
        </Grid>

        <Grid container item xs={12}>
          {checked.map(each => {
            return (
              <>
                <Grid item xs={12}>
                  {each.comb.map(item => {
                    return <span className='bongcloud'>
                      {item}
                    </span>
                  })}
                </Grid>
                  {each.filtered.map(eachJackpot => {
                    return (
                      <Grid item xs={3}>
                        <span>
                          <h2>
                            <span className="bongterm">{eachJackpot.term}</span>
                            <span className='bongdate'>{eachJackpot.date}</span>
                          </h2>
                          <h2>
                            {eachJackpot.jackpot.map((bong) => {
                              const param1 = each.comb[0];
                              const param2 = each.comb[1];
                              const param3 = each.comb[2];
                              if(bong == param1 || bong == param2 || bong == param3){
                                return <span className='bongcloud-white'>
                                  {bong}
                                </span>
                              }
                              return <span className='bongcloud'>
                                {bong}
                              </span>
                            })}
                          </h2>
          
                        </span>
                      </Grid>
                    )
                  })}
                <Grid item xs={12}>
                  <hr/>
                </Grid>
              </>
            )
          })}
        </Grid>
      </Grid>



    <style jsx>{`
     .bongterm {
      border: 1px black solid;
      background-color: green;
      color: yellow;
      border-radius: 5px;
      margin-right: 10px;
      padding: 0 6px;
    }
    .bongdate {
      border: 1px black solid;
      background-color: blue;
      color: white;
      border-radius: 5px;
      padding: 0 6px;
    }
    .bongcloud {
      border: 1px black solid;
      background-color: orange;
      border-radius: 5px;
      margin-right: 4px;
      padding: 0 3px;
    }
    .bongcloud:last-child {
      margin-right: 0;
    }
    .bongcloud-white {
      border: 1px black solid;
      background-color: grey;
      border-radius: 5px;
      margin-right: 4px;
      padding: 0 3px;
      color: white;
    }
    .bongcloud-white:last-child {
      margin-right: 0;
    }
      input {
        position: relative;
        display: inline-block;
        outline: none;
        font-height: 0.6em;
        font-size: 24px;
        width: 4em;
        height: 1.4em;
        margin: auto 2px;
        vertical-align: middle;
      }
      #latest_result > span {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        font-size: 28px;
        font-weight: 600;
        color: orange;
        background-color: grey;
        border-radius: 10px;
        padding: 4px 8px 2px 8px;
        margin-left: 10px;
      }

      #latest_result > span:first-child {
        margin-left: 0;
        border-left: none;
      }
      // #latest_result > span:last-child {
      //   border-left: none;
      //   background-color: green;
      //   color: white;
      // }

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
        font-size: 16px;
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
    total: [],
    next: [],
    len: 0,
    last100Data: []
  }

  try {
    const response = await axios.get(`http://localhost:3000/api/getData45`); // get analyzed from result
    let statData = JSON.parse("[" + response.data + "]");

    const freq = await axios.get('http://localhost:3000/api/getFreq45') // get last 100 result
    let freqData = JSON.parse("[" + freq.data + "]");

    const reverb = await axios.get('http://localhost:3000/api/getResult45'); // get results term by term
    let resultData = JSON.parse(reverb.data)

    // THE DATA WE NEED
    for(let i = 0; i < 45; i++){
      finalData.obj.push({
        key : i + 1,
        value1 : statData[pam[0]].stat[i],
        value2 : statData[pam[1]].stat[i],
        value3 : statData[pam[2]].stat[i],
        last100: freqData[freqData.length - 1].stat[i]
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
    finalData.next = resultData[pam[2] - 1].jackpot||null

    finalData.labels = sortedLabels.map((each) => {
      if(!finalData.next.includes(each)) {
        return each
      } else {
        return '[' + each + ']'
      }
    })
    finalData.len = resultData.length

    let sortedLast100Data = sorted.map((each) => {
      return each.last100
    })
    finalData.last100Data = sortedLast100Data;
    
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
          display: true
        }
      },
    },
    data: {
      labels: finalData.labels,
      datasets: [
        {
          label: 'second pivot',
          data: finalData.data2,
          backgroundColor: 'rgba(47, 94, 249, 0.9)',
        },
        {
          label: 'last diff',
          data: finalData.data3,
          backgroundColor: 'rgba(208,9,241,1)',
        },
      ],
      // datasets: [
      //   {
      //     label: 'count',
      //     data: finalData.total,
      //     backgroundColor: 'rgba(253, 153, 3, 0.7)'
      //   }
      // ]
    },
    last100: {
      labels: finalData.labels,
      datasets: [
        {
          label: 'frequency',
          data: finalData.last100Data,
          backgroundColor: 'rgba(208,9,241,0.7)'
        }
      ]
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

