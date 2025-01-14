class Todo {
    id: string;
    text: string;
    // 자바스크립트는 클래스 생성 시 프로퍼티를 선언하지 않고 생성자 부분만 만들어도 작동한다. 하지만 타입스크립트에서는 미리 프로퍼티를 정의하고 타입표기도 해야한다.
    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo;