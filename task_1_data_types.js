// Perform addition of various types (string + boolean, string + number, number + boolean)
// Perform multiplication of various types (string * boolean, string * number, number * boolean)
// Divide different types (string / boolean, string / number, number / Boolean)
// Perform explicit conversion (number, string, boolean)

let str = "Hello";
let num = 1;
let bool = true;

console.log('string: ',str);
console.log('number: ',num);
console.log('boolean: ',bool);

console.log('string+number: ',str+num,typeof(str+num));
console.log('number+string: ',num+str,typeof(num+str));
console.log('number+boolean: ',num+bool,typeof(num+bool));
console.log('boolean+number: ',bool+num,typeof(bool+num));
console.log('boolean+string: ',bool+str,typeof(bool+str));
console.log('string+boolean: ',str+bool,typeof(str+bool));


console.log('string/number: ',str/num,typeof(str/num));
console.log('number/string: ',num/str,typeof(num/str));
console.log('number/boolean: ',num/bool,typeof(num/bool));
console.log('boolean/number: ',bool/num,typeof(bool/num));
console.log('boolean/string: ',bool/str,typeof(bool/str));
console.log('string/boolean: ',str/bool,typeof(str/bool));


console.log('string*number: ',str*num,typeof(str*num));
console.log('number*string: ',num*str,typeof(num*str));
console.log('number*boolean: ',num*bool,typeof(num*bool));
console.log('boolean*number: ',bool*num,typeof(bool*num));
console.log('boolean*string: ',bool*str,typeof(bool*str));
console.log('string*boolean: ',str*bool,typeof(str*bool));

console.log('bool to string: ',String(bool));
console.log('bool to number: ',Number(bool));
console.log('number to string: ',String(num));
console.log('number to bool: ',Boolean(num));
console.log('string to bool: ',Boolean(str));
console.log('string to number: ',Number(str));

