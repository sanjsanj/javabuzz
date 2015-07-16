describe('Javabuzz', function(){
  var javabuzz;

  beforeEach(function(){
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function(){
    it('divisible by 15', function(){
      expect(javabuzz.isDivisiblebyFifteen(15)).toBe(true);
    });

    it('divisible by 5', function(){
      expect(javabuzz.isDivisiblebyFive(5)).toBe(true);
    });

    it('divisible by 3', function(){
      expect(javabuzz.isDivisiblebyThree(3)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 15', function(){
      expect(javabuzz.isDivisiblebyFifteen(2)).toBe(false);
    });

    it('divisible by 5', function(){
      expect(javabuzz.isDivisiblebyFive(2)).toBe(false);
    });

    it('divisible by 3', function(){
      expect(javabuzz.isDivisiblebyThree(2)).toBe(false);
    });
  });
});
