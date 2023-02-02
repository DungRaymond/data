import fs from "fs";


let c55 = JSON.parse(fs.readFileSync('./data55.json'))

let arr55=[]
for(let [i, item] of c.entries()) {
  arr55.unshift(item)
  // console.log(i)
}

fs.writeFileSync("./reverb55.json",JSON.stringify(arr55))
// console.log(arr)


// let c45 = JSON.parse(fs.readFileSync('./data55.json'))

// let arr45=[]
// for(let [i, item] of c.entries()) {
//   arr45.unshift(item)
//   // console.log(i)
// }

// fs.writeFileSync("./reverb45.json",JSON.stringify(arr45))