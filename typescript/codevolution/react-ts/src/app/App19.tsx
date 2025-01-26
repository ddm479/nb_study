import { List } from "../components/generics-19/List";

function App19() {
    return (
        <div>
            <List
                items={['messy', 'ronaldo', 'neymar']}
                onClick={(item) => console.log(item)}
            />
            <List
                items={[1, 2, 3]}
                onClick={(item) => console.log(item)}
            />
            <List
                items={[
                    {
                        name: 'messy',
                        position: 'wing'
                    },
                    {
                        name: 'ronaldo',
                        position: 'wing'
                    },
                    {
                        name: 'neymar',
                        position: 'wing'
                    },
                ]}
                onClick={(item) => console.log(item)}
            />
        </div>
    )
}

export default App19