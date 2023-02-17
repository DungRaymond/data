let a = [{"key":1,"value":137},{"key":2,"value":117},{"key":3,"value":117},{"key":4,"value":136},{"key":5,"value":140},{"key":6,"value":145},{"key":7,"value":134},{"key":8,"value":122},{"key":9,"value":119},{"key":10,"value":136},{"key":11,"value":133},{"key":12,"value":123},{"key":13,"value":132},{"key":14,"value":115},{"key":15,"value":111},{"key":16,"value":127},{"key":17,"value":124},{"key":18,"value":134},{"key":19,"value":149},{"key":20,"value":124},{"key":21,"value":127},{"key":22,"value":126},{"key":23,"value":126},{"key":24,"value":144},{"key":25,"value":135},{"key":26,"value":126},{"key":27,"value":131},{"key":28,"value":128},{"key":29,"value":120},{"key":30,"value":143},{"key":31,"value":126},{"key":32,"value":124},{"key":33,"value":123},{"key":34,"value":126},{"key":35,"value":137},{"key":36,"value":122},{"key":37,"value":140},{"key":38,"value":111},{"key":39,"value":120},{"key":40,"value":133},{"key":41,"value":128},{"key":42,"value":114},{"key":43,"value":115},{"key":44,"value":144},{"key":45,"value":128}]

let b = a.sort((a,b) => {
  return b.value - a.value
})
let c = b.map((each) => {
  return each.value
})
let d = b.map((each) => {
  return each.key
})