import Weapon from "./Weapon"

export default class Character {
  private charName: string = ''
  private charClass: string = ''
  private race: string = ''
  private gender: string = ''
  private hp: number = 100
  private power: number = 10
  private charweapon: Weapon | null = null

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
  getStartingWeapon(){return this.charweapon}

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

  setStartingWeapon(charweapon: Weapon){
    this.charweapon = Weapon;
  }

}