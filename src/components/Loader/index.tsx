import PulseLoader from 'react-spinners/PulseLoader'

const Loader = () => {
    return (
        <div className="h-full w-full justify-center items-center flex">
            <PulseLoader size={100} color="#5C67DE" />
        </div>
    )
}

export default Loader
