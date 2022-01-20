// // filter
// const scores = [10,30,15,25,58,45,3]
// let over20 = scores.filter(score => score > 20)
// let odds = scores.filter((score) => score % 2 !== 0);
// //console.log(over20)

// // reduce
// let total = scores.reduce((acc, curr) =>  acc += curr, 0)
// console.log(total)

// // sorting
const scores = [1,6,3]
const sorted = scores.sort((a,b) => {
  console.log(a,b)
  return b - a
})
console.log(sorted)