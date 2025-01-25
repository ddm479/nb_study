import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
    isLoggedIn: boolean
    // 속성쓸 때에는 소문자로만 쓰는게 좋다
    component: React.ComponentType<ProfileProps> // Component의 props 타입은 ProfileProps
    // Component: React.FC도 가능한듯?
    // Prop으로 리액트 컴포넌트를 전달하는 방법에 관한 블로그: https://softwareshorts.com/how-to-pass-a-react-component-as-a-prop-in-typescript/
}
export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
    if(isLoggedIn){
        return <Component name="haha"/>
    } else {
        return <Login />
    }
}