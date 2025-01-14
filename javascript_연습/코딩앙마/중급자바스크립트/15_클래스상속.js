// 클래스 방식은 extends로 상속한다

class Car{
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.log("drive..")
    }
    stop(){
        console.log("stop");
    }
}

class Bmw extends Car {
    constructor(color){
        super(color); // 항상 super를 먼저 사용하여 부모클래스의 constructor를 실행해야 한다 -> extends를 써서 만든 자식 클래스는  빈 객체를 생성하고 this에 할당하는 작업을 건너뛰기 때문이다
        this.navigation = 1;
    }
    park(){
        console.log("park")
    }
    stop(){
        super.stop() // 부모의 동일한 이름의 메서드를 사용하고 싶다면 super를 사용한다.  ->"stop"
        console.log("OFF") // 메서드 오버라이딩: 메서드명이 상속받은 메서드명과 동일한 경우를 말한다. method overriding인 경우 이걸로 덮어쓴다. ->"OFF"
    }
    
    // constructor가 없으면 자동으로 있는것처럼 실행해서 부모의 constructor를 실행한다
    // constructor(...args){
    //     super(...args)
    // }
}

const z4 = new Bmw("blue")