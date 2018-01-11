const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('should return "fizz" for inputs divisible by 3', function() {
		const testInputs = [3, 6, 9, 12, 18, 21, 24];

		testInputs.forEach(function(input) {
			const answer = fizzBuzzer(input);
			expect(answer).to.equal('fizz');
		});
	});
	it('should return "buzz" for inputs divisible by 5', function() {
		const testInputs = [5, 10, 20, 25, 35, 40, 50, 55];

		testInputs.forEach(function(input) {
			const answer = fizzBuzzer(input);
			expect(answer).to.equal('buzz');
		});
	});
	it('should return "fizzbuzz" for inputs divisible by 15', function() {
		const testInputs = [15, 30, 45, 60, 75, 90];

		testInputs.forEach(function(input) {
			const answer = fizzBuzzer(input);
			expect(answer).to.equal('fizz-buzz');
		});
	});

	it('should throw errors for non-numeric inputs', function() {
		const badInputs = ['5', '3', '15', 'test', null, undefined];

		badInputs.forEach(function(input) {
			expect(function() {
				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
});
