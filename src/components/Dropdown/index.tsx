import { useState } from 'react'
import AngleDownIcon from '../Icons/AngleDownIcon'

interface Options {
    name: string
}

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState({ name: 'Order by' })

    const options: Options[] = [
        {
            name: 'Name',
        },
        {
            name: 'Description',
        },
        {
            name: 'Release Date',
        },
    ]

    const handleOpen = () => {
        setIsOpen((prev) => !prev)
    }

    const handleSelection = (option: Options) => {
        setSelectedOption(option)
    }

    return (
        <div className="relative flex flex-col items-center w-[150px] h-full">
            <button
                onClick={handleOpen}
                className="bg-transparent flex items-center justify-end gap-2 font-normal text-white"
            >
                {selectedOption.name}

                <AngleDownIcon />
            </button>

            {isOpen && (
                <div className="rounded-lg absolute top-8  w-full min-w-[180px] py-4 right-0 bg-slate-700 text-white">
                    {options.map(
                        (option, index) =>
                            option.name !== selectedOption.name && (
                                <button
                                    className="flex items-center  text-left cursor-pointer py-1 px-4 hover:bg-dark-800 w-full"
                                    key={index}
                                    onClick={() => {
                                        handleSelection(option)
                                    }}
                                >
                                    {option.name}
                                </button>
                            )
                    )}
                </div>
            )}
        </div>
    )
}

export default Dropdown
