/* ----------------- Parte uno ------------ */

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  confronto(person) {
    if (this.age < person.age) {
      return person.firstName + " è più vecchio di " + this.firstName;
    } else if (this.age > person.age) {
      return person.firstName + " è più giovane di " + this.firstName;
    } else {
      return person.firstName + " ha la stessa età di " + this.firstName;
    }
  }
}
person1 = new User("Mario", "Benvenuti", 21, "Taormina");
person2 = new User("Pippo", "Pippo", 30, "Nuoro");
person3 = new User("Andrea", "Dongiovanni", 11, "Viterbo");

console.log(person1.confronto(person2));
console.log(person2.confronto(person3));
console.log(person3.confronto(person1));

/* --------------- Parte due ---------------- */

let nomeAnimale = document.getElementById("nomeAnimale");
let nomePadrone = document.getElementById("nomePadrone");
let specie = document.getElementById("specie");
let razza = document.getElementById("razza");
let bottoneAggiungi = document.getElementById("bottoneAggiungi");
let petList = document.getElementById("listaAnimali");
let animali = [];
/* ----------------------------------------------- */
class Animale {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  controlloPadrone(diversoAnimale) {
    if (this.ownerName === diversoAnimale.ownerName) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
/* ------------------------------------------------ */
const elenco = function () {
  listaAnimali.innerHTML = "";
  animali.forEach((animale) => {
    const nuovoLi = document.createElement("li");
    nuovoLi.innerText =
      "Nome: " +
      animale.petName +
      " Padrone: " +
      animale.ownerName +
      " Specie:" +
      animale.species +
      " Razza:" +
      animale.breed;
    listaAnimali.appendChild(nuovoLi);
  });
};
/* -------------------------------------------------- */
bottoneAggiungi.onclick = function () {
  let nuovoAnimale = new Animale(nomeAnimale.value, nomePadrone.value, specie.value, razza.value);
  animali.push(nuovoAnimale);
  elenco();
  nomeAnimale.value = "";
  nomePadrone.value = "";
  specie.value = "";
  razza.value = "";
};
