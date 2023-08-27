import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Podcast } from '../../../types'
import { shuffleArray } from '../../../utils/shuffleArray'

const DEFAULT_STATE = {
    podcasts: [],
    currentPodcast: null,
}

const initialState = (() => {
    const persistedState = localStorage.getItem('__podcasts_state__')
    return persistedState ? JSON.parse(persistedState) : DEFAULT_STATE
})()

export const podcastSlice = createSlice({
    name: 'podcasts',
    initialState,
    reducers: {
        updatePodcasts: (state, action: PayloadAction<Podcast[]>) => {
            state.podcasts = [...action.payload]
        },
        updateCurrentPodcast: (state, action: PayloadAction<Podcast>) => {
            state.currentPodcast = action.payload
        },
        shuffleTracks: (state, _) => {
            const shuffledTracks = shuffleArray([...state.podcasts])
            const newCurrentPodcast = shuffledTracks[0]
            state.podcasts = [...shuffledTracks]
            updateCurrentPodcast(newCurrentPodcast)
        },
        getPreviousPodcast: (state, _) => {
            const findCurrentPodcast = state.podcasts.find(
                (podcast: Podcast) =>
                    podcast.trackId === state.currentPodcast.trackId
            )

            if (findCurrentPodcast) {
                const currentLength = state.podcasts.length
                const currentIndex = state.podcasts.indexOf(findCurrentPodcast)

                const previousPodcast =
                    state.podcasts[
                        currentIndex === 0
                            ? currentLength - 1
                            : currentIndex - 1
                    ]
                updateCurrentPodcast(previousPodcast)
            }
        },
        getNextPodcast: (state, _) => {
            const findCurrentPodcast = state.podcasts.find(
                (podcast) => podcast.trackId === state.currentPodcast.trackId
            )

            if (findCurrentPodcast) {
                const currentLength = state.podcasts.length
                const currentIndex = state.podcasts.indexOf(findCurrentPodcast)

                const nextPodcast =
                    state.podcasts[
                        currentIndex === currentLength ? 0 : currentIndex + 1
                    ]
                updateCurrentPodcast(nextPodcast)
            }
        },
    },
})

export default podcastSlice.reducer

export const {
    updatePodcasts,
    updateCurrentPodcast,
    getPreviousPodcast,
    getNextPodcast,
    shuffleTracks,
} = podcastSlice.actions
