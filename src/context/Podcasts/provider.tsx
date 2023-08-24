import { type ReactNode, useMemo, useState } from 'react'
import { PodcastsContext } from './context'
import { type Podcast } from '../../types'

interface IPodcastsProvider {
    children: ReactNode
}

const PodcastsProvider = ({ children }: IPodcastsProvider) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [podcasts, setPodCasts] = useState([])

    const updateSearchTerm = (value: string) => {
        setSearchTerm(value)
    }

    const updatePodcasts = (podcastList: Podcast[]) => {
        setPodCasts(podcastList)
    }

    const memoedValue = useMemo(() => {
        return {
            searchTerm,
            podcasts,
            updateSearchTerm,
            updatePodcasts,
        }
    }, [searchTerm, podcasts])

    return (
        <PodcastsContext.Provider value={memoedValue}>
            {children}
        </PodcastsContext.Provider>
    )
}

export default PodcastsProvider
