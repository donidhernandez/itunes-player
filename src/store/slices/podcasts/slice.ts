import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Podcast } from '../../../types'
import { shuffleArray } from '../../../utils/shuffleArray'
import { Options } from '../../../utils/enums'

const DEFAULT_STATE = {
    podcasts: [],
    orderedPodcasts: [],
    currentPodcast: null,
    isPlaying: false,
    sortBy: Options.None,
}

const initialState = (() => {
    const persistedState = localStorage.getItem('__podcasts_state__')
    return persistedState ? JSON.parse(persistedState) : DEFAULT_STATE
})()

export const podcastSlice = createSlice({
    name: 'podcasts',
    initialState,
    reducers: {
        updateIsPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload
        },
        updateSortBy: (state, action: PayloadAction<Options>) => {
            state.sortBy = action.payload
            let orderedPodcasts = state.podcasts
            switch (action.payload) {
                case Options.None:
                    orderedPodcasts = state.podcasts
                    break
                case Options.Name:
                    orderedPodcasts = state.podcasts.toSorted(
                        (a: Podcast, b: Podcast) =>
                            a.collectionName.localeCompare(b.collectionName)
                    )
                    break
                case Options.Date:
                    orderedPodcasts = state.podcasts.toSorted(
                        (a: Podcast, b: Podcast) =>
                            new Date(b.releaseDate).getTime() -
                            new Date(a.releaseDate).getTime()
                    )
                    break
                case Options.Description:
                    orderedPodcasts = state.podcasts.toSorted(
                        (a: Podcast, b: Podcast) =>
                            a.primaryGenreName.localeCompare(b.primaryGenreName)
                    )
            }
            state.orderedPodcasts = orderedPodcasts
        },
        updatePodcasts: (state, action: PayloadAction<Podcast[]>) => {
            state.podcasts = [...action.payload]
            state.orderedPodcasts = [...action.payload]
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
    updateIsPlaying,
    updateSortBy,
} = podcastSlice.actions
