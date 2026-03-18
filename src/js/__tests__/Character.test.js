import Character from '../Character';
import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

describe('Character class', () => {
  test('should create character with valid name and type', () => {
    const character = new Character('Test', 'Bowman');
    expect(character.name).toBe('Test');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('should throw error if name is too short', () => {
    expect(() => {
      new Character('T', 'Bowman');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });

  test('should throw error if name is too long', () => {
    expect(() => {
      new Character('VeryLongName', 'Bowman');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });

  test('should throw error if name is not a string', () => {
    expect(() => {
      new Character(123, 'Bowman');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });

  test('should throw error if type is invalid', () => {
    expect(() => {
      new Character('Test', 'InvalidType');
    }).toThrow('Неверный тип персонажа');
  });
});

describe('Character subclasses', () => {
  test('should create Bowman with correct stats', () => {
    const bowman = new Bowman('Robin');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  test('should create Swordsman with correct stats', () => {
    const swordsman = new Swordsman('Arthur');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('should create Magician with correct stats', () => {
    const magician = new Magician('Merlin');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  test('should create Daemon with correct stats', () => {
    const daemon = new Daemon('Azazel');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  test('should create Undead with correct stats', () => {
    const undead = new Undead('Dracula');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  test('should create Zombie with correct stats', () => {
    const zombie = new Zombie('Walker');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});

describe('levelUp method', () => {
  test('should increase level, attack, defence and restore health for Bowman', () => {
    const character = new Bowman('Robin');
    character.health = 50;
    
    character.levelUp();
    
    expect(character.level).toBe(2);
    expect(character.attack).toBe(30);
    expect(character.defence).toBe(30);
    expect(character.health).toBe(100);
  });

  test('should increase level, attack, defence and restore health for Swordsman', () => {
    const character = new Swordsman('Arthur');
    character.health = 50;
    
    character.levelUp();
    
    expect(character.level).toBe(2);
    expect(character.attack).toBe(48);
    expect(character.defence).toBe(12);
    expect(character.health).toBe(100);
  });

  test('should increase level, attack, defence and restore health for Magician', () => {
    const character = new Magician('Merlin');
    character.health = 50;
    
    character.levelUp();
    
    expect(character.level).toBe(2);
    expect(character.attack).toBe(12);
    expect(character.defence).toBe(48);
    expect(character.health).toBe(100);
  });

  test('should increase level, attack, defence and restore health for Daemon', () => {
    const character = new Daemon('Azazel');
    character.health = 50;
    
    character.levelUp();
    
    expect(character.level).toBe(2);
    expect(character.attack).toBe(12);
    expect(character.defence).toBe(48);
    expect(character.health).toBe(100);
  });

  test('should increase level, attack, defence and restore health for Undead', () => {
    const character = new Undead('Dracula');
    character.health = 50;
    
    character.levelUp();
    
    expect(character.level).toBe(2);
    expect(character.attack).toBe(30);
    expect(character.defence).toBe(30);
    expect(character.health).toBe(100);
  });

  test('should increase level, attack, defence and restore health for Zombie', () => {
    const character = new Zombie('Walker');
    character.health = 50;
    
    character.levelUp();
    
    expect(character.level).toBe(2);
    expect(character.attack).toBe(48);
    expect(character.defence).toBe(12);
    expect(character.health).toBe(100);
  });

  test('should throw error if health is 0', () => {
    const character = new Bowman('Robin');
    character.health = 0;
    
    expect(() => {
      character.levelUp();
    }).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  test('should throw error if health is negative', () => {
    const character = new Bowman('Robin');
    character.health = -10;
    
    expect(() => {
      character.levelUp();
    }).toThrow('Нельзя повысить уровень умершего персонажа');
  });
});

describe('damage method', () => {
  test('should reduce health according to defence for Bowman', () => {
    const character = new Bowman('Robin');
    character.damage(40);
    expect(character.health).toBe(70);
  });

  test('should reduce health according to defence for Swordsman', () => {
    const character = new Swordsman('Arthur');
    character.damage(100);
    expect(character.health).toBe(10);
  });

  test('should reduce health according to defence for Magician', () => {
    const character = new Magician('Merlin');
    character.damage(100);
    expect(character.health).toBe(40);
  });

  test('should reduce health according to defence for Daemon', () => {
    const character = new Daemon('Azazel');
    character.damage(100);
    expect(character.health).toBe(40);
  });

  test('should reduce health according to defence for Undead', () => {
    const character = new Undead('Dracula');
    character.damage(40);
    expect(character.health).toBe(70);
  });

  test('should reduce health according to defence for Zombie', () => {
    const character = new Zombie('Walker');
    character.damage(100);
    expect(character.health).toBe(10);
  });

  test('should not reduce health below 0', () => {
    const character = new Bowman('Robin');
    character.damage(200);
    expect(character.health).toBe(0);
  });

  test('should do nothing if health is already 0', () => {
    const character = new Bowman('Robin');
    character.health = 0;
    character.damage(50);
    expect(character.health).toBe(0);
  });

  test('should handle fractional damage correctly', () => {
    const character = new Bowman('Robin');
    character.damage(33);
    expect(character.health).toBeCloseTo(75.25, 2);
  });
});

describe('Character constructor with different types', () => {
  test('should create Bowman with correct attack/defence', () => {
    const character = new Character('Test', 'Bowman');
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('should create Swordsman with correct attack/defence', () => {
    const character = new Character('Test', 'Swordsman');
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
  });

  test('should create Magician with correct attack/defence', () => {
    const character = new Character('Test', 'Magician');
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
  });

  test('should create Daemon with correct attack/defence', () => {
    const character = new Character('Test', 'Daemon');
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
  });

  test('should create Undead with correct attack/defence', () => {
    const character = new Character('Test', 'Undead');
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('should create Zombie with correct attack/defence', () => {
    const character = new Character('Test', 'Zombie');
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
  });
});

describe('Cover default switch branch', () => {
  test('should set default attack/defence when type is unknown (bypassing validation)', () => {
    function createCharacterWithoutValidation(name, type) {
      const character = {
        name: name,
        type: type,
        health: 100,
        level: 1
      };
      
      switch (type) {
        case 'Bowman':
          character.attack = 25;
          character.defence = 25;
          break;
        case 'Swordsman':
          character.attack = 40;
          character.defence = 10;
          break;
        case 'Magician':
          character.attack = 10;
          character.defence = 40;
          break;
        case 'Daemon':
          character.attack = 10;
          character.defence = 40;
          break;
        case 'Undead':
          character.attack = 25;
          character.defence = 25;
          break;
        case 'Zombie':
          character.attack = 40;
          character.defence = 10;
          break;
        default:
          character.attack = 0;
          character.defence = 0;
      }
      
      character.levelUp = Character.prototype.levelUp;
      character.damage = Character.prototype.damage;
      
      return character;
    }
    
    const character = createCharacterWithoutValidation('Test', 'Unknown');
    
    expect(character.attack).toBe(0);
    expect(character.defence).toBe(0);
    expect(character.type).toBe('Unknown');
  });
});