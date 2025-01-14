var sayNode = function () {
    console.log("Node");
};

// ES5 버젼
var es = "ES";
var oldobject = {
    sayJS: function () {
        console.log("js");
    },
    sayNode: sayNode,
};

oldobject[es + 6] = "Fantastic";   // 3. 객체의 속성명을 동적으로 생성하려면 객체 리터럴(oldObject) 바깥에서 [es + 6]를 해야 했다
oldobject.sayNode();
oldobject.sayJS();
console.log(oldobject.ES6);

// ES6 버젼
const newObject = {
    sayJS() {
        console.log("JS"); // 1. 객체의 메서드에 함수를 연결할 때 콜론(:)과 function()을 붙이지 않아도 된다.
    },
    sayNode,   // 2. 속성명과 변수명이 동일한 경우에는 한 번만 써도 되게 변경됐다.
    [es + 6]: "Fantastic",   // 3.객체 리터럴 안에 동적 속성을 선언해도 된다 
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);
