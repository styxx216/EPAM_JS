// Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
// Given an array of car manufacturers, convert the array to a string and back to an array
// Given an array of the names of your friends, add the words hello to each element of the array
// Convert numeric array to Boolean
// Sort the array [1,6,7,8,3,4,5,6] in descending order
// Filter array [1,6,7,8,3,4,5,6] by value> 3
// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
// Implement a loop that will print the number 'a' until it is less than 10
// Implement a loop that prints prime numbers to the console
// Implement a loop that prints odd numbers to the console


let movies =['In the Name of the King 2: Two Worlds','Bloodrayne: The Third Reich','1968. Tunnel Rats','Anger of the Dead'];
let auto = ['Audi','Volkswagen','Honda','Subaru'];
let names = ['Bob','Alise','Jonh'];
let numbers = [1,6,7,8,3,4,5,6];


//task_1
console.log('task 1:')
for (let i = 0; i < movies.length ; i++) { 
    console.log(movies[i]);
  }

//task_2
console.log('task 2:')
console.log(auto);
console.log(String(auto));
console.log(String(auto).split(','));

//task_3
console.log('task 3:')
names = names.map(item => 'Hello,'.concat(" ", item));
console.log(names);

//task_4
console.log('task 4:')
console.log(numbers.map(item =>Boolean(item)));

//task_5
console.log('task 5:')
console.log(numbers.sort(function(a, b){return b-a}));

//task_6
console.log('task 6:');
console.log(numbers.filter(item => item> 3));


//task_7
console.log('task 7:');
function f(arr,n){
    return arr.findIndex(user => user == n);
}
console.log(f(numbers,3));

//task_8
console.log('task 8:')
let a = 20;
while (a>=10){
    console.log(a);
    a--;
}

//task_9
console.log('task 9:')
for (let i=1;i<20;i++){
    let f = true;
    for(let j =2;j<i;j++){
        if (i%j==0){
            f = false;
            break;
        }
    }
    if (f){
        console.log(i);
    }

}
//task_10
console.log('task 10:')
for (let i=0;i<10;i++){
    let f = true;
    if (i%2==0){
        f = false;
    }
    if (f){
        console.log(i);
    }

}
