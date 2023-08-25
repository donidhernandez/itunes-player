import { useMemo, useRef, useState } from 'react'
import { PodcastsContext } from './context'
import type { IContextProvider, Podcast } from '../../types'

const PodcastsProvider = ({ children }: IContextProvider) => {
    const [podcasts, setPodcasts] = useState([])
    const [currentPodcast, setCurrentPodcast] = useState<Podcast>(null)
    const audioRef = useRef()

    const updatePodcasts = (podcastList: Podcast[]) => {
        setPodcasts(podcastList)
    }

    const updateCurrentPodcast = (podcast: Podcast) => {
        setCurrentPodcast({ ...podcast })
    }

    const memoedValue = useMemo(() => {
        return {
            audioRef,
            currentPodcast,
            podcasts,
            updatePodcasts,
            updateCurrentPodcast,
        }
    }, [
        podcasts,
        updatePodcasts,
        audioRef,
        currentPodcast,
        updateCurrentPodcast,
    ])

    return (
        <PodcastsContext.Provider value={memoedValue}>
            {children}
        </PodcastsContext.Provider>
    )
}

export default PodcastsProvider
