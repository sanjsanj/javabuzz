var Javabuzz = function(){
  Javabuzz.prototype.isDivisiblebyFifteen = function (number) {
    return (number % 15 === 0);
  };

  Javabuzz.prototype.isDivisiblebyFive = function (number) {
    return (number % 5 === 0);
  };

  Javabuzz.prototype.isDivisiblebyThree = function (number) {
    return (number % 3 === 0);
  };
};
