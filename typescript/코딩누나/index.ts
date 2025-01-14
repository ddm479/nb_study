// 타입스크립트에는 다음과 같은 type이 있다
// number
// string
// boolean
// null
// undefined
// any -> 어떤 데이터가 올지 모를 때 사용, 하지만 typescript를 사용하는 의미가 없어지기 때문에 사용자제
// node는 ts는 이해하지 못하고 js만 이해한다 -> tsc index.ts 실행 시 index.js 생성됨 -> 그 후 node index.js 실행가능
// tsc --init -> tsconfig.json파일 생성됨
// tsc -w index.ts -> indes.ts파일의 변경된 내용을 자동으로 컴파일해줌
let c:any = 4;
c = "이게되네";

let d:number | string = "number도 되고 string도 되고"  // number string 둘다가능
d = 3

let e:string[] = ['apple', 'mongo'] // string 배열
// let e: Array<string> = ['apple', 'mongo']와 같다

// 매개변수와 리턴값의 type은 number
function addNumber(a:number, b:number):number {
    return a+b;
}

addNumber(3,7);