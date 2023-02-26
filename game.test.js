const Game = require('./game');
const Frame = require('./frames');

describe('Game', () => {
  it('identifies the user is on frame one', () => {
    const game = new Game();
    game.roll(4);
    expect(game.returnFrame()).toEqual(1);
  })

  it('identifies the user is on frame two', () => {
    const game = new Game();
    game.roll(4);
    game.roll(4);
    game.roll(4);
    expect(game.returnFrame()).toEqual(2);
  })

  it('identifies the user is on frame three', () => {
    const game = new Game();
    game.roll(4);
    game.roll(4);
    game.roll(4);
    game.roll(4);
    game.roll(4);
    expect(game.returnFrame()).toEqual(3);
  })



})