import fs from 'fs';

// // let d = fs.readFileSync('./data');
// // d = JSON.parse(d);
// // console.log(d[0].term)

// let a = [149,143,143,139,144,145,137,140,136,137,134,135,136,133,133,131,134,129,126,127,126,127,124,126,128,124,123,127,125,122,123,125,126,120,122,121,116,118,120,117,115,115,113,110,110];
// let b = [151,149,147,147,146,146,145,143,142,140,139,139,138,136,138,135,136,134,132,131,132,131,130,131,129,130,128,128,128,128,127,127,127,125,125,124,123,123,123,122,122,119,118,116,116];
// let c = [];

// for(let i = 0; i < a.length; i++){
//   c.push(b[i] - a[i]);
// }

// fs.writeFileSync('./temp', c.toString())

// const arr = JSON.parse(fs.readFileSync('./newdata45.json'))

// console.log(arr[45])
import data55 from './data55.js'

fs.writeFileSync('newdata55.json',JSON.stringify(data55))