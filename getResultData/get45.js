let arr = [];
function waitUI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 500);
  });
}

// 6/45 

async function lott() {
  let gameIndicator = document.getElementsByTagName('select')[0]
  if(gameIndicator.value == '3') {
    for(let i = 2; i > 1; i--) {
      
      let chonkyquay = document.getElementsByTagName('select')[1];
      // let doso = document.getElementsByClassName('choi_ngay')[13];
      chonkyquay.options[i].selected = true;
      // doso.click();
      DoSearch(true);
      const waitres = await waitUI();
      let ngayquay = document.getElementsByTagName('td')[0];
      let kyquay = document.getElementsByTagName('a')[99];
      let bongtron = document.getElementsByTagName('span');
      let result = {
        date : ngayquay.innerHTML,
        term: kyquay.innerHTML,
        jackpot: [
          bongtron[114].innerHTML,
          bongtron[115].innerHTML,
          bongtron[116].innerHTML,
          bongtron[117].innerHTML,
          bongtron[118].innerHTML,
          bongtron[119].innerHTML
        ]
      };
      console.log(kyquay.innerHTML)
      result.jackpot ? arr.push(result) : console.log("-");
      arr.push(result)
  
    }
    return arr;

  } else 
  if(gameIndicator == '4') {
    for(let i = 3; i > 0; i--) {
      let chonkyquay = document.getElementsByTagName('select')[1];
      // let doso = document.getElementsByClassName('choi_ngay')[11];
      chonkyquay.options[i].selected = true;
      // doso.click();
      DoSearch(true);
      const waitres = await waitUI();
      let ngayquay = document.getElementsByTagName('td')[0];
      let kyquay = document.getElementsByTagName('a')[96];
      let bongtron = document.getElementsByTagName('span');
      let result = {
        date : ngayquay.innerHTML,
        term: kyquay.innerHTML,
        ketqua: [
          bongtron[96].innerHTML,
          bongtron[97].innerHTML,
          bongtron[98].innerHTML,
          bongtron[99].innerHTML,
          bongtron[100].innerHTML,
          bongtron[101].innerHTML,
          bongtron[103].innerHTML
        ],
        jackpot: [
          bongtron[96].innerHTML,
          bongtron[97].innerHTML,
          bongtron[98].innerHTML,
          bongtron[99].innerHTML,
          bongtron[100].innerHTML,
          bongtron[101].innerHTML,
        ],
        magicnum: bongtron[103].innerHTML
      };
      console.log(kyquay.innerHTML)
      result.ketqua ? arr.push(result) : console.log("-");
    }
    
    return arr;
  }
}

async function printArr() {
  let res = await lott();
  let temp = JSON.stringify(arr);
  temp = temp.slice(1, temp.length - 1);
  temp = temp.replaceAll("},","},\n");
  console.log(",\n" + temp);
}

printArr();