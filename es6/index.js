// rest parameter
const double = (...nums) => {
  return nums.map((num) => num * 2);
};
//console.log(double(1,2,3,4,15,3,9))

// spread syntax
const people = ['shaun', 'ryu', 'crystal'];
const members = ['mario', 'chun', ...people];
//console.log(members)

// sets - store any kind of unique values
const letters = ['a', 'b', 'a', 'c', 'd', 'c', 'c'];
console.log(letters);

const lettersSet = new Set(letters);
//console.log(lettersSet)

//const uniqueLetters = [...lettersSet]
const uniqueLetters = [...new Set(letters)];
console.log(uniqueLetters);

const ages = new Set();
ages.add(20).add(34).add(67);
ages.delete(20);
console.log(ages, ages.size);
console.log(ages.has(34));

const ninjas = new Set([
  { name: 'kim', age: 18 },
  { name: 'aggie', age: 13 },
  { name: 'john', age: 24 },
]);
ninjas.forEach(ninja => {
  console.log(ninja.name, ninja.age)
})
