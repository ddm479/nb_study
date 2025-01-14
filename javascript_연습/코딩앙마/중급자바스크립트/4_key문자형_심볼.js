const obj = {
    1: '1입니다',
    false: '거짓'
}
// property key는 보통 문자형이다. 한개 더 가능하다면 Symbol형
Object.keys(obj); // ["1", "false"]

obj['1']; // '1입니다.'
obj['false'] // "거짓"

// Symbol은 유일성을 보장한다
const id = Symbol('id');
const id2 = Symbol('id');
console.log(id, id2);
console.log(id===id2); // false
console.log(id==id2) // false