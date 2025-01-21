type ContainerProps = {
    styles: React.CSSProperties // css 스타일 유형
}

export const Container = (props: ContainerProps) => {
    return (
        <div style={props.styles}>
            CSS style props 로 전달하기
        </div>
    )
}