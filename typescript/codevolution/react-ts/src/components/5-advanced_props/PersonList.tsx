type PersonListProps = {
    names: {
        first: string
        last: string
    }[] // 객체 배열 타입지정
}

export const PersonList = (props: PersonListProps) =>{
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h2 key={name.first}>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}