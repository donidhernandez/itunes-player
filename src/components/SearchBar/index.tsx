import { useEffect, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import SearchIcon from '../Icons/SearchIcon'
import { toast } from 'sonner'
import usePodcastActions from '../../hooks/store/usePodcastActions'
import { useSearchPodcastsQuery } from '../../services/podcasts'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const { updatePodcastsList } = usePodcastActions()

    const debouncedSearch = useDebounce(searchTerm, 500)
    const { data: podcasts, isError } = useSearchPodcastsQuery(debouncedSearch)

    const handleSetSearchTerm = (e: { target: { value: string } }) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        if (podcasts && searchTerm !== '') {
            updatePodcastsList(podcasts.results)
        }
    }, [podcasts])

    if (isError) {
        toast.error('There was an error fetching podcast')
    }

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
