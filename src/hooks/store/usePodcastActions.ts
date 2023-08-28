import {
    getNextPodcast as getNxtPodcast,
    getPreviousPodcast,
    shuffleTracks,
    updateCurrentPodcast,
    updateIsPlaying,
    updatePodcasts,
    updateSortBy,
} from '../../store/slices/podcasts/slice'
import { type Podcast } from '../../types'
import { type Options } from '../../utils/enums'
import { useAppDispatch } from './store'

const usePodcastActions = () => {
    const dispatch = useAppDispatch()

    const updatePodcastsList = (podcasts: Podcast[]) => {
        dispatch(updatePodcasts(podcasts))
    }

    const updatePlayAudio = (isPlaying: boolean) => {
        dispatch(updateIsPlaying(isPlaying))
    }

    const newCurrentPodcast = (podcast: Podcast) => {
        dispatch(updateCurrentPodcast(podcast))
    }

    const shufflePodcastList = () => {
        dispatch(shuffleTracks(null))
    }

    const getPrevPodcast = () => {
        dispatch(getPreviousPodcast(null))
    }

    const getNextPodcast = () => {
        dispatch(getNxtPodcast(null))
    }

    const updateSortByOption = (option: Options) => {
        dispatch(updateSortBy(option))
    }

    return {
        updatePodcastsList,
        newCurrentPodcast,
        shufflePodcastList,
        getPrevPodcast,
        getNextPodcast,
        updatePlayAudio,
        updateSortByOption,
    }
}

export default usePodcastActions
