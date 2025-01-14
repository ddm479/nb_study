// 생성자 함수가 새로운 객체를 만들어 낼 때 그 객체를 생성자의 인스턴스라고 한다.
const Bmw = function (color) {
    this.color = color;
};

// 1. 생성자함수 방식은 protytype으로 상속한다

// __proto__ 대신 아래와 방식으로 사용가능 2-1.
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function(){
    console.log("drive..");
}
Bmw.prototype.navigation = 1;
Bmw.prototype.stop = function(){
    console.log("stop!");
}
// 2-2. 
// Bmw.prototype = {
//     constructor: Bmw,
//     wheels: 4,
//     drive() {
//         console.loe("drive..");
//     },
//     navigation: 1,
//     stop(){
//         console.log("STOP!");
//     }
// }

const x5 = new Bmw("Red");
const z4 = new Bmw("blue"); // x5와 z4는 Bmw의 인스턴스

console.log("z4: ", z4)
