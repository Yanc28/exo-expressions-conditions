let age = 17
let canVote = false
if (age >= 18) {
  canVote = true
} else {
  canVote = false
}
if (canVote) {
  console.log('You can vote')
} else {
  console.log('You can not vote')
}





// Programme réécrit en ternary operator

let age = 17
let msg = age > 18 ? "You can vote" : "You can not vote"
console.log(`${msg}`)

// Programme réécrit en ternary operator

let ageMin = 17
let ageMaj = 18 ? false : 17 ? true : false
console.log(`At ${ageMin}, you can not vote`)
