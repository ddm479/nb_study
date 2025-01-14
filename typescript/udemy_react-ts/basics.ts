// npx tsc 파일명 -> ts파일 컴파일해서 js파일로변환
let hobbies: string[]; // 문자열 배열타입

// 객체타입
let person: {
    name: string;
    age: number;
}

person = {
    name: 'Max',
    age: 32
};

// 객체 배열타입
let people: {
    name: string;
    age: number;
}[];

// 타입 별칭( Type Alias ) : 타입을 다른이름으로 정의해서 재사용할 수 있다. 
type Person = {
    name: string;
    age: number;
}

let person1: Person;
person1 = {
    name: 'Max',
    age: 32
};

// 타입 추론( Type inference ) : 타입 명시를 안해도 변수에 저장된 값의 타입을 알아낸다. (권장방식)
let ceo = 'haha';
// ceo = 123; // 에러 발생

// union type : 여러 타입 가능
let course: string | number = 'react';
course = 123;

// 2개의 매개변수 type은 number, 리턴타입도 number
function add(a: number, b: number): number {
    return a + b;
}

// Generics : 어떤 타입이든 사용할 수 있지만, 특정 타입을 사용해 함수를 실행하고 나면 해당 타입으로 고정되어 동작한다.

function insertAtBeginning<T>(array: T[], value: T) { // 제네릭을 사용하면 매개변수 첫번째 거를 기준으로 다른 매개변수나 반환 값의 자료형이 같아야한다는 것을 알게된다.
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
stringArray[0].split('');

// updatedArray.split('') // updatedArray가 숫자 배열이라는 것을 알아차리고 에러를 발생시킨다.
// 제네릭을 사용하지 않고 any로 사용할 경우 updatedArray가 숫자배열이라는 것을 모르고 에러발생하지 않는다.