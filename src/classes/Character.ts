export default class Character {
  private charName: string = ''
  private charClass: string = ''
  private race: string = ''
  private gender: string = ''

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

}