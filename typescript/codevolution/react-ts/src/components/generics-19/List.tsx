import { ReactNode } from "react"
type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}
// 다양한 타입을 허용하려면 <>제네릭을 사용해서 지정해준다.

// 제약조건걸기 -> string과 number만 허용하려면 <T extends string | number>
// T extend {}" allow you your function or class' method to accept pretty much anything except null and undefined. T can be a primitive though
export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {item as ReactNode}
                        {/* {item as ReactNode} 부분은 19강 유튜브 댓글 참고: https://www.youtube.com/watch?v=xFNk2nfDh4M&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=19 */}
                    </div>
                )
            })}
        </div>
    )
}