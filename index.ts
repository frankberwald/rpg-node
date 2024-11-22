const prompt = require("prompt-sync")();

import Weapon from "./src/classes/Weapon";
import Character from "./src/classes/Character"

const sword = new Weapon ("Greatsword", 15, "A very heavy sword")

const swordName = sword.getName();
const swordDamage = sword.getDamage();
const swordInfo = sword.getDescription();

console.log(swordName);
console.log(swordInfo);
console.log(swordDamage);

const newDamage = sword.setDamage(16)
console.log(newDamage)

const charName = prompt("Enter character name: ");
const charClass = prompt("Enter character class: ");
const race = prompt("Enter character race: ");
const gender = prompt("Enter character gender: ");

const character = new Character(charName, charClass, race, gender);

console.log("\nCharacter Created:");
console.log(`Name: ${character.getCharName()}`);
console.log(`Class: ${character.getCharClass()}`);
console.log(`Race: ${character.getCharRace()}`);
console.log(`Gender: ${character.getCharGender()}`);