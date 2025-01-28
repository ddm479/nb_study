// 상황: Position prop이 아래 중 하나여야 할 때
// left-center | left-top | left-bottom | center | center-top | center-bottom| ... | right-top | right-bottom


type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

// 해결: 템플릿 리터럴 방식(``)으로 수평위치와 수직 위치를 결합할 수 있다.
type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
} // Exclude<A,B> -> position의 type은 A타입에서 B타입을 제외한 나머지

export const Toast = ({ position }: ToastProps) => {
    return <div>Toast Nofification Position - {position}</div>
}