import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./json/reverb55.json'))

// let temp = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// fs.writeFileSync('./json/freq45.json', "{\n\t\"stat\": " + JSON.stringify(temp) + "\n}")

// let arr100 = data45.slice(data45.length - 18, data45.length)
// arr100 = arr100.map(each => {
//   return each.ketqua
// })

// console.log(temp.length);

async function extract() {
  for (let i = 1; i < 56; i++) {
    if(i < 10) {
      const pivot = "0" + (i - 0);
      fs.writeFileSync('./json/collection55/type' + pivot + '.json', "[")
      let hasFirst = false;
      for await (let each of data) {
        if(!hasFirst){
          if(each.jackpot.includes(pivot)) {
            fs.appendFileSync('./json/collection55/type' + pivot + '.json', "\n\t" + JSON.stringify(each))
            hasFirst = true;
          }
        } else {
          if(each.jackpot.includes(pivot)) {
            fs.appendFileSync('./json/collection55/type' + pivot + '.json', ",\n\t" + JSON.stringify(each))
          }
        }
      }
      fs.appendFileSync('./json/collection55/type' + pivot + '.json',"\n]")
    }
    
    if(i >= 10) {
      const pivot = i + "";
      fs.writeFileSync('./json/collection55/type' + pivot + '.json', "[")
      let hasFirst = false;
      for await (let each of data) {
        if(!hasFirst){
          if(each.jackpot.includes(pivot)) {
            fs.appendFileSync('./json/collection55/type' + pivot + '.json', "\n\t" + JSON.stringify(each))
            hasFirst = true;
          }
        } else {
          if(each.jackpot.includes(pivot)) {
            fs.appendFileSync('./json/collection55/type' + pivot + '.json', ",\n\t" + JSON.stringify(each))
          }
        }
      }
      fs.appendFileSync('./json/collection55/type' + pivot + '.json',"\n]")
    }
  }

}

extract();