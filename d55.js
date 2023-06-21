import fs from 'fs';

let sample = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55']

async function extract() {
  for await(each of sample) {
    let pivot = i;
    let data = JSON.parse(fs.readFileSync("./json/collection55/type" + pivot + ".json"));

    for await (let ite of data) {
      for await (let item of ite.ketqua){
        let index = item - 1;
        temp[index] += 1;
      }
      fs.appendFileSync('./json/data55.json', ",\n{\n\t\"stat\": " + JSON.stringify(temp) + "\n}")
    }
  }

}