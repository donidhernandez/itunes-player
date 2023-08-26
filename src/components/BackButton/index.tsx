import { Link } from 'react-router-dom'
import AngleLeftIcon from '../Icons/AngleLeftIcon'

const BackButton = () => {
    return (
        <>
            <Link
                className="h-[50px] min-w-[50px] bg-slate-700 rounded-2xl flex items-center justify-center"
                to="/"
            >
                <AngleLeftIcon />
            </Link>
        </>
    )
}

export default BackButton
