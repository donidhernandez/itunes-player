import BackButton from '../../components/BackButton'
import OrderBySelect from '../../components/OrderBySelect'
import SearchBar from '../../components/SearchBar'
import PauseIcon from '../../components/Icons/PauseIcon'
import PlayIcon from '../../components/Icons/PlayIcon'
import { useAppSelector } from '../../hooks/store/store'
import AudioPlayer from '../../components/AudioPlayer'
import PodcastList from '../../components/PodcastList'

const PodcastDetails = () => {
    const { currentPodcast, isPlaying } = useAppSelector(
        (state) => state.podcasts
    )

    return (
        currentPodcast && (
            <>
                <section className="md:max-w-4xl w-full pt-10 mb-20">
                    <section className="flex items-center w-full gap-4">
                        <BackButton />
                        <SearchBar />
                    </section>

                    <img
                        src={currentPodcast.artworkUrl600}
                        alt={currentPodcast.artistName}
                        className="max-h-[280px] my-4 h-full w-full object-cover bg-center aspect-auto rounded-2xl"
                    />

                    <section className="flex  items-center gap-3">
                        <button
                            className={`h-[60px] w-[60px] flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out ${
                                isPlaying && 'rounded-full bg-indigo-600'
                            }`}
                        >
                            {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        </button>
                        <h1 className="text-white text-2xl text-center font-bold">
                            {currentPodcast.trackName}
                        </h1>
                        <OrderBySelect />
                    </section>
                    <PodcastList />
                </section>

                {currentPodcast && <AudioPlayer />}
            </>
        )
    )
}

export default PodcastDetails
