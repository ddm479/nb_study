type Score =  'A' | 'B' | 'C' | 'F';   // union타입 : | 연산자를 이용해 타입을 여러개 연결하는 방식, '또는'을 의미

// property를 정의해서 객체를 표현하고자 할 때에는 interface를 사용한다
interface User {
    name : string;
    age : number;
    gender? : string; // ?의미: gender가 있어도 되고 없어도 된다, optional한 property
    readonly birthYear : number; // readonly는 수정불가능
    [grade:number] : Score; // number를 key로하고 Score를 value로 갖는 property를 여러개 받을 수 있다는 의미
}

let user : User = {
    name : 'xx',
    age : 30,
    birthYear : 2000,
    1: 'A',
    2: 'B',
}

user.age = 10;
user.gender = "male";
// user.birthYear = 1990;
console.log(user.age);