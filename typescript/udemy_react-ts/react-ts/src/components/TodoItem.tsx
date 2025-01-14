import React from 'react'; // 생략가능
import classes from './TodoItem.module.css'

// 함수의 인수를 여기서 사용하지 않으면 인수의 타입을 정의하는 것은 선택사항
const TodoItem: React.FC<{text: string; onRemoveTodo: () => void}> = (props) => {
    return (
        <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
    )
}

export default TodoItem;