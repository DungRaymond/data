import data45 from "./data45.js";
import fs from 'fs';

let arr = [
  {
    term: '00000',
    stat: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  }
]
// let testTemp= [];

const preSort = ['19','24','30','37','44','06','35','05','04','01','07','25','10','11','40','13','18','27','16','21','22','41','20','26','28','32','17','45','31','33','12','23','34','39','08','36','02','09','29','03','43','14','42','15','38'];

for(let i = data45.length - 1; i >= 0; i--) {
  const n = arr.length - 1;
  let temp = arr[n].stat;
  // testTemp.push(temp)
  // fs.writeFileSync('./temp', JSON.stringify(testTemp))
  let newTerm = n + 1;
  if(n > 100){
    newTerm = '00' + arr.length;
  }
  if(n < 100){
    newTerm = '000' + JSON.stringify(n+1);
  }
  if(n < 10){
    newTerm = '0000' + JSON.stringify(n+1);
  }

  for(let k = 0; k < 6; k++) {
    let isFound = 0;
    while(isFound >= 0) {
      if(data45[i].ketqua[k] == preSort[isFound]) {
        temp[isFound] += 1;
        isFound = -1;
      } else {
        isFound+=1;
      }
    }
  }
  arr.push({
    term: newTerm,
    stat: temp
  })
}

fs.writeFileSync('./data', JSON.stringify(arr))