import { useState } from 'react'
import PauseIcon from '../Icons/PauseIcon'
import PlayIcon from '../Icons/PlayIcon'

interface IPlayButton {
    playButton?: {
        height: string
        width: string
    }
    pauseButton?: {
        height: string
        width: string
        iconDimension?: number
    }
}

const PlayButton = ({ playButton, pauseButton }: IPlayButton) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = () => {
        setIsPlaying((isPlaying) => !isPlaying)
    }

    return !isPlaying ? (
        <button
            onClick={handlePlay}
            className={`h-[${playButton?.height ?? '50px'}] w-[${
                playButton?.width ?? '50px'
            }] flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out`}
        >
            <PlayIcon />
        </button>
    ) : (
        <button
            onClick={handlePlay}
            className={`h-[${pauseButton?.height ?? '50px'}] w-[${
                pauseButton?.width ?? '50px'
            }] rounded-full bg-indigo-600 flex p-2 items-center justify-center  transition-all duration-300 ease-in-out`}
        >
            <PauseIcon iconDimension={pauseButton?.iconDimension} />
        </button>
    )
}

export default PlayButton
