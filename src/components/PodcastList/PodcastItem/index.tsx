import { useEffect, useState } from 'react'
import { type Podcast } from '../../../types'
import SoundDetails from '../../AudioPlayer/SoundDetails'
import PlayButton from '../../PlayButton'
import { usePodcastsContext } from '../../../context/Podcasts'

interface IPodcastItem {
    podcast: Podcast
}

const PodcastItem = ({ podcast }: IPodcastItem) => {
    const { currentPodcast, updateCurrentPodcast } = usePodcastsContext()
    const [isActivePodcast, setIsActivePodcast] = useState(false)

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

    const handleActivePodcast = (podcast: Podcast) => {
        updateCurrentPodcast(podcast)
        setIsActivePodcast(true)
    }

    return (
        <tr className="text-sm bg-transparent border-b border-white border-opacity-5">
            <td>
                <PlayButton
                    podcast={podcast}
                    isActive={isActivePodcast}
                    handleActivePodcast={handleActivePodcast}
                    buttonStyles={buttonStyles}
                />
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
