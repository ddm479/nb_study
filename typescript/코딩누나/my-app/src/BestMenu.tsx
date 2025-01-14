import React from 'react'
import { Menu } from './model/restaurant'
// 1. interfact의 상속방식
// interface OwnProps extends Menu{
//     showBestMenuName(name:string):string
// }
// 2. type의 상속방식, 위와 아래가 같다.
// type OwnProps = Menu & {
//     showBestMenuName(name:string):string
// }

// 2. interface 방식
// 만약 price를 빼서 사용하고 싶다면 Omit을 사용한다
interface OwnProps extends Omit<Menu, 'price'>{
    showBestMenuName(name:string):string
}
const BestMenu: React.FC<OwnProps> = ({name, category, showBestMenuName}) => {
    return (
        <div>{name}</div>
    )
}

export default BestMenu
