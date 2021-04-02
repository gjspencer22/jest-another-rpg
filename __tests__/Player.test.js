const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

console.log(new Potion());

const player = require('../lib/Player');

expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );