import fs from 'fs';

let sample = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45']

async function extract() {
  fs.writeFileSync('./json/modeList45.json', "[\n");
  for await(let each of sample) {
    let pivot = each;
    let data = JSON.parse(fs.readFileSync("./json/collection45/type" + pivot + ".json"));
    let obj = {
      modePivot: pivot,
      modeList: [
        {
          number: "01",
          count: 0
        },
        {
					number: "02",
					count: 0
				},
        {
					number: "03",
					count: 0
				},
        {
					number: "04",
					count: 0
				},
        {
					number: "05",
					count: 0
				},
        {
					number: "06",
					count: 0
				},
        {
					number: "07",
					count: 0
				},
        {
					number: "08",
					count: 0
				},
        {
					number: "09",
					count: 0
				},
        {
					number: "10",
					count: 0
				},
        {
					number: "11",
					count: 0
				},
        {
					number: "12",
					count: 0
				},
        {
					number: "13",
					count: 0
				},
        {
					number: "14",
					count: 0
				},
        {
					number: "15",
					count: 0
				},
        {
					number: "16",
					count: 0
				},
        {
					number: "17",
					count: 0
				},
        {
					number: "18",
					count: 0
				},
        {
					number: "19",
					count: 0
				},
        {
					number: "20",
					count: 0
				},
        {
					number: "21",
					count: 0
				},
        {
					number: "22",
					count: 0
				},
        {
					number: "23",
					count: 0
				},
        {
					number: "24",
					count: 0
				},
        {
					number: "25",
					count: 0
				},
        {
					number: "26",
					count: 0
				},
        {
					number: "27",
					count: 0
				},
        {
					number: "28",
					count: 0
				},
        {
					number: "29",
					count: 0
				},
        {
					number: "30",
					count: 0
				},
        {
					number: "31",
					count: 0
				},
        {
					number: "32",
					count: 0
				},
        {
					number: "33",
					count: 0
				},
        {
					number: "34",
					count: 0
				},
        {
					number: "35",
					count: 0
				},
        {
					number: "36",
					count: 0
				},
        {
					number: "37",
					count: 0
				},
        {
					number: "38",
					count: 0
				},
        {
					number: "39",
					count: 0
				},
        {
					number: "40",
					count: 0
				},
        {
					number: "41",
					count: 0
				},
        {
					number: "42",
					count: 0
				},
        {
					number: "43",
					count: 0
				},
        {
					number: "44",
					count: 0
				},
        {
					number: "45",
					count: 0
				}
      ]
    }
    for await (let ite of data) {
      for await (let item of ite.ketqua){
        for await (let element of obj.modeList) {
          if(element.number == item) {
            element.count += 1;
          }
        }
      }
    }
    fs.appendFileSync('./json/modeList45.json', JSON.stringify(obj) + ",\n")
    
  }
  fs.appendFileSync('./json/modeList45.json', "\n]");
}

extract();