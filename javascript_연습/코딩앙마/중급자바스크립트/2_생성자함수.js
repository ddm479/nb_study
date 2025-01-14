let user = {
    name : 'Mike',
    age : 30,
}

// 생성자함수의 첫 글자는 대문자로
function User(name, age){
    // this = {}  2. 빈 객체를 만들고 this에 할당(자동으로 생략된다)
    this.name = name; // 3. this에 property를 추가한다
    this.age = age;
    // return this;  (자동으로 생략된다)
}

let user1 = new User('Mike', 30); //  1.new 연산자로 호출

// 생성자 함수가 새로운 객체를 만들어 낼 때 그 객체를 생성자의 인스턴스라고 한다.