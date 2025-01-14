import { useState } from 'react';

import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';
function App() {

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />

      {/* <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>  */
      /* 타입스크립트를 사용해서 컴포넌트에 props를 빼먹는 실수를 방지할 수 있다.*/
      }
      
    </TodosContextProvider> 
  );
}

export default App;
