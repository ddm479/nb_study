import React from "react"
type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
} // 이벤트를 prop으로 전달할 때에도 타입 지정

export const Input = ({value, handleChange}: InputProps) => {
    // 컴포넌트내에서 이벤트 핸들러 정의하는 법
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    } 
    return <input type="text" value={value} onChange={handleInputChange}/>
}