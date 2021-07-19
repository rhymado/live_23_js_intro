// copy array
const hobby = ["swimming", "gaming"];
const newHobby = ["hiking", "karaoke", ...hobby];
console.log(newHobby);
// gabung array
const fictionalBooks = ["Harry Potter", "Percy Jackson"];
const mangaBooks = ["Naruto", "One Piece", "Bleach"];
const library = [...fictionalBooks, ...mangaBooks];
console.log(library);
// copy object
const person = {
  first: "Arka",
  last: "Demy",
};
const personalId = {
  // first, last, dob, address
  dob: new Date("December 17, 1995 Z0700"),
  address: "DKI Jakarta",
  first: "Tama",
  ...person, // first, last
};
console.log(personalId);
// gabung object
const person2 = {
  last: "Indonesia",
  middle: "Joko",
};
const newPerson = {
  ...person,
  ...person2,
};
const newPersonEdit = {
  first: newPerson.first,
  middle: newPerson.middle,
  last: newPerson.last,
};
console.log(newPerson);
console.log(newPersonEdit);
