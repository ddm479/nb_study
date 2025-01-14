// 타입스크립트에는 다음과 같은 type이 있다
// number
// string
// boolean
// null
// undefined
// any -> 어떤 데이터가 올지 모를 때 사용, 하지만 typescript를 사용하는 의미가 없어지기 때문에 사용자제
// node는 ts는 이해하지 못하고 js만 이해한다 -> tsc index.ts 로 실행
let c = 4;
c = "이게되네";
let d = "number도 되고 string도 되고"; // number string 둘다가능
d = 3;
let e = ['apple', 'mongo']; // string 배열
function addNumber(a, b) {
    return a + b;
}
addNumber(3, 7);
//# sourceMappingURL=index.js.map