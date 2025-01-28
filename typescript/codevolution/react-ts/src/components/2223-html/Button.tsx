import React from 'react'

type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'> // 18-auth의 Private.tsx에서 React.ComponentType<> 와 React.ComponentProps<'button'>(html 버튼 props) 나중에 비교하기
// Omit<A,B> -> A타입에서 B타입을 제외한다. 여기서는 html 버튼 요소 유형에서 자식유형을 제외함


export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
    return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}