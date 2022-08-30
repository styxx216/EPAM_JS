// In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero' 4) Get the day, month and year of the current date and output it to the console separately

try{
    console.log(a);
    let a = 0
}
catch (err) {
    console.log('let must be declared before use')
  }

function B(){
    let b=1/0
    if (b==Infinity) {
        throw new Error();
    }
    
    console.log(b);
}
try{
    B()
}
catch (err) {
    console.log('cannot be divided by zero')
  }

