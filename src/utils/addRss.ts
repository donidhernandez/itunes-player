import rssParser from '../services/queries/rssParser'
import type { Podcast } from '../types'

const addRss = async (podcast: Podcast) => {
    const feed = await rssParser(podcast.feedUrl)
    const podcastToPreview = feed.items[0].enclosure.url
    const podcastToPlay = {
        ...podcast,
        podcastToPreview,
    }

    return podcastToPlay
}

export default addRss
