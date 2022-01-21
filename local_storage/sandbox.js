// store data in local storage
localStorage.setItem('name', 'david');
localStorage.setItem('age', 50);

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);

// updating data
localStorage.setItem('name', 'james');
localStorage.age = '40';

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(age, name);

// deleting data from local storage
//localStorage.removeItem('name') // removes specified item
//localStorage.clear() //removes all items previously set
//console.log(localStorage.getItem("name"))

// stringifying and parsing data
const todos = [
  { text: 'play mariokart', author: 'david' },
  { text: 'buy some milk', author: 'eliver' },
  { text: 'buy some bread', author: 'agnes' },
];
//console.log(JSON.stringify(todos))
localStorage.setItem('todos', JSON.stringify(todos))
const stored = localStorage.getItem('todos')
console.log(JSON.parse(stored))

