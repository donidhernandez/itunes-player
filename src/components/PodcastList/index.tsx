import SoundDetails from '../AudioPlayer/SoundDetails'
import ClockIcon from '../Icons/ClockIcon'
import PlayButton from '../PlayButton'

const PodcastList = () => {
    const buttonStyles = {
        playButton: {
            height: '30px',
            width: '30px',
        },
        pauseButton: {
            height: '30px',
            width: '30px',
            iconDimension: 16,
        },
    }

    const soundDetailsStyles = {
        imageStyles: {
            height: '45px',
            width: '45px',
            borderRadius: '8px',
        },
        containerStyles: {
            minWidth: '100%',
        },
    }

    return (
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
                    <tr className="text-sm bg-transparent border-b border-white border-opacity-5">
                        <td>
                            <PlayButton {...buttonStyles} />
                        </td>
                        <td className="px-6 py-4">
                            <SoundDetails {...soundDetailsStyles} />
                        </td>
                        <td className="px-6 py-4 text-white opacity-30 truncate">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </td>
                        <td className="px-6 py-4 text-white opacity-30">
                            an hour ago
                        </td>
                        <td className="px-6 py-4 text-white opacity-30">
                            8:12
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        // <table classNameName="table-auto w-full">
        //     <thead classNameName="text-sm font-semibold text-white opacity-30">
        //         <tr classNameName="text-left">
        //             <th>#</th>
        //             <th>Name</th>
        //             <th>Description</th>
        //             <th>Released</th>
        //             <th>
        //                 <ClockIcon />
        //             </th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td>
        //                 <PlayButton {...buttonStyles} />
        //             </td>
        //             <td>
        //                 <SoundDetails {...soundDetailsStyles} />
        //             </td>
        //             <td classNameName="text-white opacity-30">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //             </td>
        //             <td classNameName="text-white opacity-30">an hour ago</td>
        //             <td classNameName="text-white opacity-30">8:12</td>
        //         </tr>
        //     </tbody>
        // </table>
    )
}

export default PodcastList
