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

  isStrike(){
    if(this.roll1 === 10){
      this.strike = true;
      return true;
    } else {
      return false;
    }
  }

  isSpare(){
    if(this.roll1 + this.roll2 === 10){
      this.spare = true;
      return true;
    } else {
      return false;
    }
  }
}


module.exports = Frame;