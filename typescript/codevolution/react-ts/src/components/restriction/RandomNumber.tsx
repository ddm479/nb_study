type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never // never를 사용해서 PositiveNumber에서 isNegative와 isZero를 허용하지 않게한다.
    isZero?: never
}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}


type Zero = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero
export const RandomNumber = ({ value, isPositive, isNegative, isZero }: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
            {isZero && 'zero'}
        </div>
    )
}

// 비실용적인 예시, 그냥 props에 전달하는것을 제한하는 방법만 익히는 정도