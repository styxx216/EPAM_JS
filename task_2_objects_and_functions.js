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