import './ProgressBar.css'

interface IProgressBar {
    minWidth?: string
}

const ProgressBar = ({ minWidth = '100' }: IProgressBar) => {
    return (
        <input
            type="range"
            id="volume-control"
            style={{ minWidth: `${minWidth}px` }}
        />
    )
}

export default ProgressBar
