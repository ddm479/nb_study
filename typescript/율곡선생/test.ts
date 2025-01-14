// 함수를 인수로 받을 때
function printName(firstName: string, formatter: (name: string) => string) {
    console.log(formatter(firstName))
}

// 이름 포맷 함수는 따로 정의
function formatName(name: string): string {
    return `${name} 씨`
}

printName('홍길동', formatName)

// as 키워드는 Type Assertion(타입 단언)으로, 컴파일 단계에서 타입스크립트가 잘못 혹은 보수적으로 타입을 추론하는 경우 개발자가 수동으로 컴파일러에게 특정 변수에 대한 타입 힌트룰 주는 것이다.


// is 키워드는 Type Guard(타입 가드)로 as가 특정 변수 하나에 국한된 것이라면 is 키워드는 한정된 범위 내의 모든 변수에 대해서 일괄적으로 적용할 수 있는 키워드이다.