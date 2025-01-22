import { useReducer } from "react";
// state 타입 지정
type CounterState = {
    count: number
}

// action 타입 지정
type CounterAction = {
    type: string
    payload: number
}
const initialState = { count:0 }

// state를 action.type에 따라서 업데이트하는 함수
function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        default:
            return state
    }
}

// 컴포넌트에 props로 state와 dispatch를 전달해야 할 경우 마우스를 state와 dispatch에 올리고 툴팁에 표시된 유형을 사용하면 된다.
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10})}>
                Increment 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10})}>
                Decrement 10
            </button>
        </>
        // dispatch() 안에 action객체를 담아서 보낸다.
    )
}