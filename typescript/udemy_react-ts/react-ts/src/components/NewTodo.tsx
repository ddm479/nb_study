import { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css'

// 1. props로 전달하는 방법
// props에 타입(함수의 형태) 정의하기
// const NewTodo: React.FC<{onAddTodo: (text: string)=> void}> = (props) => {
//     const todoTextInputRef = useRef<HTMLInputElement>(null); 

//     const submitHandler = (event: React.FormEvent)=>{
//         event.preventDefault();
//         const enteredText = todoTextInputRef.current!.value; 
//         
//         if(enteredText?.trim().length === 0){
//             // 공백이거나 띄어쓰기만 입력된 경우 오류
//             return;
//         }

//         props.onAddTodo(enteredText);
//     }
//     return (
//         <form onSubmit={submitHandler} className={classes.form}>
//             <label htmlFor="text">Todo text</label>
//             <input type="text" id="text" ref={todoTextInputRef} />
//             <button>Add Todo</button>
//         </form>
//     );
// };

// 2. context로 전달하는 방법
const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext)
    const todoTextInputRef = useRef<HTMLInputElement>(null); // 레퍼런스 생성, 레퍼런스에 다른요소가 자동으로 할당될 수 있어서 null로 초기화한다
    // input 요소의 타입은 HTMLInputElement

    // React.mouseEvent는 리액트 패키지가 제공하는 타입이며, onClick 이벤트 리스너를 등록하면 받게된다.
    // React.FormEvent는 폼 제출 이벤트(onSubmit)를 수신하면 받는다.
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value; // 제출해서 submitHandler가 호출되는 시점이 todoTextInputRef가 요소와 연결된 다음이라는 걸 알기 때문에 current!를 사용했다.
        // ?는 레퍼런스에 아직 값이 설정되지 않았을 수도 있기 때문에 타입스크립트에게 일단 값(value)에 접근해보고 접근이 가능하다면 그때 입력된 값을 enteredText 저장하라고 알리는 것이다. 만약 연결되지 않은 상태라면 초기값으로 설정한 값이 저장된다. -> optional chaining관련

        // 레퍼런스와 요소가 연결되었다는 걸 알고 있다면 current!를 사용한다. !는 이 값이 null이 될 수 있다는 건 알지만 이 시점에는 절대 null이 아니고 확실히 연결이 되었다라는 것을 의미한다. -> 섹션 30 564강

        if (enteredText?.trim().length === 0) {
            // 공백이거나 띄어쓰기만 입력된 경우 오류
            return;
        }

        todosCtx.addTodo(enteredText);
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    );
};
export default NewTodo;