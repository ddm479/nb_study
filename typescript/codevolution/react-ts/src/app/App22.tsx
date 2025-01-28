import { CustomButton } from "../components/22-html/Button";

function App22() {
    return (
        <>
            <CustomButton variant="primary" onClick={() => { console.log('...rest사용으로 onClick 이벤트 함수 prop에 전달했다') }}>
                CustomButton의 children부분입니다
                {/* children 유형을 문자열로만 제한하기 위해서 
                type ButtonProps = {
                    variant: 'primary' | 'secondary'
                    children: string
                } & Omit<React.ComponentProps<'button'>, 'children'> 사용  */}
            </CustomButton>
        </>
    )
}