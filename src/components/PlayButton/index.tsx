import { useState } from 'react'
import PauseIcon from '../Icons/PauseIcon'
import PlayIcon from '../Icons/PlayIcon'

const PlayButton = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = () => {
        setIsPlaying((isPlaying) => !isPlaying)
    }

    return !isPlaying ? (
        <button
            onClick={handlePlay}
            className="h-[50px] w-[50px] flex items-center justify-center transition-all duration-300 ease-in-out"
        >
            <PlayIcon />
        </button>
    ) : (
        <button
            onClick={handlePlay}
            className="h-[50px] w-[50px] rounded-full bg-indigo-600 flex items-center justify-center  transition-all duration-300 ease-in-out"
        >
            <PauseIcon />
        </button>
    )
}

export default PlayButton
