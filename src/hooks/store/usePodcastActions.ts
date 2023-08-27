import {
    getNextPodcast as getNxtPodcast,
    getPreviousPodcast,
    shuffleTracks,
    updateCurrentPodcast,
    updatePodcasts,
} from '../../store/slices/podcasts/slice'
import { type Podcast } from '../../types'
import { useAppDispatch } from './store'

const usePodcastActions = () => {
    const dispatch = useAppDispatch()

    const updatePodcastsList = (podcasts: Podcast[]) => {
        dispatch(updatePodcasts(podcasts))
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

    return {
        updatePodcastsList,
        newCurrentPodcast,
        shufflePodcastList,
        getPrevPodcast,
        getNextPodcast,
    }
}

export default usePodcastActions
