import AudioPlayer from './components/AudioPlayer'
import OrderBySelect from './components/OrderBySelect'
import SearchBar from './components/SearchBar'

function App() {
    return (
        <main className="h-screen bg-gradient-to-br from-slate-800 to-dark-900 flex flex-col items-center">
            <section className="pt-10">
                <SearchBar />
                <section className="flex justify-end pt-10">
                    <OrderBySelect />
                </section>
            </section>

            <AudioPlayer />
        </main>
    )
}

export default App
