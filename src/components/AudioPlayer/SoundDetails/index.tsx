interface ISoundDetails {
    imageStyles?: {
        height: string
        width: string
        borderRadius: string
    }
    containerStyles?: {
        minWidth: string
    }
}

const SoundDetails = ({ imageStyles, containerStyles }: ISoundDetails) => {
    return (
        <section
            className="flex items-center gap-4  max-w-full"
            style={containerStyles ?? { minWidth: '450px' }}
        >
            <img src="https://picsum.photos/110/" style={imageStyles} />
            <div>
                <h3 className="text-white font-medium text-base leading-5">
                    How to make your partner talk more
                </h3>
                <p className="text-white opacity-30">Ken Adams</p>
            </div>
        </section>
    )
}

export default SoundDetails
