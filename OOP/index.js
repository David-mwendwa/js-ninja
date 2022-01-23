class User {
  constructor(username, email) {
    //set up props
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this; //returning 'this' makes the method chainable
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

// class inheritance
class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => u.username !== user.username);
  }
}

// instance creation and methods chaining
const userOne = new User('james', 'james@gmail.com');
const userTwo = new User('david', 'david@gmail.com');
const userAdmin1 = new Admin('agnes', 'agnes@gmail.com', 'The one and only last born');
console.log(userOne, userTwo, userAdmin1);
// userOne.login().incScore().incScore().incScore().logout();

let users = [userOne, userTwo, userAdmin1];
//console.log(users);

userAdmin1.deleteUser(userTwo);
//console.log(users);
