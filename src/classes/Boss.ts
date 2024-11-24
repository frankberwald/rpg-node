import Enemy from "./Enemy";
import Weapon from "./Weapon";

interface BossConfig {
  name: string;
  charClass: string;
  race: string;
  gender: string;
  healthpoints: number;
  enemyPower: number;
  enemyWeapon: Weapon | null;
}

export default class Boss extends Enemy {
  constructor(config: BossConfig) {
    super(
      config.name,
      config.charClass,
      config.race,
      config.gender,
      config.healthpoints * 3, // Triplica a vida
      config.enemyPower * 2,  // Dobra o dano
      config.enemyWeapon
    );
  }
}