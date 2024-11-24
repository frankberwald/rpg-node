import Weapon from "./Weapon"

export default class Character {
  charName: string = ''
  charClass: string = ''
  race: string = ''
  gender: string = ''
  hp: number = 1000
  power: number = 30
  weapon: Weapon | null = null

  constructor(charName: string, charClass: string, race: string, gender: string) {
    this.charName = charName;
    this.charClass = charClass;
    this.race = race;
    this.gender = gender;
  }

  getCharName() { return this.charName }
  getCharClass() { return this.charClass }
  getCharRace() { return this.race }
  getCharGender() { return this.gender }
  getHealth() { return this.hp }
  getPower() { return this.power }
  getStartingWeapon() { return this.weapon }

  setName(charName: string) {
    this.charName = charName;
  }

  setCharClass(charClass: string) {
    this.charClass = charClass;
  }

  setCharRace(race: string) {
    this.race = race;
  }

  setCharGender(gender: string) {
    this.gender = gender;
  }

  setCharHealth(hp: number) {
    this.hp = hp
  }

  setCharPower(power: number) {
    this.power = power;
  }

  setStartingWeapon(weapon: Weapon | null) {
    this.weapon = weapon
  }

}