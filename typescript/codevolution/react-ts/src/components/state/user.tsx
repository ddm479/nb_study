import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
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
            {/* optional chaining 연산자 */}
        </div>
    )
}