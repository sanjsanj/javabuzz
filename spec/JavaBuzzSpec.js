describe('Javabuzz', function(){
  var javabuzz;

  beforeEach(function(){
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function(){
    it('divisible by 15', function(){
      expect(javabuzz.isDivisibleBy(15, 15)).toBe(true);
    });

    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleBy(5, 5)).toBe(true);
    });

    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleBy(3, 3)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 15', function(){
      expect(javabuzz.isDivisibleBy(2, 15)).toBe(false);
    });

    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleBy(2, 5)).toBe(false);
    });

    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleBy(2, 3)).toBe(false);
    });
  });
});
