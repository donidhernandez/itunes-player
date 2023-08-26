import AudioPlayer from '../../components/AudioPlayer'
import OrderBySelect from '../../components/OrderBySelect'
import PodcastList from '../../components/PodcastList'
import SearchBar from '../../components/SearchBar'
import { usePodcastsContext } from '../../context/Podcasts'

const PodcastSearch = () => {
    const { currentPodcast } = usePodcastsContext()

    return (
        <>
            <section className="md:max-w-4xl w-full pt-10 mb-20">
                <SearchBar />
                <section className="flex justify-end pt-10">
                    <OrderBySelect />
                </section>
                <PodcastList />
            </section>

            {currentPodcast && <AudioPlayer />}
        </>
    )
}

export default PodcastSearch
