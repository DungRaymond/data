import { Button, Grid, useMediaQuery } from '@mui/material';
import Head from 'next/head'

`use client`

import {useState} from 'react';
import isInclude from '../../modules/combination.js'
import isInclude4 from '../../modules/combination4.js'

export default function Page({aData}) {

  const [checked, setChecked] = useState([])
  const [pair, setPair] = useState([])


  const findByCombo = (event) => {
    if(event.code === 'Enter') {
      const param1 = document.getElementById('has1').value;
      const param2 = document.getElementById('has2').value;
      const param3 = document.getElementById('has3').value;
      const param4 = document.getElementById('has4').value;
      const param5 = document.getElementById('has5').value;
      const param6 = document.getElementById('has6').value;
      
        let includeArr = aData.data;
        if(param1 && param1 < 56) {
          includeArr = includeArr.filter((item) => {
            return item.ketqua.includes(param1 < 10 ? '0' + param1 : param1)
          })
        }
        if(param2 && param2 < 56) {
          includeArr = includeArr.filter((item) => {
            return item.ketqua.includes(param2 < 10 ? '0' + param2 : param2)
          })
        }
        if(param3 && param3 < 56) {
          includeArr = includeArr.filter((item) => {
            return item.ketqua.includes(param3 < 10 ? '0' + param3 : param3)
          })
        }
        if(param4 && param4 < 56) {
          includeArr = includeArr.filter((item) => {
            return item.ketqua.includes(param4 < 10 ? '0' + param4 : param4)
          })
        }
        if(param5 && param5 < 56) {
          includeArr = includeArr.filter((item) => {
            return item.ketqua.includes(param5 < 10 ? '0' + param5 : param5)
          })
        }
        if(param6 && param6 < 56) {
          includeArr = includeArr.filter((item) => {
            return item.ketqua.includes(param6 < 10 ? '0' + param5 : param5)
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
    const param7 = document.getElementById('check7').value;
    const ketqua = [
              param1 < 10 ? '0' + param1 : param1,
              param2 < 10 ? '0' + param2 : param2,
              param3 < 10 ? '0' + param3 : param3,
              param4 < 10 ? '0' + param4 : param4,
              param5 < 10 ? '0' + param5 : param5,
              param6 < 10 ? '0' + param6 : param6,
              param7 < 10 ? '0' + param6 : param7,
            
            ]
    
      const test = isInclude(aData.data, ketqua);
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
        {[1,2,3,4,5,6].map((each) => {
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
                  {each.ketqua.map((bong) => {
                    const param1 = document.getElementById('has1').value;
                    const param2 = document.getElementById('has2').value;
                    const param3 = document.getElementById('has3').value;
                    const param4 = document.getElementById('has4').value;
                    const param5 = document.getElementById('has5').value;
                    const param6 = document.getElementById('has6').value;
                    let psyBong = parseInt(bong)
                    if(psyBong == parseInt(param1) || psyBong == parseInt(param2) 
                    || psyBong == parseInt(param3) || psyBong == parseInt(param4) 
                    || psyBong == parseInt(param5) || psyBong == parseInt(param6)){
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
        {[1,2,3,4,5,6,7].map((each) => {
          return (
            <Grid item md={2} sm={3}>
              <input className='textInput nb' type='text' id={"check" + each} onKeyDown={(event) => {
                if(event.code === "Enter") {
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
                  {each.filtered.map(eachketqua => {
                    return (
                      <Grid item lg={3} xs={6} sm={6}>
                        <span>
                          <h2>
                            <span className="bongterm">{eachketqua.term}</span>
                            <span className='bongdate'>{eachketqua.date}</span>
                          </h2>
                          <h2>
                            {eachketqua.ketqua.map((bong) => {
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


<hr/>
<hr/>
<hr/>

{/*     
    <Grid container justifyContent={'center'}>
      <Grid item container md={6} sm={12} spacing={1} direction={'row'} justifyContent={'center'}>
        {[1,2,3,4,5,6,7].map((each) => {
          return (
            <Grid item md={2} sm={3}>
              <input className='textInput nb' type='text' id={"check" + each} onKeyDown={(event) => {
                if(event.code === "Enter") {
                  findAllCombo()
                }
              }}/>
            </Grid>
          )
        })}
      </Grid>

        <Grid container item xs={12} justifyContent={'space-between'}>
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
                  {each.filtered.map(eachketqua => {
                    return (
                      <Grid item lg={3} xs={6} sm={6}>
                        <span>
                          <h2>
                            <span className="bongterm">{eachketqua.term}</span>
                            <span className='bongdate'>{eachketqua.date}</span>
                          </h2>
                          <h2>
                            {eachketqua.ketqua.map((bong) => {
                              const param1 = each.comb[0];
                              const param2 = each.comb[1];
                              const param3 = each.comb[2];
                              const param4 = each.comb[3];
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
                <Grid item xs={12}>
                  <hr/>
                </Grid>
              </>
            )
          })}
        </Grid>
      </Grid> */}

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
    data: []
  }

  const reverb = await axios.get(process.env.basepath + '/api/getResult55'); // get results term by term
    aData.data = JSON.parse(reverb.data);
  
  return {
    props: { aData }, // will be passed to the page component as props
    // props: { data: 'hello'}
  }
}