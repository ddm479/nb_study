type HeadingProps = {
    children: string
}

// 문자열을 Heading 컴포넌트의 children으로 사용할 때
export const Heading = (props: HeadingProps) => {
    return <h2>{props.children}</h2>
}

