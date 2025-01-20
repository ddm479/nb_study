// 리액트 컴포넌트 type지정
// 가장 안전한 방법인 React.ReactNode
type OscarProps = {
    children: React.ReactNode
}

// 리액트 컴포넌트를 Oscar 컴포넌트의 children props로 전달하고자 할 때
export const Oscar = (props: OscarProps) => {
    return <div>{props.children}</div>
}
