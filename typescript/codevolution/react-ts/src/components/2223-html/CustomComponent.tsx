import React from "react";
import { Greet } from "../5-advanced_props/Greet";
// 재사용하려고 하는 Componenet prop 타입에 접근할수 없을 때(예를 들면 라이브러리에서 가지고 오려는 경우) 그 Componenet prop 타입 추출하는 법

// React.ComponentProps<typeof Greet> 을 사용해서 Greet 컴포넌트의 prop type들을 추출해서 또다른 (여기서는 CustomComponent) 컴포넌트에서 사용할 수 있다
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>
            {props.name}
        </div>
    )
}