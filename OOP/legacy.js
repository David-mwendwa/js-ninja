// old way of creating classes

function User(username, email) {
  this.username = username
  this.email = email
}

User.prototype.login = function(){
  console.log(`${this.username} has logged in`)
  return this
}

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};

// inheritance
function Admin(username, email, title) {
  User.call(this, username, email)
  this.title = title
}

// inheriting methods to admins
Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function(){
  // delete user
}

const userOne = new User('james', 'james@gmail.com');
const userTwo = new User('david', 'david@gmail.com');
const userAdmin1 = new Admin('agnes', 'agnes@gmail.com', 'The one and only last born');

console.log(userOne,  userTwo)
console.log(userAdmin1)
userAdmin1.login().logout()