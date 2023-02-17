// import data45 from "./data45.js";
import fs from 'fs';


let reversed45 = JSON.parse(fs.readFileSync('./new45.json'));
let reversed55 = JSON.parse(fs.readFileSync('./new55.json'));

let read45 = "[" + fs.readFileSync('./data45') + "]"
let arr45 = JSON.parse(read45)
async function makedata45(){
    // console.log('here1')
    for await (let each of reversed45) {
      // console.log('here2')
      // let newTerm = each.term;
      
      // console.log(newStat)
      let temp = arr45.pop()
      arr45.push(temp)

      for await (let item of each.ketqua){
        temp.stat[item - 1] += 1;
        // console.log('here3')
      }

      fs.appendFileSync('./data45', ",\n{\n\t\"stat\": " + JSON.stringify(temp.stat) + "\n}")
      // console.log(temp.stat);
      // console.log(final);
      // arr.push({stat: final})
    }
  }

makedata45()

let read55 = "[" + fs.readFileSync('./reverb55.json') + "]"
let arr55 = JSON.parse(read55)
async function makedata55(){
    // console.log('here1')
    for await (let each of reversed55) {
      // console.log('here2')
      // let newTerm = each.term;
      
      // console.log(newStat)
      let temp = arr55.pop()
      arr55.push(temp)

      for await (let item of each.ketqua){
        temp.stat[item - 1] += 1;
        // console.log('here3')
      }

      fs.appendFileSync('./data55', ",\n{\n\t\"stat\": " + JSON.stringify(temp.stat) + "\n}")
      // console.log(temp.stat);
      // console.log(final);
      // arr.push({stat: final})
    }
  }

makedata55()

