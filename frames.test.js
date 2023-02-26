const Frame = require('./frames');

describe('Frame', () => {
  it('returns total score of frame', () => {
    const frame = new Frame();
    frame.roll(4)
    frame.roll(5)
    expect(frame.getScore()).toBe(9);
  })

  it('returns true if spare is scored and isSpare is called', () => {
    const frame = new Frame();
    frame.roll(6)
    frame.roll(4)
    expect(frame.isSpare()).toEqual(true);
  })

  it('returns false if spare is not scored and isSpare is called', () => {
    const frame = new Frame();
    frame.roll(2)
    frame.roll(4)
    expect(frame.isSpare()).toEqual(false);
  })

  it('returns true if strike is scored and isStrike is called', () => {
    const frame = new Frame();
    frame.roll(10)
    expect(frame.isStrike()).toEqual(true);
  })

  it('returns false if strike is not scored and isStrike is called', () => {
    const frame = new Frame();
    frame.roll(5)
    frame.roll(5)
    expect(frame.isStrike()).toEqual(false);
  })
  
})