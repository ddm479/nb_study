type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    // 구조분해할당(destructuring assignment)으로 props 기본값 할당하기
    const { messageCount = 0 } = props
    return (
        <div>
            <h2>
                {props.isLoggedIn
                    ? `welcome ${props.name} ${messageCount} unread messages`
                    : `welcome Guest`}
            </h2>
        </div>
    )
}