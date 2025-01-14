import React from 'react'
import { Address, Restaurant } from './model/restaurant'

// 2. interface 방식
interface OwnProps {
    info: Restaurant,
    changeAddress(address:Address):void // 함수 매개변수 자료형은 Address, 리턴값의 자료형은 void
}

const Store:React.FC<OwnProps> = ({info}) => {
    return (
        <div>{info.name}</div>
    )
}

export default Store