import React from "react";

type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?: E // 해당 html요소로 렌더링하기 위한 prop
}

// html요소 props(예: label에서 htmlFor)를 처리하기 위한 코드들
type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

// 직장에서 쓸 정도 아니면 그냥 넘어가도 될 듯 넘어가자
// 기본 요소는 div태그로 설정
export const Text = <E extends React.ElementType = 'div'>({ size, color, children, as }: TextProps<E>) => {
    const Component = as || 'div'
    return (
        <Component className={`class-with-${size}-${color}`}>'{children}</Component>
    )
}