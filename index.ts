import Weapon from "./src/classes/Weapon";
import Character from "./src/classes/Character"
import Enemy from "./src/classes/Enemy";
import * as readlineSync from 'readline-sync';


// Armas
const sword = new Weapon("Sword", 15, "A very sharp sword");
const greatsword = new Weapon("Greatsword", 30, "A very heavy sword");
const longbow = new Weapon("Longbow", 25, "Longbow, used for hunting");
const dagger = new Weapon("Dagger", 10, "A tiny blade, can fit in your pocket");
const mace = new Weapon("Mace", 21, "A crude and rusty mace");
const halberd = new Weapon("Halberd", 25, "People tend to choose it by its versatility and increased range");

// Personagens
const warrior = new Character("Aragorn", "Warrior", "Human", "Male");
warrior.setStartingWeapon(greatsword);
console.log(`${warrior.getCharName()} starts with a ${warrior.getStartingWeapon()?.getName()} and deals ${warrior.getStartingWeapon()?.getDamage()} damage.`);

const archer = new Character("Legolas", "Archer", "Elf", "Male");
archer.setStartingWeapon(longbow);
console.log(`${archer.getCharName()} starts with a ${archer.getStartingWeapon()?.getName()} and deals ${archer.getStartingWeapon()?.getDamage()} damage.`);

const scout = new Character("Robin", "Scout", "Human", "Female");
scout.setStartingWeapon(dagger);
console.log(`${scout.getCharName()} starts with a ${scout.getStartingWeapon()?.getName()} and deals ${scout.getStartingWeapon()?.getDamage()} damage.`);

const tank = new Character("Gorath", "Tank", "Orc", "Male");
tank.setStartingWeapon(halberd);
console.log(`${tank.getCharName()} starts with a ${tank.getStartingWeapon()?.getName()} and deals ${tank.getStartingWeapon()?.getDamage()} damage.`);

const berserker = new Character("Ragnar", "Berserker", "Viking", "Male");
berserker.setStartingWeapon(mace);
console.log(`${berserker.getCharName()} starts with a ${berserker.getStartingWeapon()?.getName()} and deals ${berserker.getStartingWeapon()?.getDamage()} damage.`);

// Inimigos


const trollBerserker = new Enemy("Cave Troll", "Berserker", "Giant", "Male", 300, 20, mace)
const goblinScout = new Enemy("Goblin, from the pits", "Scout", "Halfling", "Female", 80, 10, dagger)
const goblinWarrior = new Enemy("Goblin from the pits", "Warrior", "Halfling", "Male", 100, 15, sword)
const darkElfArcher = new Enemy("Dark-Elf from the dark woods", "Archer", "Elf", "Male", 120, 25, longbow)
const minotaur = new Enemy("Minotaur, from the labyrinths", "Giant", "Giant", "Unknown", 500, 35, halberd)

function chooseCharacter(): Character {
  console.log("Choose your character:");
  console.log("1. Warrior");
  console.log("2. Archer");
  console.log("3. Scout");
  console.log("4. Tank");
  console.log("5. Berserker");

  const choice = readlineSync.questionInt("Enter the number of your choice: ");

  switch (choice) {
    case 1:
      return warrior;
    case 2:
      return archer;
    case 3:
      return scout;
    case 4:
      return tank;
    case 5:
      return berserker;
    default:
      console.log("Invalid choice, defaulting to Warrior.");
      return warrior;
  }
}

function attackEnemy(character: Character, enemy: Enemy): void {
  console.log(`${character.getCharName()} attacks ${enemy.getCharName()} with a ${character.getStartingWeapon()?.getName()}`);
  const totalDamage = character.getPower() + (character.getStartingWeapon()?.getDamage() || 0);
  console.log(`${character.getCharName()} deals ${totalDamage} damage.`);
  enemy.setCharHealth(enemy.getHealth() - totalDamage);
  console.log(`${enemy.getCharName()} has ${enemy.getHealth()} health left.`);
}

function mainFunction (){
  const player = chooseCharacter();
  console.log(`You have chosen ${player.getCharName()} who starts with a ${player.getStartingWeapon()?.getName()}.`);
  const enemyChoice = readlineSync.keyInSelect(
    [trollBerserker.getCharName(), goblinScout.getCharName(), goblinWarrior.getCharName(), darkElfArcher.getCharName(), minotaur.getCharName()],
    "Choose your enemy"
  );

  let enemy: Enemy;
  switch (enemyChoice) {
    case 0:
      enemy = trollBerserker;
      break;
    case 1:
      enemy = goblinScout;
      break;
    case 2:
      enemy = goblinWarrior;
      break;
    case 3:
      enemy = darkElfArcher;
      break;
    case 4:
      enemy = minotaur;
      break;
    default:
      console.log("No enemy chosen, exiting...");
      return;
  }

  console.log(`You are now fighting ${enemy.getCharName()}`);
  attackEnemy(player, enemy);
}

mainFunction();
