import { Private } from "../components/18-auth/Private";
import { Profile } from "../components/18-auth/Profile";

function App18() {
    return (
        <div>
            <Private isLoggedIn={true} component={Profile} />
        </div>
    )
}

export default App18