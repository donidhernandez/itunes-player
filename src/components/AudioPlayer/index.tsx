import PlayerControls from './PlayerControls'
import SoundDetails from './SoundDetails'
import TrackDurationControl from './TrackDurationControl'
import VolumeControl from './VolumeControl'

const AudioPlayer = () => {
    return (
        <section className="flex items-center justify-around w-full absolute bottom-0 bg-slate-700">
            <SoundDetails />
            <PlayerControls />
            <audio>
                <source src="/test.flac"></source>
            </audio>
            <TrackDurationControl />
            <VolumeControl />
        </section>
    )
}

export default AudioPlayer
