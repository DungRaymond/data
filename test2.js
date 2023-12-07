function gcd(a,b) {
  while(b!=0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a
}

let c = 48;
let d = 18;
console.log(gcd(c,d));