// async를 붙이면 항상 Promise를 반환한다.

// async function getName(){
//     // return Promise.resolve("Tom") // Tom
//     throw new Error("err");
// }

// getName.catch((err)=>{
//     console.log(err);
// })

function getName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name)
        }, 1000)
    })
}

// await는 async함수 내부에서만 사용가능하다
async function showName() {
    const result = await getName("mike") // await Promise 값이 들어올때까지 기다린다
    console.log(result)
}

// 16-2_프로미스체이닝.js async 방식으로 변환 ////////////////////////
const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    })
}

const f2 = (message) => {
    console.log(message)
    return new Promise((res, rej) => {
        setTimeout(() => {
            // res("2번 주문 완료");
            rej(new Error("2번 주문 실패"));
        }, 3000);
    })
}

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    })
}

console.log("시작")
async function order() {
    try {
        const res1 = await f1();
        const res2 = await f2(res1);
        const res3 = await f3(res2);
        console.log(res3)
    } catch(error) {
        console.log("에러", error)
    } // try catch 구문으로 error처리한다
    
    console.log("end")
}
order();