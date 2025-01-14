// 1. generator: 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
// 2. next(), return(), throw() 메서드를 가진다
// 3. function 옆에 *을 붙여서 만들고 내부에 yield 키워드를 사용한다
function* fn() {
    try {
        console.log(1)
        yield 1; // yield에서 함수의 실행을 멈출 수 있다
        console.log(2)
        yield 2;
        console.log(3)
        yield 3;
        return "finish"
    } catch(err){
        console.log(err)
    }
}

const a = fn() // generator함수를 실행하면 generator객체를 반환한다.
a.next()
// next()를 사용하면 진행이 멈췄던 부분부터 가장 가까운 yield문을 만날때까지 함수가 실행되고 데이터 객체를 반환한다. 
// -> 반환된 데이터 객체는 {value:1, done: false}의 형태,  value는 yield 오른쪽의 값, done은 함수코드가 다 끝났는지 여부

a.return("end") // { value:"end", done: true} 실행 즉시 done의 값이 true가 된다
a.throw(new Error('error발생')) // { value: undefined, done: true} 실행 즉시 done의 값이 true가 된다

// 더 자세한건  https://www.youtube.com/watch?v=qi24UqyJLgs&list=PLZKTXPmaJk8JZ2NAC538UzhY_UNqMdZB4&index=18