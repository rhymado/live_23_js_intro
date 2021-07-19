// if-else
// if digunakan jika kondisi merupakan range atau bukan
// if (kondisi) {jika kondisi terpenuhi} else {jika kondisi gagal}
let age = 17;
if (age < 17) {
  // 5 < 17 = true
  console.log("Belum ada KTP");
} else {
  // 25 < 17 = false
  console.log("Sudah ada KTP");
}

const num = 3;
// bilangan ganjil tidak habis dibagi 2
// bilangan genap habis dibagi 2
if (num % 2 === 0) {
  console.log("genap");
} else {
  console.log("ganjil");
}
// if berantai
// siswa(<18), mahasiswa(18<=x<=25), dewasa (>25)
if (age < 18) {
  console.log("siswa");
} else if (age >= 18 && age <= 25) {
  console.log("mahasiswa");
} else if (age > 25) {
  console.log("dewasa");
}
// pria umur <=30 -> gerbong A
// pria umur >30 -> gerbong B
// wanita umur <=30 -> gerbong C
// wanita umur >30 -> gerbong D
const gender = "wanita";
age = 24;

if (gender === "pria") {
  if (age <= 30) {
    console.log("gerbong A");
  } else {
    console.log("gerbong B");
  }
} else if (gender === "wanita") {
  if (age <= 30) {
    console.log("gerbong C");
  } else {
    console.log("gerbong D");
  }
}

// switch-case
// switch digunakan jika kondisinya bukan range
/**
 * switch (variabel yg dicek){
 *  case value1: jika value1 terpenuhi
 *  case value2: jika value2 terpenuhi
 *  .
 *  .
 *  .
 *  .
 *  case valueN: jika valueN terpenuhi
 *  default: jika tidak ada case yang terpenuhi
 * }
 */
const assessment = 75;
let grade; // A,B,C,D
if (assessment < 50) {
  grade = "D";
} else if (assessment < 75) {
  grade = "C";
} else if (assessment < 90) {
  grade = "B";
} else if (assessment >= 90) {
  grade = "A";
}
/**
 * A = sangat memuaskan
 * B = memuaskan
 * C = kurang
 * D = sangat kurang
 */
switch (grade) {
  case "A":
    console.log("sangat memuaskan");
    break;
  case "B":
    console.log("memuaskan");
    break;
  case "C":
    console.log("kurang");
    break;
  case "D":
    console.log("sangat kurang");
    break;
  default:
    console.log("grade tidak sesuai");
    break;
}
