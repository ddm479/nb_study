import { useRef, useEffect } from 'react'

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        // null값 체크
        inputRef.current?.focus()
    }, [])

    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}