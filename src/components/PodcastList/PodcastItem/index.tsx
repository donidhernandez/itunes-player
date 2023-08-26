import { useEffect, useState } from 'react'
import { useAudioPlayer } from 'react-use-audio-player'
import { type Podcast } from '../../../types'
import SoundDetails from '../../AudioPlayer/SoundDetails'
import { usePodcastsContext } from '../../../context/Podcasts'
import PauseIcon from '../../Icons/PauseIcon'
import PlayIcon from '../../Icons/PlayIcon'

interface IPodcastItem {
    podcast: Podcast
}

const PodcastItem = ({ podcast }: IPodcastItem) => {
    const { currentPodcast, updateCurrentPodcast } = usePodcastsContext()
    const [isActive, setIsActive] = useState(false)
    const { playing, load, togglePlayPause } = useAudioPlayer()

    useEffect(() => {
        if (currentPodcast) {
            load(currentPodcast.previewUrl, {
                autoplay: false,
                initialMute: false,
            })
        }
    }, [currentPodcast])

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

    const handlePlay = () => {
        if (!isActive) {
            updateCurrentPodcast(podcast)
            setIsActive(true)
        } else {
            togglePlayPause()
        }
    }

    return (
        <tr className="text-sm bg-transparent border-b border-white border-opacity-5">
            <td>
                <button
                    onClick={handlePlay}
                    className={`h-[30px] w-[30px] flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out ${
                        playing && 'rounded-full bg-indigo-600'
                    }`}
                >
                    {playing ? (
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
                    artistName={podcast.artistName}
                    podcastImage={podcast.artworkUrl60}
                    podcastName={podcast.collectionName}
                    {...soundDetailsStyles}
                />
            </td>
            <td className="px-6 py-4 text-white opacity-30 truncate">
                {podcast.primaryGenreName}
            </td>
            <td className="px-6 py-4 text-white opacity-30">an hour ago</td>
            <td className="px-6 py-4 text-white opacity-30">8:12</td>
        </tr>
    )
}

export default PodcastItem
