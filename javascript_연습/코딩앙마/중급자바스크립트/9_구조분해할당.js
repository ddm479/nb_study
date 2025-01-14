// 배열 구조 분해
let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;
// -> 
// let user1 = users[0];
// let user2 = users[1];
// let user3 = users[2];
console.log(user1, user2, user3);

// 기본 값
let [a,b,c] = [1,2]; // c의 값은 undefined

let [x=3, y=4, z=5] = [1,2]; // 3, 4, 5는 기본값

// 일부 반환 값 무시
let [u1, , u2] = ['Mike', 'Tom', 'Jane', 'Tony'];
console.log(u1) // 'Mike'
console.log(u2) // 'Jane'

// 객체 구조 분해
let user = {
    name: 'Mike',
    age: 30
};
let {age, name} = user; // 1. 배열과 달리 순서를 신경쓰지 않아도 된다
// 2. 속성명과 변수명이 같으면 한 번만 사용해도 된다.
// ->
// let name = user.name;
// let age = user.age;
console.log("name, age", name, age); // 'Mike', 30

// 새로운 변수 이름으로 할당
let {name: userName, age: userAge} = user;
console.log(userName, userAge);

// 객체 기본값도 위와 동일하다