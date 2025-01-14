// call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다.

const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName(){
    console.log(this.name);
}

showThisName(); // window.name은 빈 문자열
showThisName.call(mike); // call(this로 사용할 값[, arg1] )
// 함수로 호출하면서 call을 사용하고 this로 사용할 객체를 넘기면 해당 함수가 주어진 객체 메소드인 것처럼 사용할 수 있다. 

function update(birthYear, occupation){
    this.birthYear=birthYear;
    this.occupation=occupation;
}

update.call(mike, 1999, "singer");
console.log("3", mike);

// apply : 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다. 
// call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 2번째 인수에 매개변수를 배열로 받는다
update.apply(tom, [2002, "teacher"]);
console.log("4", tom)

// bind : 함수의 this값을 영구히 바꿀 수 있다
const updateMike = update.bind(mike);
updateMike(1990, 'police');
console.log("5", mike)

///////////////////////////////// 예제
const user = {
    name:"messi",
    showName: function() {
        console.log(`hello, ${this.name}`);
    },
}

user.showName(); // 메소드 앞에있는게 this
let fn = user.showName;
fn(); // this가 없다
fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);
boundFn();