const Frame = require('./frames');

describe('Frame', () => {
  it('returns total score of frame', () => {
    const frame = new Frame();
    frame.roll1(4)
    frame.roll2(5)
    expect(frame.getScore()).toBe(9);
  })


  
})