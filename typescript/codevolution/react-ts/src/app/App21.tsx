import { Toast } from "../components/templateliterals-21/Toast";

function App21() {
    return (
        <div>
            <Toast position='center' />
        </div>
    )
}

// Exclude<A, 'center-center'>를 사용해서 원하지 않는 경우(center-center입력 시) 오류를 발생시켜준다.