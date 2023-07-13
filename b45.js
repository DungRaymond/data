import fs from 'fs';

const data45 = JSON.parse(fs.readFileSync('./json/reverb45.json'))

let temp = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
fs.writeFileSync('./json/freq45.json', "{\n\t\"stat\": " + JSON.stringify(temp) + "\n}")

let arr100 = data45.slice(data45.length - 18, data45.length)
arr100 = arr100.map(each => {
  return each.jackpot
})

// console.log(temp.length);

async function extract() {
  for await (let each of arr100) {

    for await (let item of each) {
      let index = item - 1;
      // console.log(index);
      temp[index] += 1;
    }
    fs.appendFileSync('./json/freq45.json', ",\n{\n\t\"stat\": " + JSON.stringify(temp) + "\n}")
  }

}

extract();