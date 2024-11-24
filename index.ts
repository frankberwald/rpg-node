import Weapon from "./src/classes/Weapon";
import Character from "./src/classes/Character"
import Enemy from "./src/classes/Enemy";
import Boss from "./src/classes/Boss";
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


const trollBerserker = new Enemy("Cave Troll", "Berserker", "Giant", "Male", 450, 20, mace)
const goblinScout = new Enemy("Goblin scout, from the pits", "Scout", "Halfling", "Female", 130, 10, dagger)
const goblinWarrior = new Enemy("Goblin warrior from the pits", "Warrior", "Halfling", "Male", 180, 15, sword)
const darkElfArcher = new Enemy("Dark-Elf from the dark woods", "Archer", "Elf", "Male", 300, 25, longbow)
const minotaur = new Enemy("Minotaur, from the labyrinths", "Giant", "Giant", "Unknown", 700, 35, halberd)

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
  console.log(`${character.getCharName()} deals ${totalDamage} damage.\n`);
  enemy.setCharHealth(enemy.getHealth() - totalDamage);
  console.log(`${enemy.getCharName()} has ${enemy.getHealth()} health left.`);
}

function enemyAttack(player: Character, enemy: Enemy): void {
  const hitChance = Math.random();
  const isHit = hitChance <= 0.5;

  if (isHit) {
    console.log(`${enemy.getCharName()} hits you with a ${enemy.getStartingWeapon()?.getName()}\n`);
    const totalDamage = enemy.getPower() + (enemy.getStartingWeapon()?.getDamage() || 0);
    console.log(`${enemy.getCharName()} deals ${totalDamage} damage.\n`);
    player.setCharHealth(player.getHealth() - totalDamage);
  }else {
    console.log(`${enemy.getCharName()} missed the attack\n`)
  }
  console.log(`You have ${player.getHealth()} health left\n`)
}

function getRandomEnemy(enemies: Enemy[]): Enemy | null {
  const aliveEnemies = enemies.filter(e => e.getHealth() > 0);
  if (aliveEnemies.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * aliveEnemies.length)
  return aliveEnemies[randomIndex];
}

function combat(player: Character, enemy: Enemy): boolean {
  let isFighting = true;

  while (isFighting) {
    attackEnemy(player, enemy);

    if (enemy.getHealth() <= 0) {
      console.log(`${enemy.getCharName()} has fallen.\n`)
      isFighting = false;
      return true;
    }

    enemyAttack(player, enemy)

    if(player.getHealth() <= 0){
      console.log(`${player.getCharName()} thou has perished. Game Over\n`)
      isFighting = false;
      return false;;
    }
    const continueFighting = readlineSync.keyInYNStrict('\nDoes thou want to keep fighting?\n');
    if (!continueFighting) {
      console.log("You decided to retreat!\n");
      isFighting = false;
      return false;
    }
  }
}

function mainFunction (){
  const player = chooseCharacter();
  console.log(`You have chosen ${player.getCharName()} who starts with a ${player.getStartingWeapon()?.getName()}.\n`);
  const enemies = [trollBerserker, goblinScout, goblinWarrior, darkElfArcher, minotaur];
  const enemyChoice = readlineSync.keyInSelect(
    enemies.map(e => e.getCharName()),
    "Choose thy foe"
  );

  if (enemyChoice === -1){
    console.log("\nNo enemy chosen, therefore the game can not start")
    return;
  }

  let enemy = enemies[enemyChoice];

  console.log(`\nYou are now fighting ${enemy.getCharName()}`);
  while(true) {
    const won = combat(player, enemy);

    if(!won) {
      console.log("\nThou has perished, game over")
      break;
    }

    enemy = getRandomEnemy(enemies);

    if(!enemy) {
      console.log("\nCongratulations, thou has defeated all thy foes.");
      break;
    }
    if (Math.random() < 0.2) {
      console.log("A powerful foe appears!");
      enemy = new Boss({
        name: enemy.getCharName(),
        charClass: enemy.getCharClass(),
        race: enemy.getCharRace(),
        gender: enemy.getCharGender(),
        healthpoints: enemy.getHealth(),
        enemyPower: enemy.getPower(),
        enemyWeapon: enemy.getStartingWeapon(),
      });
    }
    console.log(`A new foe comes to battle you: ${enemy.getCharName()}\n`)
  }
}

mainFunction();
