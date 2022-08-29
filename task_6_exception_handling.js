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

