import { usePodcastsContext } from '../../context/Podcasts'
import { type Podcast } from '../../types'
import ClockIcon from '../Icons/ClockIcon'
import PodcastItem from './PodcastItem'

const PodcastList = () => {
    const { podcasts } = usePodcastsContext()

    return (
        podcasts &&
        podcasts.length > 0 && (
            <div className="relative overflow-x-auto mt-10">
                <table className="w-full text-left">
                    <thead className="bg-transparent text-sm font-semibold text-white opacity-30 border-b border-white border-opacity-5">
                        <tr>
                            <th scope="col" className="pr-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Released
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <ClockIcon />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {podcasts.map((podcast: Podcast, index) => (
                            <PodcastItem key={index} podcast={podcast} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    )
}

export default PodcastList
