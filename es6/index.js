// rest parameter
const double = (...nums) => {
  return nums.map((num) => num * 2);
};
//console.log(double(1,2,3,4,15,3,9))

// spread syntax
const people = ['shaun', 'ryu', 'crystal'];
const members = ['mario', 'chun', ...people];
//console.log(members)
