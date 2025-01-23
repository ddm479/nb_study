import { UserContextProvider } from "../components/context-14~15/UserContext"
import { User } from "../components/context-14~15/User"

function App15() {
    return <div>
        <UserContextProvider>
            <User />
        </UserContextProvider>
    </div>
}

export default App15
