import { useMemo, useRef, useState } from 'react'
import { PodcastsContext } from './context'
import type { IContextProvider, Podcast } from '../../types'
import { shuffleArray } from '../../utils/shuffleArray'

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
        const shuffledTracks = shuffleArray([...podcasts])
        const newCurrentPodcast = shuffledTracks[0]
        setPodcasts(shuffledTracks)
        updateCurrentPodcast(newCurrentPodcast)
    }

    const getPreviousPodcast = () => {
        const findCurrentPodcast = podcasts.find(
            (podcast) => podcast.trackId === currentPodcast.trackId
        )

        if (findCurrentPodcast) {
            const currentLength = podcasts.length
            const currentIndex = podcasts.indexOf(findCurrentPodcast)

            const previousPodcast =
                podcasts[
                    currentIndex === 0 ? currentLength - 1 : currentIndex - 1
                ]
            updateCurrentPodcast(previousPodcast)
        }
    }

    const getNextPodcast = () => {
        const findCurrentPodcast = podcasts.find(
            (podcast) => podcast.trackId === currentPodcast.trackId
        )

        if (findCurrentPodcast) {
            const currentLength = podcasts.length
            const currentIndex = podcasts.indexOf(findCurrentPodcast)

            const nextPodcast =
                podcasts[currentIndex === currentLength ? 0 : currentIndex + 1]
            updateCurrentPodcast(nextPodcast)
        }
    }

    const memoedValue = useMemo(() => {
        return {
            audioRef,
            currentPodcast,
            podcasts,
            updatePodcasts,
            updateCurrentPodcast,
            shuffleTracks,
            getPreviousPodcast,
            getNextPodcast,
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
