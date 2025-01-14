interface Car{
    color: string;
    wheels: number;
    start(): void;
}

interface Toy {
    name: string; 
}

class Bmw implements Car {
    color;
    wheels=4;
    constructor(c:string){
        this.color = c;
    }
    start(){
        console.log('go..');
    }
}
const b = new Bmw('green');
console.log(b);
b.start();

// extends 사용시 Car가 갖고있던 속성들을 그대로 갖게됨

interface Benz extends Car {
    door: number;
    stop(): void;
}

const benz : Benz = {
    door : 5,
    stop(){
        console.log('stop');
    },
    color: 'black',
    wheels: 5,
    start(){},
}

// extends로 여러개 확장가능
interface ToyCar extends Car, Toy {
    price: number;
}