import { usePodcastsContext } from '../../context/Podcasts'
import PlayerControls from './PlayerControls'
import SoundDetails from './SoundDetails'
import TrackDurationControl from './TrackDurationControl'
import VolumeControl from './VolumeControl'

const AudioPlayer = () => {
    const { currentPodcast } = usePodcastsContext()

    const soundDetailsStyles = {
        imageStyles: {
            height: '110px',
            width: '110px',
        },
    }

    return (
        <section className="flex items-center justify-around w-full sticky bottom-0 bg-slate-700">
            <SoundDetails
                artistName={currentPodcast.artistName}
                podcastImage={currentPodcast.artworkUrl100}
                podcastName={currentPodcast.collectionName}
                {...soundDetailsStyles}
            />
            <PlayerControls />
            <TrackDurationControl />
            <VolumeControl />
        </section>
    )
}

export default AudioPlayer
