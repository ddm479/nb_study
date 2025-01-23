import { useState } from "react"

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // 타입스크립트는 useState의 초깃값이 있다면 초깃값을 기준으로 state변수 타입을 추론한다
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}