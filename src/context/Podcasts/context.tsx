import { createContext, useContext } from 'react'

const PodcastsContext = createContext(null)
PodcastsContext.displayName = 'PodcastsContext'

const usePodcastsContext = () => {
    return useContext(PodcastsContext)
}

export { PodcastsContext, usePodcastsContext }
