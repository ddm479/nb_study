// new Promise가 생성자가 반환하는 Promise 객체는 state와 result를 property로 갖습니다.
// 1. state는 초기에 pending(대기), result는 undefined
// 2-1. resolve()가 호출되면 즉, 성공하면 state는 fulfilled(이행됨)가 되고 result는 resolve함수로 전달된 값이된다
// 2-2. reject()가 호출되면 즉, 실패하면 state는 rejected(거부됨)가 되고 result는 reject함수로 전달된 error가 된다

// js에서 비동기 작업을할 때 보통 콜백함수를 사용하고 콜백 지옥을 예방하려고 Promise가 ES6에 도입됐다

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("성공")
        reject("실패")
    }, 1000)
})

console.log("시작")
pr.then((result) => {
    console.log(result) // 성공(resolve)한 경우 실행
})
    .catch((err) => {
        console.log("catch구문 실행", err); // 실패(reject)한 경우 실행된다.
    })
    .finally(() => {
        console.log("끝");
    }); // finally()는 항상 실행된다


