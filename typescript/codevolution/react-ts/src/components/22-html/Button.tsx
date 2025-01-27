import React from 'react'

type ButtonProps = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

// 18-auth의 Private.tsx에서 React.ComponentType<> 와 나중에 비교하기

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
    return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}