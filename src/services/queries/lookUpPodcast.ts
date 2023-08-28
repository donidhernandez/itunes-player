import FetchError from '../errors/FetchError'

const lookUpPodcast = async (id: string) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_SECRET_ITUNES_API_URL}/lookup?entity=podcast&id=${id}`
        )

        const parsedResponse = await response.json()

        return parsedResponse
    } catch (e) {
        throw new FetchError('Failed to fetch the podcast')
    }
}

export default lookUpPodcast
