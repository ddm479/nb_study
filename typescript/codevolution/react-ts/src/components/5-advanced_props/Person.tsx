import { PersonProps } from "./8-Person.types"

export const Person = (props:PersonProps) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}