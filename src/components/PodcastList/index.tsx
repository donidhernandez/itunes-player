import { usePodcastsContext } from '../../context/Podcasts'
import { type Podcast } from '../../types'
import SoundDetails from '../AudioPlayer/SoundDetails'
import ClockIcon from '../Icons/ClockIcon'
import PlayButton from '../PlayButton'

const PodcastList = () => {
    const { podcasts } = usePodcastsContext()

    const buttonStyles = {
        playButton: {
            height: '30px',
            width: '30px',
        },
        pauseButton: {
            height: '30px',
            width: '30px',
            iconDimension: 16,
        },
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

    return (
        podcasts &&
        podcasts.length > 0 && (
            <div className="relative overflow-x-auto mt-10">
                <table className="w-full text-left">
                    <thead className="bg-transparent text-sm font-semibold text-white opacity-30 border-b border-white border-opacity-5">
                        <tr>
                            <th scope="col" className="pr-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Released
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <ClockIcon />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {podcasts.map((podcast: Podcast) => (
                            <tr
                                key={podcast.trackId}
                                className="text-sm bg-transparent border-b border-white border-opacity-5"
                            >
                                <td>
                                    <PlayButton {...buttonStyles} />
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
                                <td className="px-6 py-4 text-white opacity-30">
                                    an hour ago
                                </td>
                                <td className="px-6 py-4 text-white opacity-30">
                                    8:12
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    )
}

export default PodcastList
