import React from "react"

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void // 클릭 핸들러 함수와 이벤트 타입 지정, <>를 사용해서 이것이 버튼클릭이라고 알려줄 수도 있다
}
export const Button = (props: ButtonProps) => {
    return <button onClick={event => props.handleClick(event, 1)}>Click</button>
}