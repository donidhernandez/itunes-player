import { useEffect, useState } from 'react'

const useDebounce = (value?: string, timeout?: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, timeout)

        return () => {
            clearTimeout(handler)
        }
    }, [value, timeout])

    return debouncedValue
}

export default useDebounce
