export type Name = {
    first: string
    last: string
}

export type PersonProps = {
    name: Name
}

// 타입을 별도의 파일에 보관해서 사용할 수 있다 -> 한 곳에서 있어서 유지보수하기 편리하고 재사용성에 용이하다