let arr55 = [];
function waitUI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 500);
  });
}


async function lott655() {
  for(let i = 3; i >= 1; i--) {
    let chonkyquay = document.getElementsByTagName('select')[1];
    let doso = document.getElementsByClassName('choi_ngay')[11];
    chonkyquay.options[i].selected = true;
    doso.click();
    const waitres = await waitUI();
    let ngayquay = document.getElementsByTagName('td')[0];
    let kyquay = document.getElementsByTagName('a')[95];
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
    arr55.push(result)
  }
  
}