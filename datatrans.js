// import data45 from "./data45.js";
import fs from 'fs';


let reversed = JSON.parse(fs.readFileSync('./newdata45.json'));
// for(let item of data45) {
//   reversed.unshift(item)
// }

let arr = [
  {
    term: '00000',
    stat: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  }
]
// let testTemp= [];

const preSort = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45"];
(
  async function(){
    for await (let each of reversed) {
      let newStat = arr[n].stat;
      // testTemp.push(temp)
      // fs.writeFileSync('./temp', JSON.stringify(testTemp))
      let newTerm = each.term;

      for await (let [i, item] of each.ketqua.entries()){
        newStat[i] += 1;
      }
      
      
      arr.push({
        term: newTerm,
        stat: newStat
      })
    }
  }

)

fs.writeFileSync('./data', JSON.stringify(arr))