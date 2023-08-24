import { useEffect, useState } from 'react'
import searchPodcasts from '../queries/searchPodcast'

interface ISearchPodcastHoook {
    term: string
}

const useSearchPodcasts = ({ term }: ISearchPodcastHoook) => {
    const [podcasts, setPodcasts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const getPodcasts = async () => {
        setLoading(true)
        const response = await searchPodcasts(term)
        setPodcasts(response.results)
        setLoading(false)
    }

    useEffect(() => {
        getPodcasts().catch((error) => {
            setError(error)
        })
    }, [])

    return { podcasts, error, loading }
}

export default useSearchPodcasts
