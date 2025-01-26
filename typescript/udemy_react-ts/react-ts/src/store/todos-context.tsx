import React, { useState } from 'react'
import Todo from '../models/todo';

// 타입 별칭(type alias), 타입 정의 부분을 재사용할 수 있다.
type TodosContextObj = {
    // 컨텍스트 객체 속성들의 타입만 정의한다.
    items: Todo[];
    addTodo: (text: string) => void; // 반환값이 없는 함수 타입
    removeTodo: (id: string) => void;
}

// 컨텍스트 객체 속성들의 타입들을 정의하기 위해서 제네릭<>을 사용한다. -> TodosContextObj에 정의했다
export const TodosContext = React.createContext<TodosContextObj>({
    // 아래는 컨텍스트 객체 정의
    items: [],
    addTodo: () => { }, // 함수 정의
    removeTodo: (id: string) => { }
});

// React.FC를 사용을 지양한다.
// 컨텍스트를 제공하는 컴포넌트 -> 컨텍스트의 상태(state)를 관리한다.
const TodosContextProvider = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        // console.log("...todos ", ...todos)
        // console.log("[...todos, newTodo] ", [...todos, newTodo])
        setTodos([...todos, newTodo])
        // setTodos((prev) => [...prev, newTodo]);
    }

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId)
        }
        )
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }
    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
            {/* React.FC를 사용하면 props에 기본적으로 children이 들어있어서 props에 정의해줄 필요가 없다  -> 근데 또 아닌듯? 이거 나중에 보기: https://2mojurmoyang.tistory.com/243*/}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider;