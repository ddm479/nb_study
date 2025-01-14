const user = {
    name : 'Mike',
    age : 30,
}

const cloneUser = user;
// 이때 객체 값이 저장되는게 아니라 참조값이 저장됨

cloneUser.name='Tom' // user.name도 'Tom'으로 변경됨

const newUser = Object.assign({}, user);
// {} 에 user를 병합시킴

newUser.name = 'MESSI'; 
console.log(user.name); // 'Tom', newUser != user

Object.keys(user); // 키 배열 반환, ['name', 'age']
Object.values(user); // 값 배열 반환, ['Tom', 30]

Object.entries(user); // 키/값 배열 반환,
// [
//     ["name","Tom"],
//     ["age",30]
// ]
const arr =
[
    ["name","Tom"],
    ["age",30]
]

Object.fromEntries(arr); // 키/값 배열을 객체로 변환
// {
//     name: 'tom',
//     age: 30
// }