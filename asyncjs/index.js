import fetch from 'node-fetch';
// fetch api
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('rejected', err);
  });

// Async & Await
const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  if (response.status !== 200) {
    throw new Error('cannot fetch the data');
  }
  const data = await response.json();
  return data;
};
// let todos = await getTodos()
// let top10 = todos.filter((obj) => obj.id <= 10);
// console.log(top10)

getTodos()
  .then((data) => console.log('rejected:', data))
  .catch((err) => console.log('rejected:', err));
