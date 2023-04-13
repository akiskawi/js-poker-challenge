const letterValues = {
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}
function isValidPair(pair) {
  if (getNumber(pair[0]) === getNumber(pair[1])) {
    return pair
  }
  return [-1]
}
function getNumber(num) {
  let returningValue = num
  const letters = Object.keys(letterValues)
  if (letters.includes(num)) {
    returningValue = letterValues[num]
  }
  return returningValue
}
function getWinnerPair(pairOne, pairTwo) {
  if (getNumber(pairOne[0]) >= getNumber(pairTwo[0])) {
    return pairOne
  }
  return pairTwo
}

function winningPair(pairOne, pairTwo) {
  const winner = getWinnerPair(isValidPair(pairOne), isValidPair(pairTwo))
  if (winner[0] === -1) {
    // console.log(winner)
    return []
  }
  // console.log('here')
  // console.log(winner[0])
  return winner
  // return getWinnerPair(pairOne, pairTwo)
}

// Extension criteria

function winningPairFromArray() {}

function winning3CardHand() {}
// winningPair(['J', 'Q'], ['3', '7'])
// winningPair(['3', '5'], ['3', '4'])
module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
