import VolumeIcon from '../../Icons/VolumeIcon'
import ProgressBar from '../ProgressBar'

const VolumeControl = () => {
    return (
        <div className="flex items-center gap-3 mx-6">
            <VolumeIcon />
            <ProgressBar />
        </div>
    )
}

export default VolumeControl
