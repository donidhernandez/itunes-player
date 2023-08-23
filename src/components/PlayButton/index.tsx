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
            className="h-[30px] w-[30px] flex items-center justify-center"
        >
            <PlayIcon />
        </button>
    ) : (
        <button
            onClick={handlePlay}
            className="h-[50px] w-[50px] rounded-full bg-indigo-600 flex items-center justify-center"
        >
            <PauseIcon />
        </button>
    )
}

export default PlayButton
