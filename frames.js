class Frame{
  constructor(){
    this.rolls = []
    this.roll1;
    this.roll2;
    this.spare = false;
    this.strike = false;
  }


  roll(score){
    if(this.rolls.length < 2){
      this.rolls.push(score)
    }
  }

  getScore(){
    const sum = this.rolls.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    return sum;
  } 

  isStrike(){
    if(this.rolls[0] === 10){
      this.strike = true;
      return true;
    } else {
      return false;
    }
  }

  isSpare(){
    if(this.getScore() === 10){
      this.spare = true;
      return true;
    } else {
      return false;
    }
  }
}


module.exports = Frame;