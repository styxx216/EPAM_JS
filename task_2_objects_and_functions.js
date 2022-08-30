// Create a car object, add a color property to it with the value equals 'black'
// Change the color property of the car object to 'green'
// Add the power property to the car object, which is a function and displays the engine power to the console
// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
// Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
// Write a function for calculating the type of argument and type output to the console
// Write a function that determines whether a number is prime or not

let car = Object();
car.color = 'black';
car.color = 'green';
function showMessage() {
    console.log(42);
  }
car.power = showMessage
console.log(car);
car.power();
function pears_and_apples(pears, apples){
  let res = pears + apples;
  return res;
}
let names = ['Bob','Alise','Jonh'];
function hello(name){
  if (name in names){
    console.log('Hello, ',name);
  }
  else{
    console.log('There is no such name');
  }
}
function print_type(arg){
  console.log(typeof arg);
}


function is_prime(num){
  var res = true;
  if (num==1){
    return res;
  }
  for(let i = 2;i<num;i++){
    if (num % i==0){
      res = false;
      break;
    }
  }
  return res;
}
console.log(is_prime(100001));
print_type(1);
print_type('asd');
