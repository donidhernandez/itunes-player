import RetryIcon from '../../Icons/RetryIcon'
import ShuffleIcon from '../../Icons/ShuffleIcon'
import StepBackardIcon from '../../Icons/StepBackardIcon'
import StepForwardIcon from '../../Icons/StepForwardIcon'
import PlayButton from '../../PlayButton'

const PlayerControls = () => {
    return (
        <section className="flex w-full gap-6 mx-3">
            <button>
                <ShuffleIcon />
            </button>
            <button>
                <StepBackardIcon />
            </button>

            <PlayButton isActive isOnBottom />

            <button>
                <StepForwardIcon />
            </button>

            <button>
                <RetryIcon />
            </button>
        </section>
    )
}

export default PlayerControls
