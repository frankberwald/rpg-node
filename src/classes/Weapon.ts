export default class Weapon {
  private readonly name: string = ''
  private damage: number = 0
  private readonly description: string = ''

  constructor(name: string, damage: number, description: string) {
    this.name = name;
    this.damage = damage;
    this.description = description;
  }

  getName() { return this.name }
  getDamage() { return this.damage }
  getDescription() { return this.description }

  setDamage(damage: number) {
    if (damage < 0) {
      console.log("Damage can't be null")
    } else {
      this.damage = damage
      return damage;
    }
  }
}