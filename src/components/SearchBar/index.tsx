import SearchIcon from '../Icons/SearchIcon'

const SearchBar = () => {
    return (
        <section className="relative min-w-[822px] max-h-[50px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon />
            </div>
            <input
                type="search"
                className="block w-full p-4 pl-12 text-sm text-white border border-none rounded-2xl bg-slate-700 "
                required
            />
        </section>
    )
}

export default SearchBar
