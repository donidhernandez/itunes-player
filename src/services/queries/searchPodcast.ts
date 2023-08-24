import FetchError from '../errors/FetchError'

const searchPodcasts = async (term: string) => {
    try {
        console.log(term)
        const response = await fetch(
            `${process.env.REACT_APP_SECRET_ITUNES_API_URL}/search?term=${term}&entity=podcast`
        )

        const parsedResponse = await response.json()

        return parsedResponse
    } catch (e) {
        throw new FetchError('Failed to fetch the podcasts')
    }
}

export default searchPodcasts
