import { createContext, useState } from "react"

export type AuthUser = {
    name: string
    email: string
}

// 컨텍스트 객체 타입 지정
type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>> // 마우스 올리면 다 나옴
}

type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextType | null>(null) // 초깃값은 null이지만 나중에는 UserContextType 유형이 될 수 있다는걸 의미, (null) -> ({} as UserContextType) 대체가능

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}