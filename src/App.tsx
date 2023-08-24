import { Toaster } from 'sonner'
import OrderBySelect from './components/OrderBySelect'
import PodcastList from './components/PodcastList'
import SearchBar from './components/SearchBar'

function App() {
    return (
        <main className="h-full min-h-screen pb-44 bg-gradient-to-br from-slate-800 to-dark-900 flex flex-col items-center">
            <section className="max-w-4xl pt-10">
                <SearchBar />
                <section className="flex justify-end pt-10">
                    <OrderBySelect />
                </section>
                <PodcastList />
            </section>

            {/* <AudioPlayer /> */}
            <Toaster richColors closeButton duration={3000} />
        </main>
    )
}

export default App
