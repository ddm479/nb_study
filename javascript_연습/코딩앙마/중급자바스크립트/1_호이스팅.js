// 호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동

console.log(name); // undefined
var name = 'mike'; // 아래처럼 동작

// var name; -> 이렇게 있는 것처럼 동작 -> 호이스팅
// console.log(name); // undefined
// var name = 'mike';
// let 과 const는 TDZ(Temporal Dead Zone)의 영향을 받아 할당을 하기 전에는 사용할 수 없다
// let은 호이스팅 가능하다.

// 변수의 생성과정
// var (함수 스코프)
// 1. 선언 및 초기화 단계 : 초기화 단계에서 undefined를 할당해준다.
// 2. 할당 단계

// let (블록 스코프)
// 1. 선언 단계
// 2. 초기화 단계
// 3. 할당 단계

// const (블록 스코프)
// 1. 선언 + 초기화 + 할당


// 스코프
let age;
if(age>19){
    var txt='성인';
}
console.log(txt); // 성인

function add(num1, num2){
    var result = num1 + num2; // 함수 스코프 :  함수 내에서만 사용가능
}
add(2,3);
// console.log(result) // 사용불가

let str = "test"
console.log("str?.length", str?.length)