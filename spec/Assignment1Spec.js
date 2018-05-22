//Question-1
describe("Q:1 Sum of the numbers", function () {
    it("should return the sum of all the numbers, when the numbers are all positive", function () {
      expect( positiveSum([1,2,3])).toEqual(6);
    });
    it(" it should not be included as part of the sum, when there is a negative number in the provided array", function(){
      expect( positiveSum([1,2,3,-5])).toEqual(6);
    });
    it("it should return a sum of 0, when the provided array is empty", function(){
      expect( positiveSum([])).toEqual(0);
    });
    it(" it should return a sum of 0, when the provided array is all negative numbers ", function(){
      expect( positiveSum([-1,-2,-3])).toEqual(0);
    });
});

//Question-2
describe("Q:2 Number to be Divided", function(){
    it("should return true, when the number is divisible by both of the provided divisors", function(){
        expect(isDivisible(8,2,4)).toBe(true);
    });
    it("should return false, when the number is smaller then both the provided divisors", function(){
        expect(isDivisible(16,32,48)).toBe(false);
    });
    it("should return false, when the number is not divisible by only one of the provided divisors", function(){
        expect(isDivisible(24,5,2)).toBe(false);
    });
    it("should return false, when the number is not divisible by any of the provided divisors", function(){
        expect(isDivisible(20,3,7)).toBe(false);
    });
});

//Question-3
describe("Q:3 Describing Characters", function(){
    it("should return itself, when there is only 1 character in the string", function(){
    expect(solution('a')).toEqual('a');
    });
    it("should return the string reversed, when there are multiple characters in the string", function(){
    expect(solution('a,b,c')).toBe('c,b,a');
    });
    it("should return empty string, when there are no characters in the string", function(){
    expect(solution('')).toBe('');
    });
});

//Question-4
