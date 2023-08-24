class FetchError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'FetchError'
    }
}

export default FetchError
