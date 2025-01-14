// arguments
// 1.  넘어온 모든 인수에 접근
// 2. 함수내에서 이용 가능한 지역 변수
// 3. length와 index 속성은 가지고 있다. 사용가능
// 4. Array 형태의 객체
// 5. 배열의 내장 메서드는 가지고 있지 않아 사용 불가능 (ex- forEach, map)


// 나머지 매개변수 : 정해지지 않은 수의 매개변수를 배열로 받을 수 있다 -> 항상 마지막 매개변수로 있어야 한다.
function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('Mike', 30, 'html', "css");
const user2 = new User('TOM', 20, "JS", "REACT");
console.log(user1, user2);

// 전개 구문(spread syntax)

let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log("[arr1, arr2]", [arr1, arr2]);
console.log("[0, ...arr1, ...arr2, 7,8,9]", [0, ...arr1, ...arr2, 7,8,9]);
console.log("...arr1: ", ...arr1)
console.log("[...arr1]: ", [...arr1])

let user3 = {name:'Mike', age:30};
let user4 = {...user3};
// console.log(...user3) 불가능

user4.name="Tom";

console.log(user3.name);
console.log(user4);

let user = { name: "Mike"};
let info = { age: 30 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

user = {
    ...user,
    ...info,
    skills : [...fe, ...lang],
}
console.log(user);