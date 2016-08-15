var calc = {
	status: 'Awesome',
	plus: function (a, b) {
		return (
			console.log(this),
			console.log(a + b),
			console.log(arguments),
			console.log(this.status)
		)
	}
}
calc.plus(56,30);



/*
function plus(a, b) {
	var sum = a + b;
	return sum; // NB: In javascript, a function can return ANYTHING. The "return" keyword can return a variable, an object, or another function.
}
*/
// console.log(plus(5,5));		// output the result to the console


/*
var minus = function(i, j) {
	return console.log(i - j);
}(10,4);
*/

/*
function plus(a, b) {
	return (
		console.log(a + b),
		console.log(this),		// note the 'this' variable here returns the Window object!
		console.log(arguments)
	);
}
plus(40,2);
*/