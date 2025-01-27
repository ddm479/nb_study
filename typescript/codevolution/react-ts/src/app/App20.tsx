import { RandomNumber } from "../components/restriction/RandomNumber";

function App20() {
    return (
        <div>
            <RandomNumber value={10} isPositive />
            {/* <RandomNumber value={10} isPositive isNegative isZero/> -> 의도되지 않은 상황 -> 각 타입을 지정하고 never를 사용해 속성들을 제한시킨다 */}
        </div>
        // isPositive의 값이 true로 자동추론된다.
    )
}