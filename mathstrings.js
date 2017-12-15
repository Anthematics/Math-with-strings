//index refers to index position of element being processed.
//element refers to the element being processed of course
//array refers to the current array

const goldenString = '3*4+5+5-6/2';

//final solution means doing this string following the order of operations.

//to solve goldenstring maybe m should = a changing variable that is the problem to be solved in the order that it should be solved.

//((3*4+5)+5)−6÷2
//((12+5)+5)−6÷2
//(17+5)−6÷2
//22−6÷2
//22−3
//1

//let m = '((3*4+5)+5)−6÷2'

let m = '100*5/2';


const digits = m.match(/(\d+)/g).map(function(element, index, array) {
	let keep = parseInt(element);
	if (isNaN(keep)) {
		return element;
	} else {
		return keep;
	}
});

//digits = matched digits in regex only

const eq = m.split('').map(function(element, index, array) {
	let saved = parseInt(element);
	if (isNaN(saved)) {
		return element;
	} else {
		return saved;
	}
});




console.log('Math time')
console.log(eq)



const operator = eq.filter(function(element, index, array) {
	if (typeof element === 'string') {
		return true;
	}
});

let equations = operator.length;


//this is how many calculations to solve including brackets which i may want to regex out -actually probably no to the bracket removal considering the nature of the problem.

const integers = digits.filter(function(element, index, array) {
	if (typeof element === 'number') {
		return true;
	}
});

let result = null;
//somehow we have to feed this switch statement multiple operations ..possibly ?

//next step is to iterate over mathmatical operands and return the next

switch (operator[0]) {
	case '*':
		result = integers[0] * integers[1];
		break;

	case '/':
		result = integers[0] / integers[1];
		break;

	case '+':
		result = integers[0] + integers[1];
		break;

	case '-':
		result = integers[0] - integers[1];

		break;
}

const sentence =`the answer to your question is ${result} & it takes ${equations} calculation(s) for your problem to be solved`

let resultarray = [];
resultarray.push(result)
console.log(resultarray +'   this is result array')

//((3*4+5)+5)−6÷2
//((12+5)+5)−6÷2
//(17+5)−6÷2
//22−6÷2
//22−3
//1

///possible to put multiplication and division in a seperate array and possibly run that first

//comment what part of each code does -> code is implimentation comment is how i arrived there.

//save first result into an array ? grab the next equation , run it

let resultindex = resultarray.indexOf(result);
	console.log(resultindex)

let replaceinindex = resultarray.indexOf(result);

	if (~replaceinindex) {
		eq[replaceinindex] = result;
	}

console.log(resultarray)
console.log(eq)


//it either goes too far or not far enough possibly in an if statement or scoping.

//to make this work i HAVE to run result and the Order of operations function again.
