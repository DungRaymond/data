import fs from 'fs';

const data55 = JSON.parse(fs.readFileSync('./json/reverb55.json'))

let temp = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
fs.writeFileSync('./json/freq55.json', "{\n\t\"stat\": " + JSON.stringify(temp) + "\n}")

let arr100 = data55.slice(data55.length - 40, data55.length)
arr100 = arr100.map(each => {
  return each.ketqua
})

// console.log(arr100);

async function extract() {
  for await (let each of arr100) {

    for await (let item of each) {
      let index = item - 1;
      temp[index] += 1;
    }
    fs.appendFileSync('./json/freq55.json', ",\n{\n\t\"stat\": " + JSON.stringify(temp) + "\n}")
  }

}

extract();