import { CustomButton } from "../components/22-html/Button";

function App22() {
    return (
        <>
            <CustomButton variant="primary" onClick={() => { console.log('...rest사용으로 onClick 이벤트 함수 prop에 전달했다') }}>
                CustomButton의 children부분입니다
            </CustomButton>
        </>
    )
}