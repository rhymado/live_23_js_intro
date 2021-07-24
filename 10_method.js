// Method => Fungsi didalam Object
this.hello = "hello-global";
const person = {
  firstName: "Andy",
  lastName: "Southgate",
  hello: "hello-local",
  age: 26,
  printFullName: function () {
    // this ekuivalen dengan object person
    console.log(`${this.firstName} ${this.lastName} ${this.hello}`);
  },
  printFullNameDeclaration: function printFullNameDeclaration() {
    console.log(`${this.firstName} ${this.lastName} ${this.hello}`);
  },
  printFullNameArrow: () => {
    // this ekuivalen dengan this global
    console.log(`${this.firstName} ${this.lastName} ${this.hello}`);
  },
};

// person.printFullName();
// person.printFullNameDeclaration();
// person.printFullNameArrow();

// fungsi deklarasi dan ekspresi mendefinisikan this untuk dirinya saat itu
// arrow function mendefinisikan this untuk pembungkusnya

// method array.sort()
// mengurutkan elemen array
const arrOfNum = [2, 15, 1, 3, 4, 10];
// sort by ASCII order ascending
// arrOfNum.sort();

arrOfNum.sort((a, b) => a - b); // ascending
arrOfNum.sort((a, b) => b - a); // descending
// console.log(arrOfNum);

// method array.map()
// manipulasi data
const persons = [
  {
    firstName: "andy",
    lastName: "southgate",
  },
  {
    firstName: "spencer",
    lastName: "owen",
  },
];
const resultPersons = persons.map((person) => {
  //   const fullName = `${person.firstName} ${person.lastName}`;
  const newPerson = {
    ...person,
    age: (Math.random() * 10 + 20).toFixed(2),
  };
  return newPerson;
});
const resultPersonImplicit = persons.map((person) => ({
  ...person,
  age: (Math.random() * 10 + 20).toFixed(2),
}));

console.log(resultPersons, resultPersonImplicit);

const arrOfPerson = [
  {
    age: 24,
    gender: "Female",
  },
  {
    age: 28,
    gender: "Female",
  },
  {
    age: 26,
    gender: "Male",
  },
  {
    age: 17,
    gender: "Female",
  },
  {
    age: 30,
    gender: "Male",
  },
  {
    age: 19,
    gender: "Male",
  },
];

const filteredPerson = arrOfPerson.filter((person) => {
  // return true; maka value akan dikembalikan/dimasukkan kedalam array hasil
  // return false; maka value akan disaring/tidak dimasukkan ke hasil
  if (person.gender === "Female" && person.age < 20) return true;
  return false;
});
const filteredPersonImplicit = arrOfPerson.filter(
  (person) => person.gender === "Female" && person.age < 20
);
console.log(filteredPerson, filteredPersonImplicit);

// array.push array.unshift
// menambahkan elemen/s baru ke akhir/awal array
const animals = ["Gorilla", "Rabbit", "Peafowl", "Squirrel"];
// console.log(animals.length, animals);
const newLength = animals.push("Wolf", "Dog");
// console.log(newLength, animals);
const newLengthUnshift = animals.unshift("Cat", "Chicken");
// console.log(newLengthUnshift, animals);

// array.pop array.shift
// mengurangi 1 elemen dari akhir/awal array
const removedElementPop = animals.pop();
// console.log(animals.length, animals, removedElementPop);
const removedElementShift = animals.shift();
// console.log(animals.length, animals, removedElementShift);

function getAllElementAndModify(inputArr, cb) {
  const resultArr = [];
  for (const idx in inputArr) {
    // resultArr[idx] = inputArr[idx] * 10;
    resultArr[idx] = cb(inputArr[idx]);
  }
  return resultArr;
}

function addNumberByTwo(num) {
  const result = num + 2;
  return result;
}
// console.log(addNumberByTwo);
// console.log(addNumberByTwo(2));

// const resultArray = getAllElementAndModify([1, 3, 5, 7, 9]);
const resultArray = getAllElementAndModify([1, 3, 5, 7, 9], addNumberByTwo);
// console.log(resultArray);

function changeElementToHalu() {
  return "halu";
}
const resultArr = getAllElementAndModify([1, 3, 5, 7, 9], changeElementToHalu);
// console.log(resultArr);

const anotherResult = getAllElementAndModify([1, 2, 3], (element) => {
  const result = element * 100;
  return result;
});
// console.log(anotherResult);
