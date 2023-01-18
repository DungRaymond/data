import data45 from "./data45.js"
import fs from "fs";

let arr=[]
for(let [i, item] of data45.entries()) {
  arr.unshift(item)
  // console.log(i)
}

fs.writeFileSync("./newdata45.json",JSON.stringify(arr))
// console.log(arr)