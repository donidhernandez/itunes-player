import FetchError from '../errors/FetchError'

export const rssParser = async (url: string) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_SECRET_RSS_PARSER_API_URL}/api/?url=${url}`
        )
        const parsedResponse = await response.json()
        return parsedResponse
    } catch (e) {
        throw new FetchError('Failed to fetch the rss from the podcast')
    }
}

export default rssParser
