const person = {
  "first name": "Arka",
  middle: "Tama",
  last: "Demy",
};

const firstName = person["first name"];
const lastName = person.last;

console.log(firstName);
console.log(lastName);

// destructuring assignment
const { middle, "first name": first } = person;
console.log(`First Name = ${first}`);
console.log(`Middle Name = ${middle}`);

const rgb = [200, 75, 0];

const rgb0 = rgb[0];

const [red, green, blue] = rgb;
console.log(red);
console.log(green);
console.log(blue);
