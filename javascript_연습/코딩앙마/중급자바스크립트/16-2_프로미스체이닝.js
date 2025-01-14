// 프로미스 체이닝 (Promises chaining)   /////////////
const f1 = () =>{
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    })
}

const f2 = (message) =>{
    console.log(message)
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
            // rej("2번 주문 실패");
        }, 3000);
    })
}

const f3 = (message) =>{
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    })
}

console.time('시작:');
f1()
    .then(res => f2(res)) // resolve를 실행하면서 넘겨준 값을 2번에게 전달
    .then(res => f3(res)) // resolve를 실행하면서 넘겨준 값을 3번에게 전달
    .then(res => console.log(res))
    .catch(err => console.log("실패", err))
    .finally(()=>{
        console.timeEnd('시작:')
    })

// Promise.all은 []안에 있는 걸 동시에 시작하고 모두 이행돼야 값을 사용할수 있다
console.time('이름이 같아야해요');
Promise.all([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd('이름이 같아야해요'); // 시간측정
})