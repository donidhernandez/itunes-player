import { useEffect, useState } from 'react'
import { useAudioPlayer } from 'react-use-audio-player'
import moment from 'moment'

import { type Podcast } from '../../../types'
import SoundDetails from '../../AudioPlayer/SoundDetails'
import PauseIcon from '../../Icons/PauseIcon'
import PlayIcon from '../../Icons/PlayIcon'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import usePodcastActions from '../../../hooks/store/usePodcastActions'
import { useAppSelector } from '../../../hooks/store/store'
import rssParser from '../../../services/queries/rssParser'

interface IPodcastItem {
    podcast: Podcast
}

const PodcastItem = ({ podcast }: IPodcastItem) => {
    const { podcasts, isPlaying } = useAppSelector((state) => state.podcasts)
    const { newCurrentPodcast, updatePlayAudio } = usePodcastActions()
    const [isActive, setIsActive] = useState(false)
    const { togglePlayPause } = useAudioPlayer()
    const navigate = useNavigate()

    const buttonStyles = {
        height: '30px',
        width: '30px',
        iconDimension: 16,
    }

    const soundDetailsStyles = {
        imageStyles: {
            height: '45px',
            width: '45px',
            borderRadius: '8px',
        },
        containerStyles: {
            minWidth: '100%',
        },
    }

    const getReleasedDate = (date: Date) => {
        return moment(date).startOf('hour').fromNow()
    }

    const getTrackDuration = (time: number) => {
        return moment(time).format('mm:ss')
    }

    const handlePlay = async () => {
        if (!isActive) {
            const feed = await rssParser(podcast.feedUrl)
            const podcastToPreview = feed.items[0].enclosure.url
            const podcastToPlay = {
                ...podcast,
                podcastList: feed,
                podcastToPreview,
            }
            newCurrentPodcast(podcastToPlay)
            setIsActive(true)
        } else {
            togglePlayPause()
        }
    }

    const goToPodcast = (artistName: string) => {
        const foundedPodcast = podcasts.find(
            (podcast: Podcast) => podcast.artistName === artistName
        )

        if (foundedPodcast) {
            newCurrentPodcast(foundedPodcast)
            navigate(`/podcast/${podcast.collectionId}`)
        } else {
            return toast.error(
                'There is no podcast available with this artist name'
            )
        }
    }

    return (
        <tr className="text-sm bg-transparent border-b border-white border-opacity-5">
            <td>
                <button
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onClick={handlePlay}
                    className={`h-[30px] w-[30px] flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out ${
                        isPlaying && isActive && 'rounded-full bg-indigo-600'
                    }`}
                >
                    {isPlaying && isActive ? (
                        <PauseIcon
                            iconDimension={buttonStyles?.iconDimension}
                        />
                    ) : (
                        <PlayIcon />
                    )}
                </button>
            </td>
            <td className="px-6 py-4">
                <SoundDetails
                    goToPodcast={goToPodcast}
                    artistName={podcast.artistName}
                    podcastImage={podcast.artworkUrl60}
                    podcastName={podcast.collectionName}
                    {...soundDetailsStyles}
                />
            </td>
            <td className="px-6 py-4 text-white opacity-30 truncate">
                {podcast.primaryGenreName}
            </td>
            <td className="px-6 py-4 text-white opacity-30">
                {getReleasedDate(podcast.releaseDate)}
            </td>
            <td className="px-6 py-4 text-white opacity-30">
                {getTrackDuration(podcast.trackTimeMillis)}
            </td>
        </tr>
    )
}

export default PodcastItem
