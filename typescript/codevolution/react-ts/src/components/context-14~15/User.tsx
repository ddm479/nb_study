import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        // null 값 체크
        if(userContext) {
            userContext.setUser({
                name: 'haha',
                email: 'haha@mail.com'
            })
        }
    }
    const handleLogout = () => {
        // null값 체크
        if(userContext){
            userContext.setUser(null)
        }
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext?.user?.name}</div>
            <div>User email is {userContext?.user?.email}</div>
            {/* null값 체크 */}
        </div>
    )
}