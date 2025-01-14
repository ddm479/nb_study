// type과 interface
// 1. 튜플은 type 키워드를 통해서만 입력될 수 있다.
type row = [colOne: number, colTwo: string];

// 2. 유니온 유형은 type 키워드를 통해서만 구현할 수 있다.
type Fruit = 'apple' | 'pear' | 'orange';

// 3. interface는 여러 번 정의(선언 병합)할 수 있으며 단일  인터페이스로 처리된다. ( type은 불가능 )
interface Person1 { name: string; }
interface Person1 { age: number; }
const person3: Person1 = {
    age: 39,
    name: 'faker'
}
// 4. interface와 type 서로 확장이 가능하다.
type PartialPointX = { x: number; };
interface Point1 extends PartialPointX { y: number; }

interface PartialPointY { y: number; }
type Point = PartialPointY & { x: number; };


// 5. 함수 형태 차이
type Sum1 = (x: number, y: number) => number;

interface Sum2 {
    (x: number, y: number): number;
}

// 6. 오버로드
interface NumLogger {
    log: (val: number) => void;
}
type StrAndNumLogger = NumLogger & {
    log: (val: string) => void;
}

const logger: StrAndNumLogger = {
    log: (val: string | number) => console.log(val)
}

logger.log(1)
logger.log('hi')

// interface만으로는 불가능
// interface StrAndNumLogger1 extends NumLogger { 
//     log: (val: string) => void; 
// };

// 참고: https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript

// When to use type:

// Use type when defining an alias for primitive types (string, boolean, number, bigint, symbol, etc)
// Use type when defining tuple types
// Use type when defining function types
// Use type when defining a union
// Use type when trying to overload functions in object types via composition
// Use type when needing to take advantage of mapped types


// When to use interface:

// Use interface for all object types where using type is not required (see above)
// Use interface when you want to take advantage of declaration merging.