import { useEffect, useState } from 'react'
import BackButton from '../../components/BackButton'
import OrderBySelect from '../../components/OrderBySelect'
import PodcastList from '../../components/PodcastList'
import SearchBar from '../../components/SearchBar'
import lookUpPodcast from '../../services/queries/lookUpPodcast'
import { toast } from 'sonner'
import { type PodcastDetail } from '../../types'
import { useParams } from 'react-router-dom'
import PauseIcon from '../../components/Icons/PauseIcon'
import PlayIcon from '../../components/Icons/PlayIcon'
import { useAppSelector } from '../../hooks/store/store'

const PodcastDetails = () => {
    const [podcast, setPodcast] = useState<PodcastDetail>()
    const { currentPodcast } = useAppSelector((state) => state.podcasts)
    const [playing, setPlaying] = useState(false)
    const { id } = useParams()

    const lookupPodcastDetails = async () => {
        const podcast = await lookUpPodcast(id)
        setPodcast(podcast.results[0])
    }

    useEffect(() => {
        lookupPodcastDetails().catch((error) => {
            return toast.error(error.message)
        })
    }, [])

    return (
        podcast && (
            <>
                <section className="md:max-w-4xl w-full pt-10 mb-20">
                    <section className="flex items-center w-full gap-4">
                        <BackButton />
                        <SearchBar />
                    </section>

                    <img
                        src={podcast.artworkUrl600}
                        alt={podcast.artistName}
                        className="max-h-[400px] my-4 h-full w-full object-fit rounded-2xl"
                    />

                    <section className="flex justify-around items-center gap-4">
                        <button
                            className={`h-[30px] w-[30px] flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out ${
                                playing && 'rounded-full bg-indigo-600'
                            }`}
                        >
                            {playing ? <PauseIcon /> : <PlayIcon />}
                        </button>
                        <h1 className="text-white text-4xl text-center font-bold">
                            {podcast.trackName}
                        </h1>
                        <OrderBySelect />
                    </section>
                    <PodcastList />
                </section>

                {/* {currentPodcast && <AudioPlayer />} */}
            </>
        )
    )
}

export default PodcastDetails
