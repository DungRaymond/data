import fs from 'fs';

const data45 = JSON.parse(fs.readFileSync('./json/reverb45.json'))

let temp = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
fs.writeFileSync('./json/data45.json', "{\n\t\"stat\": " + JSON.stringify(temp) + "\n}")
async function makeAnalytic45(){
  // console.log('here1')
  for await (let each of data45) {
    // console.log('here2')
    // console.log(each.ketqua);
    
    for await (let item of each.ketqua){
      // console.log(item -1);
      let index = item -1;
      temp[index] += 1;
      // console.log('here3')
    }

    fs.appendFileSync('./json/data45.json', ",\n{\n\t\"stat\": " + JSON.stringify(temp) + "\n}")
    // console.log(temp.stat);
    // console.log(final);
    // arr.push({stat: final})
  }
}

makeAnalytic45();