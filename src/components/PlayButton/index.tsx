import { useEffect, useRef, useState } from 'react'
import PlayIcon from '../Icons/PlayIcon'
import PauseIcon from '../Icons/PauseIcon'
import { type Podcast } from '../../types'
import { constants } from 'buffer'
import { usePodcastsContext } from '../../context/Podcasts'

interface IPlayButton {
    isActive: boolean
    isOnBottom?: boolean
    handleActivePodcast?: (value: Podcast) => void
    podcast?: Podcast
    buttonStyles?: {
        height: string
        width: string
        iconDimension?: number
    }
}

const PlayButton = ({
    isActive,
    isOnBottom,
    handleActivePodcast,
    podcast,
    buttonStyles,
}: IPlayButton) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const { currentPodcast, audioRef } = usePodcastsContext()

    useEffect(() => {
        if (isPlaying && !isActive) {
            setIsPlaying(false)
        }
    }, [isPlaying, isActive])

    useEffect(() => {
        if (isOnBottom && !isPlaying && isActive) {
            setIsPlaying(true)
        }
    }, [])

    const handlePlay = () => {
        if (!isPlaying && !isActive) {
            handleActivePodcast(podcast)
            setIsPlaying(true)
            audioRef.current.play()
        }

        if (isActive) {
            const updatedIsPlaying = !isPlaying
            setIsPlaying(updatedIsPlaying)
            if (!updatedIsPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
        }
    }

    return (
        <button
            onClick={handlePlay}
            className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out ${
                isPlaying && 'rounded-full bg-indigo-600'
            }`}
            style={{
                height: buttonStyles?.height ?? '50px',
                width: buttonStyles?.width ?? '50px',
            }}
        >
            <audio ref={audioRef}>
                <source src={currentPodcast?.previewUrl}></source>
            </audio>
            {isPlaying ? (
                <PauseIcon iconDimension={buttonStyles?.iconDimension} />
            ) : (
                <PlayIcon />
            )}
        </button>
    )
}

export default PlayButton
