import { useMemo, useRef, useState } from 'react'
import { PodcastsContext } from './context'
import type { IContextProvider, Podcast } from '../../types'
import { shuffleArray } from '../../utils/shuffleArray'

const PodcastsProvider = ({ children }: IContextProvider) => {
    const [podcasts, setPodcasts] = useState([])
    const [currentPodcast, setCurrentPodcast] = useState<Podcast>()
    const audioRef = useRef()

    const updatePodcasts = (podcastList: Podcast[]) => {
        localStorage.setItem('podcasts', JSON.stringify(podcastList))
        setPodcasts(podcastList)
    }

    const updateCurrentPodcast = (podcast: Podcast) => {
        localStorage.setItem('current_podcast', JSON.stringify(podcast))
        setCurrentPodcast({ ...podcast })
    }

    const getPodcastByName = (artistName: string) => {
        return podcasts.find(
            (podcast: Podcast) => podcast.artistName === artistName
        )
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
            getPodcastByName,
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
