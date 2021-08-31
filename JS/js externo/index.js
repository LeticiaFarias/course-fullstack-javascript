alert("Welcome!");

let nameOldest = prompt("What is the name of the oldest person?");
let ageOldest = prompt("What is the age of the oldest person?");
let nameYoungest = prompt("What is the name of the youngest person?");
let ageYoungest = prompt("What is the age of the youngest person?");

let ageDifference = ageOldest - ageYoungest;

alert(
  "Name of the oldest person: " +
    nameOldest +
    "\nAge of the oldest person: " +
    ageOldest +
    "\nName of the youngest person: " +
    nameYoungest +
    "\nAge of the youngest person: " +
    ageYoungest +
    "\nAge difference: " +
    ageDifference
);