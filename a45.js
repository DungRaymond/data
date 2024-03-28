import fs from 'fs';

const data45 = JSON.parse(fs.readFileSync('./json/reverb45.json'))

let temp = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
fs.writeFileSync('./json/data45.json', "{\n\t\"stat\": " + JSON.stringify(temp) + "\n}")
async function makeAnalytic45(){
  for await (let each of data45) {
    for await (let item of each.jackpot){
      let index = item - 1;
      temp[index] += 1;
    }

    fs.appendFileSync('./json/data45.json', ",\n{\n\t\"stat\": " + JSON.stringify(temp) + "\n}")
  }
}

makeAnalytic45();