class Animal{
    constructor(move){
        this.move = move;
    }
    is_move(){
        if (this.move){
            console.log('Animal is move');
        }
        else{
            console.log('Animal is not move');
        }
    }
    
}
class Cat extends Animal{
    constructor(move,name){
        super(move);
        this.name = name;
    }
    get_name(){
        console.log("Cat's name is "+this.name);
    }
    is_move(){
        if (this.move){
            console.log(this.name+' is move');
        }
        else{
            console.log(this.name+' is not move');
        }
    }
    
}
animal = new Animal(true);
animal.is_move();
barsik = new Cat(false,'Barsik');
barsik.get_name();
barsik.is_move();