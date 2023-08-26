import { useCallback, useEffect, useRef, useState } from 'react'
import { useAudioPlayer } from 'react-use-audio-player'

import { usePodcastsContext } from '../../context/Podcasts'
import RetryIcon from '../Icons/RetryIcon'
import ShuffleIcon from '../Icons/ShuffleIcon'
import StepBackardIcon from '../Icons/StepBackardIcon'
import StepForwardIcon from '../Icons/StepForwardIcon'
import SoundDetails from './SoundDetails'

import PauseIcon from '../Icons/PauseIcon'
import PlayIcon from '../Icons/PlayIcon'

import MutedVolumeIcon from '../Icons/MutedVolumeIcon'
import VolumeIcon from '../Icons/VolumeIcon'
import { formatTime } from '../../utils/formatTime'

const AudioPlayer = () => {
    const [audioVolume, setAudioVolume] = useState(50)
    const [pos, setPos] = useState(0)
    const [trackPosition, setTrackPosition] = useState(0)
    const { podcasts, updateCurrentPodcast, currentPodcast } =
        usePodcastsContext()
    const {
        playing,
        load,
        togglePlayPause,
        mute,
        muted,
        setVolume,
        duration,
        seek,
        getPosition,
    } = useAudioPlayer()
    const soundDetailsStyles = {
        imageStyles: {
            height: '110px',
            width: '110px',
        },
    }

    const frameRef = useRef<number>()

    const seekBarElem = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (currentPodcast) {
            load(currentPodcast.previewUrl, {
                autoplay: false,
                initialMute: false,
            })
        }
    }, [currentPodcast])

    useEffect(() => {
        const animate = () => {
            setTrackPosition(getPosition())
            frameRef.current = requestAnimationFrame(animate)
        }

        frameRef.current = window.requestAnimationFrame(animate)

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current)
            }
        }
    }, [])

    const goTo = useCallback(
        (event) => {
            const { pageX: eventOffsetX } = event

            if (seekBarElem.current) {
                const elementOffsetX = seekBarElem.current.offsetLeft
                const elementWidth = seekBarElem.current.clientWidth
                const percent = (eventOffsetX - elementOffsetX) / elementWidth
                seek(percent * duration)
            }
        },
        [duration, playing, seek]
    )

    useEffect(() => {
        if (currentPodcast) {
            const i = setInterval(() => {
                setPos(getPosition())
            }, 500)

            return () => {
                clearInterval(i)
            }
        }
    }, [getPosition, currentPodcast])

    const handleVolumeChange = useCallback((e) => {
        setAudioVolume(e.target.value)
        const ratio = e.target.value / 100
        setVolume(ratio)
    }, [])

    return (
        <section className="flex items-center w-full sticky bottom-0 bg-slate-700">
            <SoundDetails
                artistName={currentPodcast.artistName}
                podcastImage={currentPodcast.artworkUrl100}
                podcastName={currentPodcast.collectionName}
                {...soundDetailsStyles}
            />
            <section className="w-1/3 flex gap-6 mx-3">
                <button>
                    <ShuffleIcon />
                </button>
                <button>
                    <StepBackardIcon />
                </button>

                <button
                    onClick={togglePlayPause}
                    className={`h-[50px] w-[50px] flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out ${
                        playing && 'rounded-full bg-indigo-600'
                    }`}
                >
                    {playing ? <PauseIcon /> : <PlayIcon />}
                </button>

                <button>
                    <StepForwardIcon />
                </button>

                <button>
                    <RetryIcon />
                </button>
            </section>
            <section className="flex  w-1/2 items-center gap-4 text-white ml-4">
                <span>{formatTime(pos)}</span>
                <div
                    className="w-full rounded-full h-1.5 bg-gray-700 cursor-pointer"
                    ref={seekBarElem}
                    onClick={goTo}
                >
                    <div
                        className="bg-white h-1.5 rounded-full"
                        style={{
                            width: `${(trackPosition / duration) * 100}%`,
                        }}
                    ></div>
                </div>
                <span>{formatTime(duration)}</span>
            </section>
            <section className="flex items-center gap-3 mx-6">
                {muted ? (
                    <button
                        onClick={() => {
                            mute(false)
                        }}
                    >
                        <MutedVolumeIcon />
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            mute(true)
                        }}
                    >
                        <VolumeIcon />
                    </button>
                )}
                <input
                    type="range"
                    id="volume-control"
                    className="w-1/2"
                    value={audioVolume}
                    onChange={handleVolumeChange}
                />
            </section>
        </section>
    )
}

export default AudioPlayer
