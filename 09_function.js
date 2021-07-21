// Declaration
function namaFungsiDeklarasi(/**parameter */) {
  /**implementasi */
}
function addition(a, b) {
  /** hasil = a + b */
  const result = a + b;
  //   console.log(result); // console.log => output ke layar
  return result; // return => output ke program utama
}
// return akan mentransformasi bentuk fungsi ke bentuk output
// const hasilPenjumlahan = addition(1, 4); //result //10;
// console.log(addition(1, 4));

// Expression
// JenisVar namaFungsi = function(){}
const namaFungsiEkspresi = function (/**parameter */) {
  /**implementasi */
};

const subtraction = function (a, b) {
  const result = a - b;
  // shorthand object
  // berlaku jika nama key dan nama value sama

  //   const objResult = {
  //     a: a,
  //     b: b,
  //     result: a - b,
  //   };
  //   const shorthandObjResult = {
  //     a,
  //     b,
  //     result: a - b,
  //   };
  return { a, b, result };
};
const { a, b, result } = subtraction(4, 2);
// console.log(a, b, result);

// arrow function
const namaFungsiArrow = (/**parameter */) => {
  /**implementasi */
};

const multiplication = (a, b) => {
  const result = a * b;
  return result;
};
const hasilPerkalian = multiplication(2, 5);
// console.log(hasilPerkalian);

// saran untuk pengondisian didalam fungsi
function printSegitiga(num) {
  //   if (typeof num === "number") {
  //     for (let i = num; i > 0; i--) {
  //       let result = "";
  //       for (let j = 1; j <= i; j++) {
  //         result += j;
  //       }
  //       console.log(result);
  //     }
  //   } else {
  //     console.log("Bukan Number");
  //   }
  if (typeof num !== "number") return console.log("Bukan Number");
  for (let i = num; i > 0; i--) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    console.log(result);
  }
}
// printSegitiga(5);

// truthy values & falsy values
// truthy values = nilai benar | ekuivalen dengan boolean TRUE
// falsy values = nilai salah | ekuivalen dengan boolean FALSE
// nilai didapatkan dari normalisasi variabel
// bentuk normalisasi !!variabel

const example = undefined;
// console.log(!!example);
// STRING false "" true "asagas"
// NUMBER false 0 true 1289
// BOOLEAN false FALSE true TRUE
// NULL false
// UNDEFINED false

const bool = true;
const isOdd = 3 % 2 !== 0; // tipe data boolean
const isGreater = 4 > 5;
console.log(typeof isGreater);
const stringExample = "Ini String";
const numberExample = 0;
console.log(typeof stringExample);
console.log(typeof numberExample);

if (stringExample) {
  console.log("String tidak kosong");
} else {
  console.log("String kosong");
}

if (numberExample) {
  console.log("Bukan 0");
} else {
  console.log("0");
}

const math = undefined;

if (math || math === 0) {
  console.log(`nilai MTK = ${math}`);
} else {
  console.log("nilai MTK belum diinput");
}
