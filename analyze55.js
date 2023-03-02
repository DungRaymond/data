import fs from 'fs';

const data55 = JSON.parse(fs.readFileSync('./json/reverb55.json'))

let temp = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
fs.writeFileSync('./json/data55.json', "{\n\t\"stat\": " + JSON.stringify(temp) + "\n}")
async function makeAnalytic55(){
  // console.log('here1')
  for await (let each of data55) {
    // console.log('here2')
    // console.log(each.ketqua);
    
    for await (let item of each.ketqua){
      // console.log(item -1);
      let index = item -1;
      temp[index] += 1;
      // console.log('here3')
    }

    fs.appendFileSync('./json/data55.json', ",\n{\n\t\"stat\": " + JSON.stringify(temp) + "\n}")
    // console.log(temp.stat);
    // console.log(final);
    // arr.push({stat: final})
  }
}

makeAnalytic55();