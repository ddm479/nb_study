function hello(name?: string) { // ?은 name은 optional하다는 것을 의미
    return `Hello, ${name || "World"}`;
}

function hello2(name: string, age?: number): string { // 선택적 매개변수는 필수 매개변수보다 뒤에 와야한다
    if(age !== undefined) {
        return `Hello, ${name}. You are ${age}`;
    } else {
        return `Hello, ${name}`;
    }
}

function add2(...nums: number[]) { // number배열을 받는다
    return nums.reduce((result, num) => result + num, 0); 
}
const result = hello(); 