import { type ReactNode, useMemo, useState } from 'react'
import { PodcastsContext } from './context'
import { type Podcast } from '../../types'

interface IPodcastsProvider {
    children: ReactNode
}

const PodcastsProvider = ({ children }: IPodcastsProvider) => {
    const [podcasts, setPodcasts] = useState([])

    const updatePodcasts = (podcastList: Podcast[]) => {
        setPodcasts(podcastList)
    }

    const memoedValue = useMemo(() => {
        return {
            podcasts,
            updatePodcasts,
        }
    }, [podcasts, updatePodcasts])

    return (
        <PodcastsContext.Provider value={memoedValue}>
            {children}
        </PodcastsContext.Provider>
    )
}

export default PodcastsProvider
