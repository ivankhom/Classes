import Character from '../Character';
import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

describe('Character class', () => {
  test('should create character with valid name and type', () => {
    const character = new Bowman('Test');
    expect(character.name).toBe('Test');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('should throw error if name is too short', () => {
    expect(() => {
      new Bowman('T');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });

  test('should throw error if name is too long', () => {
    expect(() => {
      new Bowman('VeryLongName');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });

  test('should throw error if name is not a string', () => {
    expect(() => {
      new Bowman(123);
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