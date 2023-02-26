class Frame{
  constructor(){
    this.roll1;
    this.roll2;
    this.spare = false;
    this.strike = false;
  }

  roll1(score){
    this.roll1 = score;
  }

  roll2(score){
    this.roll2 = score;
  }

  getScore(){
    return this.roll1 + this.roll2;
  } 
}


module.exports = Frame;