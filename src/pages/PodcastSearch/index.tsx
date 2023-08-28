import AudioPlayer from '../../components/AudioPlayer'
import OrderBySelect from '../../components/OrderBySelect'
import PodcastList from '../../components/PodcastList'
import SearchBar from '../../components/SearchBar'
import { useAppSelector } from '../../hooks/store/store'

const PodcastSearch = () => {
    const { currentPodcast } = useAppSelector((state) => state.podcasts)

    return (
        <>
            <section className="md:max-w-4xl px-10 w-full pt-10 mb-20">
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
