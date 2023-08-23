import ProgressBar from '../ProgressBar'

const TrackDurationControl = () => {
    return (
        <div className="flex  w-full items-center gap-4 text-white ml-4">
            <span>03:14</span>
            <ProgressBar minWidth="380" />
            <span>12:42</span>
        </div>
    )
}

export default TrackDurationControl
