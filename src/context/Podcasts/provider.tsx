import { useMemo, useRef, useState } from 'react'
import { PodcastsContext } from './context'
import type { IContextProvider, Podcast } from '../../types'
import { shuffle } from '../../utils/shuffleArray'

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

    const shuffleTracks = () => {
        const shuffledTracks = shuffle([...podcasts])
        const newCurrentPodcast = shuffledTracks[0]
        setPodcasts(shuffledTracks)
        updateCurrentPodcast(newCurrentPodcast)
    }

    const memoedValue = useMemo(() => {
        return {
            audioRef,
            currentPodcast,
            podcasts,
            updatePodcasts,
            updateCurrentPodcast,
            shuffleTracks,
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
