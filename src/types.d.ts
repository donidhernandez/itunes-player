export interface PodacastAPIResponse {
    resultCount: number
    results: Podcast[]
}

export interface PodacastAPIDetailResponse {
    resultCount: number
    results: PodcastDetail[]
}

export interface Podcast {
    wrapperType: string
    kind: string
    collectionId: number
    podcastToPreview?: string
    podcastList?: PodcastRSS[]
    trackId: number
    artistName: string
    collectionName: string
    trackName: string
    collectionCensoredName: string
    trackCensoredName: string
    previewUrl: string
    collectionViewUrl: string
    feedUrl: string
    trackViewUrl: string
    artworkUrl30: string
    artworkUrl60: string
    artworkUrl100: string
    collectionPrice: number
    trackPrice: number
    collectionHdPrice: number
    releaseDate: Date
    collectionExplicitness: string
    trackExplicitness: string
    trackCount: number
    trackTimeMillis: number
    country: string
    currency: string
    primaryGenreName: string
    contentAdvisoryRating: string
    artworkUrl600: string
    genreIds: string[]
    genres: string[]
}

export interface PodcastRSS {
    items: Item[]
    feedUrl: string
    image: Image
    paginationLinks: PaginationLinks
    title: string
    description: string
    link: string
    language: string
    copyright: string
    itunes: PodcastRSSItunes
}

export interface Image {
    link: string
    url: string
    title: string
}

export interface Item {
    title: string
    link: string
    pubDate: string
    'content:encoded': string
    'content:encodedSnippet': string
    enclosure: Enclosure
    content: string
    contentSnippet: string
    guid: string
    isoDate: Date
    itunes: ItemItunes
    categories?: string[]
}

export interface Enclosure {
    url: string
    length: string
    type: Type
}

export enum Type {
    AudioMPEG = 'audio/mpeg',
}

export interface ItemItunes {
    author: Author
    duration: string
    image: string
    episode?: string
    season?: string
    episodeType: EpisodeType
    keywords?: string
    explicit?: Explicit
}

export enum Author {
    Headgum = 'Headgum',
}

export enum EpisodeType {
    Bonus = 'bonus',
    Full = 'full',
    Trailer = 'trailer',
}

export enum Explicit {
    Clean = 'clean',
    Yes = 'yes',
}

export interface PodcastRSSItunes {
    owner: Owner
    image: string
    categories: string[]
    categoriesWithSubs: CategoriesWithSub[]
    author: Author
    summary: string
    explicit: Explicit
}

export interface CategoriesWithSub {
    name: string
    subs: Sub[] | null
}

export interface Sub {
    name: string
}

export interface Owner {
    name: Author
    email: string
}

export interface PaginationLinks {
    self: string
    first: string
    last: string
}
