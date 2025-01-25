export type ProfileProps = {
    name: string
}

export const Profile = ({ name }: ProfileProps) => {
    return <div>Profile Name is {name}</div>
}