import AudioPlayer from './components/AudioPlayer'
import OrderBySelect from './components/OrderBySelect'
import PodcastList from './components/PodcastList'
import SearchBar from './components/SearchBar'

function App() {
    return (
        <main className="h-screen bg-gradient-to-br from-slate-800 to-dark-900 flex flex-col items-center">
            <section className="max-w-4xl pt-10">
                <SearchBar />
                <section className="flex justify-end pt-10">
                    <OrderBySelect />
                </section>
                <PodcastList />
            </section>

            <AudioPlayer />
        </main>
    )
}

export default App
