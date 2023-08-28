import { useState } from 'react'
import AngleDownIcon from '../Icons/AngleDownIcon'
import { Options } from '../../utils/enums'
import { useAppSelector } from '../../hooks/store/store'
import usePodcastActions from '../../hooks/store/usePodcastActions'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { sortBy } = useAppSelector((state) => state.podcasts)

    const { updateSortByOption } = usePodcastActions()

    const handleOpen = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <div className="relative flex flex-col items-center w-[150px] h-full">
            <button
                onClick={handleOpen}
                className="bg-transparent flex items-center justify-end gap-2 font-normal text-white"
            >
                {sortBy ?? 'Order By'}

                <AngleDownIcon />
            </button>

            {isOpen && (
                <div className="rounded-lg absolute top-8  w-full min-w-[180px] py-4 right-0 bg-slate-700 text-white z-10">
                    {Object.values(Options).map(
                        (option, index) =>
                            option !== sortBy && (
                                <button
                                    className="flex items-center  text-left cursor-pointer py-1 px-4 hover:bg-dark-800 w-full"
                                    key={index}
                                    onClick={() => {
                                        updateSortByOption(option)
                                    }}
                                >
                                    {option}
                                </button>
                            )
                    )}
                </div>
            )}
        </div>
    )
}

export default Dropdown
