let arr = [];
function waitUI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 250);
  });
}

// keno 0095381 0124902

async function keno() {
  for(let i = 95381; i <= 124902; i++) {
    let chonkyquay = document.getElementsByTagName('input')[3];
    let doso = document.getElementsByClassName('choi_ngay')[0];
    chonkyquay.value = i < 100000? '00' + i: '0' + i;
    doso.click();
    const waitres = await waitUI();
    let ngayquay = document.getElementsByTagName('a')[88];
    let kyquay = document.getElementsByTagName('a')[89];
    let bongtron = document.getElementsByTagName('span');
    let result = {
      date : ngayquay.innerHTML,
      term: kyquay.innerHTML,
      ketqua: [
        bongtron[10].innerHTML,
        bongtron[11].innerHTML,
        bongtron[12].innerHTML,
        bongtron[13].innerHTML,
        bongtron[14].innerHTML,
        bongtron[15].innerHTML,
        bongtron[16].innerHTML,
        bongtron[17].innerHTML,
        bongtron[18].innerHTML,
        bongtron[19].innerHTML,
        bongtron[20].innerHTML,
        bongtron[21].innerHTML,
        bongtron[22].innerHTML,
        bongtron[23].innerHTML,
        bongtron[24].innerHTML,
        bongtron[25].innerHTML,
        bongtron[26].innerHTML,
        bongtron[27].innerHTML,
        bongtron[28].innerHTML,
        bongtron[29].innerHTML,
      ]
    };
    console.log(kyquay.innerHTML)
    arr.push(result)
  }
  
}
