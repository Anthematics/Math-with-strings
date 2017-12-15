//index refers to index position of element being processed.
//element refers to the element being processed of course
//array refers to the current array

const goldenString = '30*4+5+5-6/2' //final solution means doing this string following the order of operations.

let m = '6000/2';


const digits = m.match(/(\d+)/g).map(function (element,index,array){
	let keep = parseInt(element);
	if (isNaN(keep)){
		return element
	}else{ return keep
	}
})
//digits = matched digits in regex only

const eq = m.split('').map( function(element,index,array){
	let saved = parseInt(element);
	if (isNaN(saved)){
		return element
	} else { return saved
	}
});

console.log(m +  '        DO THIS MATH')

const operator = eq.filter(function(element,index,array){
	if(typeof element === 'string'){
		return true
	}

});


 const integers = digits.filter(function(element,index,array) {
	if(typeof element === 'number'){
		return true
	}
 });


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

///possible to put multiplication and division in a seperate array and possibly run that first

//comment what part of each code does -> code is implimentation comment is how i arrived there.
