const Frame = require('./frames');


class Game{
  constructor(){
    // this populates the frames array with 10 frame objects
    this.frames = []
    for(let i = 0; i < 10; i++){
      this.frames.push(new Frame());
    }

    this.currentFrame = 1;
    this.totalScore = 0;
  }

  roll(score){
    //calcualtes which frame is current in action by rounding down the currentFrame variable
    let workingFrame = Math.floor(this.currentFrame);
    let frameObject = this.frames[workingFrame - 1];
    frameObject.roll(score);
    console.log(this.currentFrame);
    this.currentFrame += 0.5;
    console.log(this.currentFrame);
  }

  returnFrame(){
    return Math.floor(this.currentFrame);
  }
}



module.exports = Game;