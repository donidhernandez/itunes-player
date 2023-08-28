interface ISoundDetails {
    goToPodcast?: (artistnName: string) => void
    artistName?: string
    podcastName?: string
    podcastImage?: string
    imageStyles?: {
        height: string
        width: string
        borderRadius?: string
    }
    containerStyles?: {
        minWidth: string
    }
}

const SoundDetails = ({
    artistName,
    podcastImage,
    podcastName,
    imageStyles,
    goToPodcast,
}: ISoundDetails) => {
    return (
        <section className="flex items-center gap-4  w-1/2 cursor-pointer">
            <img src={podcastImage} style={imageStyles} />
            <div
                onClick={() => {
                    goToPodcast(artistName)
                }}
            >
                <h3 className="text-white font-medium text-base leading-5">
                    {podcastName}
                </h3>
                <p className="text-white opacity-30">{artistName}</p>
            </div>
        </section>
    )
}

export default SoundDetails
