export const formatTime = (seconds: number) => {
    if (seconds === Infinity) {
        return '--'
    }
    const floored = Math.floor(seconds)
    let from = 14
    let length = 5

    if (floored >= 3600) {
        from = 11
        length = 8
    }

    return new Date(floored * 1000).toISOString().substr(from, length)
}
