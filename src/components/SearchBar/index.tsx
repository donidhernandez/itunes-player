import { useEffect, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import SearchIcon from '../Icons/SearchIcon'
import searchPodcasts from '../../services/queries/searchPodcast'
import { toast } from 'sonner'
import usePodcastActions from '../../hooks/store/usePodcastActions'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const { updatePodcastsList } = usePodcastActions()

    const debouncedSearch = useDebounce(searchTerm, 500)
    const handleSearchPodcasts = async () => {
        if (debouncedSearch) {
            const podcastsResponse = await searchPodcasts(debouncedSearch)

            updatePodcastsList(podcastsResponse.results)
        }
    }

    const handleSetSearchTerm = (e: { target: { value: string } }) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        handleSearchPodcasts().catch((error) => {
            toast.error(error.message)
        })
    }, [debouncedSearch, searchTerm])

    return (
        <section className="relative w-full h-[50px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon />
            </div>
            <input
                className="block w-full p-4 pl-12 text-sm text-white border border-none rounded-2xl bg-slate-700 "
                onChange={handleSetSearchTerm}
                required
                type="search"
                value={searchTerm}
            />
        </section>
    )
}

export default SearchBar
