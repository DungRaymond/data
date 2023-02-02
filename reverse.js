// import data45 from "./data45.js"
import fs from "fs";

let c = JSON.parse(fs.readFileSync('./data55.json'))

let arr=[]
for(let [i, item] of c.entries()) {
  arr.unshift(item)
  // console.log(i)
}

fs.writeFileSync("./new55.json",JSON.stringify(arr))
// console.log(arr)