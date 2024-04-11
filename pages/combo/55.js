import { Button, Grid, useMediaQuery } from '@mui/material';
import Head from 'next/head'

`use client`

import {useState} from 'react';
import isInclude from '../../modules/combination.js'

export default function Page({aData}) {

  const [checked, setChecked] = useState([])
  const [pair, setPair] = useState([])
  const [pick1, setPick1] = useState([])
  const [pick2, setPick2] = useState([])
  const [pick3, setPick3] = useState([])
  const [pick4, setPick4] = useState([])
  const [pick5, setPick5] = useState([])
  const [pick6, setPick6] = useState([])
  const [next1, setNext1] = useState([])
  const [next2, setNext2] = useState([])
  const [next3, setNext3] = useState([])
  const [next4, setNext4] = useState([])
  const [next5, setNext5] = useState([])
  const [next6, setNext6] = useState([])



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

  const findByCombo = (event) => {
    if(event.key === 'Enter') {
      const param1 = document.getElementById('has1').value;
      const param2 = document.getElementById('has2').value;
      const param3 = document.getElementById('has3').value;
      const param4 = document.getElementById('has4').value;
      const param5 = document.getElementById('has5').value;
      
        let includeArr = aData.data;
        if(param1 && param1 < 56) {
          includeArr = includeArr.filter((item) => {
            return item.jackpot.includes(param1 < 10 ? '0' + param1 : param1)
          })
        }
        if(param2 && param2 < 56) {
          includeArr = includeArr.filter((item) => {
            return item.jackpot.includes(param2 < 10 ? '0' + param2 : param2)
          })
        }
        if(param3 && param3 < 56) {
          includeArr = includeArr.filter((item) => {
            return item.jackpot.includes(param3 < 10 ? '0' + param3 : param3)
          })
        }
        if(param4 && param4 < 56) {
          includeArr = includeArr.filter((item) => {
            return item.jackpot.includes(param4 < 10 ? '0' + param4 : param4)
          })
        }
        if(param5 && param5 < 56) {
          includeArr = includeArr.filter((item) => {
            return item.jackpot.includes(param5 < 10 ? '0' + param5 : param5)
          })
        }
        
        setPair(includeArr)
    }
  }

  const findAllCombo = () => {
    const param1 = document.getElementById('check1').value;
    const param2 = document.getElementById('check2').value;
    const param3 = document.getElementById('check3').value;
    const param4 = document.getElementById('check4').value;
    const param5 = document.getElementById('check5').value;
    const param6 = document.getElementById('check6').value;
    const jackpot = [
              param1 < 10 ? '0' + param1 : param1,
              param2 < 10 ? '0' + param2 : param2,
              param3 < 10 ? '0' + param3 : param3,
              param4 < 10 ? '0' + param4 : param4,
              param5 < 10 ? '0' + param5 : param5,
              param6 < 10 ? '0' + param6 : param6
            
            ]
    
      const test = isInclude(aData.data, jackpot);
      setChecked(test)
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
      </Grid>

<Grid container alignItems={'center'} justifyContent={'flex-start'}>
      <Grid item xs={8} sm={5} lg={4}>
        {[1,2,3,4,5].map((each) => {
            return (
              <input className='textInput' type='text' id={"has" + each} onKeyDown={event => {
                findByCombo(event)
              }} />
            )
          })}
      </Grid>

      <Grid item sm={2} lg={1}>
        <button className='pure-material-button-contained'>
          <span style={{fontSize: '1.1rem'}}>
            {pair.length}
            
          </span>
        </button>

      </Grid>

      <Grid item container sm={12} lg={11}>
        {pair.map((each) => {
          return (
            <Grid item lg={4} xs={6} sm={6}>
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
                    const param5 = document.getElementById('has5').value;
                    let psyBong = parseInt(bong)
                    if(psyBong == parseInt(param1) || psyBong == parseInt(param2) 
                    || psyBong == parseInt(param3) || psyBong == parseInt(param4) 
                    || psyBong == parseInt(param5)){
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

<hr/>
<hr/>
    
    <Grid container justifyContent={'center'}>
      <Grid item container md={6} sm={12} spacing={1} direction={'row'} justifyContent={'center'}>
        {[1,2,3,4,5,6].map((each) => {
          return (
            <Grid item md={2} sm={3}>
              <input className='textInput nb' type='text' id={"check" + each} onKeyDown={(event) => {
                if(event.key === "Enter") {
                  findAllCombo()
                }
              }}/>
            </Grid>
          )
        })}
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
                      <Grid item lg={3} xs={6} sm={6}>
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

              {each[1].map((each,i) => {
                return(
                  <>
                    <Grid item xs={1} sm={0.5} textAlign={'center'} >
                      <p className='pairShow' key={i}>
                        {each.number} 
                        <span className='pairCount'>
                          <br/>
                          {each.count}

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
      background-color: pink;
      border-radius: 5px;
      margin-left: 3px;
      padding: 0 1px;
      padding-right: 2px;
      color: ;
      font-family: 'Roboto', sans-serif;
      font-size: 1.2em;
    }
    .bongcloud-white:last-child {
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

export async function getServerSideProps(context) {
  let aData = {
    basepath: process.env.basepath,
    data: [],
    modeData: []
  }

  const reverb = await axios.get(process.env.basepath + '/api/getResult55'); // get results term by term
    aData.data = JSON.parse(reverb.data);
  const modeList = await axios.get(process.env.basepath + '/api/getMode56');
    aData.modeData = JSON.parse(modeList.data)

  return {
    props: { aData }, // will be passed to the page component as props
    // props: { data: 'hello'}
  }
}