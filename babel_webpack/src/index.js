// run - node_modules/.bin/babel src/index.js -o dist/assets/bundle.js

const greet = (name) => {
  console.log(`Hello ${name}`);
};

greet('agnes');
greet('james');
greet('Elvis');

class User {
  constructor(score) {
    this.score = 0;
  }
}
