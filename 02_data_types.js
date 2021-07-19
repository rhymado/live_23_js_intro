// undefined
let example;
console.log(typeof example);
// Number
example = 1;
console.log(typeof example); // output typeof bersifat string
// typeof(example)
// typeof example
// String
example = "1";
console.log(typeof example);
// Boolean (true / false)
example = true;
console.log(typeof example);
// Function
example = function () {};
console.log(typeof example);
// Object
// merupakan pasangan key-value
// array index-value
example = [2, 1, 3, 4]; // key = 0,1,2,3 (index) , value = 1,2,3,4
console.log(typeof example);
// array => pemanggilannya array[index]
console.log(example[0]);
// object key-value
example = {
  // key: value
  lastName: "Demy",
  firstName: "Arka",
  batch: 23,
};
console.log(typeof example);
// object => pemanggilannya object.key
// object => pemanggilan lain object[key as string]
console.log(example.firstName);
console.log(example["firstName"]);
// NULL
example = null;
console.log(typeof example);
