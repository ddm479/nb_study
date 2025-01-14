let str = 'asdf';

console.log(str+1);
console.log(str*1);
console.log(str/1);
console.log(str-1);
console.log(`the result is ${str+1}`);
console.log(`the result is ${str-1}`);

console.log(`3+'5'`, 3+'5');
console.log(`3-'5'`, 3-'5');
console.log(`'3'*5`, '3'*5);

var a ={
    b : 1,
    // c : 2,
    "c": 3,
    c : 2  // 순서에 달라짐?
}

// https://medium.com/sjk5766/javascript-object-key-vs-object-key-%EC%B0%A8%EC%9D%B4-3c21eb49b763

let key = "c"
console.log(a.b)
console.log(a['b'])
// console.log(a[b])

console.log(a.c);
// console.log(a.'c');
console.log("a.key", a.key);
console.log("a['c']", a['c']);
console.log("a[key]", a[key]);

for (key in a) {
    console.log("key", key)
    console.log("a.key", a.key) // undefined, undefined
    console.log("a[key]", a[key])
}








