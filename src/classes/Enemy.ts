import Character from "./Character";
import Weapon from "./Weapon";

export default class Enemy extends Character {
  private name: string = ''
  private healthpoitns: number = 0;
  private enemyPower: number = 0;
  private enemyWeapon: Weapon | null = null;
  constructor(
    name: string,
    charClass: string, // Classe do personagem
    race: string, // Raça
    gender: string, // Gênero
    healthpoints: number = 100, // Pontos de vida (opcional, com valor padrão)
    enemyPower: number = 10, // Poder (opcional, com valor padrão)
    enemyWeapon: Weapon | null = null // Arma inicial
  )  {
    super(name, charClass, race, gender);
    this.setCharHealth(healthpoints);
    this.setCharPower(enemyPower);
    this.setStartingWeapon(enemyWeapon);
  }
}