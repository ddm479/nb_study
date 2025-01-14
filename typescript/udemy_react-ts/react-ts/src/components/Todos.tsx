import React, {useContext} from 'react';
import TodoItem from './TodoItem';
import Todo from '../models/todo';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';

// 1-1. props로 전달하면서 TodoItem 컴포넌트 사용하기
// 함수형 컴포넌트 타입스크립트화 -> 컴포넌트명: React.FC<{props 정의부분}>
// Todos 컴포넌트는 props객체에 Todo 클래스 배열타입을 갖는 items라는 속성을 갖는다는 의미
// const Todos: React.FC<{items: Todo[]; onRemoveTodo: (id: string) => void}> = (props) => {
    
//     return (
//         <ul className={classes.todos}>
//             {props.items.map((item) => (
//                 <TodoItem 
//                     key={item.id} 
//                     text={item.text} 
//                     onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
//                 />
//             ))}
//         </ul>
//     )
// }

// 2. context로 전달하기
const Todos: React.FC= () => {
    const todoCtx = useContext(TodosContext);
    
    const test = (event: MouseEvent) => {}
    return (
        <>
        <ul className={classes.todos}>
            {todoCtx.items.map((item) => (
                <TodoItem 
                    key={item.id} 
                    text={item.text} 
                    onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
                />
            ))}
        </ul>
        <button onClick={test}>hi???</button>
        </>
    )
}

export default Todos;
/* 타입스크립트를 사용해서 컴포넌트에 props를 빼먹는 실수를 방지할 수 있다.*/

// 1-2.
// const Todos: React.FC<{items: Todo[]}> = (props) => {
//     return (
//         <ul>
//             {props.items.map((item) => (
//                 <li key={item.id}>{item.text}</li>
//             ))}
//         </ul>
//     )
// }

// export default Todos;