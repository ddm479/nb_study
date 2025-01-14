// 객체에서 property를 읽으려고 하는데 없으면 proto type(__proto__)에서 찾아서 사용된다
const car = {
    wheels: 4,
    drive(){
        console.log("drive..");
    },
}
const bmw = {
    color: "red",
    navigation: 1,
};

const benz = {
    color: "black",
};

const audi = {
    color: "blue",
}

bmw.__proto__ = car; // car는 bmw의 prototype이 된다. = bmw는 car에 상속을 받는다

const x5 = {
    color:"white",
    name:"x5",
};

x5.__proto__ = bmw; // x5는 bmw를 상속한다
// car < bmw < x5
console.log("1: ", bmw, bmw.wheels);
console.log("x5:", x5);
console.log("x5.name, x5.color:, x5.navigation", x5.name, x5.color, x5.navigation);
for(p in x5){
    console.log(p);
}