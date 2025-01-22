import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    // 11. type assertion(타입 단언) - 개발자가 타입에 대해 잘 알고 있을 때 사용하고 사용한다면 타입스크립트는 컴파일할 때 타입을 체크하지 않아서 에러가 있어도 잡지 못한다.
    // const [user, setUser] = useState<AuthUser>({} as AuthUser)
    
    const [user, setUser] = useState<AuthUser | null>(null)
    // 초깃값으로 state변수 타입추론하는걸 보완하고자 <>제네릭을 사용하여 타입을 지정한다.
    const handleLogin = () => {
        setUser({
            name:'hardcoding',
            email: 'hardcoding@mail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.email}</div>
            <div>User Email is {user?.email}</div>
            {/* optional chaining 연산자 - user 속성에 액세스하기 전에 user가 null이 아닌지 확인한다*/}

            {/* 
                // 11. 타입 단언 사용할 경우 - null이 아닌게 확실하니깐 ?사용하지 않는다.
                <div>User name is {user.email}</div>
                <div>User Email is {user.email}</div>  
            */}
        </div>
    )
}