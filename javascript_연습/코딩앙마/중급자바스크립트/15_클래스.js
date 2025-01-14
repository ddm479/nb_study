// 1. 생성자 함수 방식과 
const User = function(name, age){
    this.name = name;
    this.age = age;
    this.showName = function(){
        console.log(this.name);
    }
}

const mike1 = User('mike1', 20); // -> undefined, 의도한바가 아니지만 알아차리기 어렵다
const mike = new User('mike', 20); // 정상
for(const p in mike){
    console.log(p)
}

// 2. 클래스 방식이 있다
class User2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    } // -> 객체를 만들어주는 생성자 메서드
    showName(){
        console.log(this.name);
    } // 클래스 안에 정의한 메서드는 User2의 프로토타입에 저장된다
}

const tom = new User2("Tom", 19); // 클래스는 new가 없으면 오류가 뜨고 생성할 수 없다.
for(const p in tom){
    console.log(p) // for in문은 클래스 메서드를 제외시킨다
}
console.log("메서드의 위치확인", mike, tom)