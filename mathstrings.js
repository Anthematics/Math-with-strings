let m = '5*5';

const eq = m.split('').map( function(element,index,array){
	let saved = parseInt(element);
	if (isNaN(saved)){
		return element
	} else { return saved
	}
});
console.log(eq)

const operator = eq.filter(function(element,index,array){
	if(typeof element === 'string'){
		return true
	}

});

console.log(operator)

 const integers = eq.filter(function(element,index,array) {
	if(typeof element === 'number'){
		return true
	}
 });


console.log(integers)

let result = null

switch(operator[0]) {

	case '*' :
		result = integers[0] * integers[1]
		break;

	case '/' :
		result = integers[0] / integers[1]
		break;

	case '+' :
		result = integers[0] + integers[1]
		break;

	case '-':
		result = integers[0] - integers[1]

		break;

}

console.log(result)
