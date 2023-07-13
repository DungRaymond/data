

function isInclude(jackpotResults, jackpotResult) {
  const comb = [[0,1,2],[0,1,3],[0,1,4],[0,1,5],[0,2,3],[0,2,4],[0,2,5],[0,3,4],[0,3,5],[0,4,5],[1,2,3],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[3,4,5]]
  let filteredJackpot = [];
  for(let each of comb) {
    let includeArr = jackpotResults;
    for(let index of each) {
      includeArr = includeArr.filter((item) => {
        return item.jackpot.includes(jackpotResult[index])
      })
    }
    filteredJackpot.push({
      comb: [jackpotResult[each[0]], jackpotResult[each[1]], jackpotResult[each[2]]],
      filtered: includeArr
    })
  }
  
  return filteredJackpot;
}

export default isInclude;